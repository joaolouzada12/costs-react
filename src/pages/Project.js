import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Project.module.css'

function Project() {
  const { id } = useParams()

  const [project, setProject] = useState(null)
  const [categories, setCategories] = useState([])
  const [services, setServices] = useState([])
  const [serviceForm, setServiceForm] = useState({ name: '', cost: '' })
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    category: { id: '', name: '' },
  })
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setFormData({
          name: data.name || '',
          budget: data.budget || '',
          category: data.category
            ? { id: data.category.id.toString(), name: data.category.name }
            : { id: '', name: '' },
        })
        setServices(data.services || [])
      })
      .catch((err) => console.log(err))

    fetch('http://localhost:5000/categories')
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [id])

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [message])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCategoryChange = (e) => {
    const selectedId = e.target.value
    const selectedCategory = categories.find(
      (cat) => cat.id.toString() === selectedId
    )
    setFormData({
      ...formData,
      category: selectedCategory || { id: '', name: '' },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setMessage('Projeto atualizado com sucesso!')
      })
      .catch((err) => console.log(err))
  }

  const handleServiceChange = (e) => {
    setServiceForm({
      ...serviceForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddService = (e) => {
    e.preventDefault()
    const cost = parseFloat(serviceForm.cost)
    if (!serviceForm.name || isNaN(cost) || cost <= 0) return

    if (cost > parseFloat(formData.budget)) {
      setMessage('Orçamento insuficiente para esse serviço')
      return
    }

    const newService = {
      id: Date.now(),
      name: serviceForm.name,
      cost,
    }

    const updatedServices = [...services, newService]
    const updatedBudget = parseFloat(formData.budget) - cost

    const updatedProject = {
      ...project,
      services: updatedServices,
      budget: updatedBudget,
      category: formData.category,
      name: formData.name,
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setServices(updatedServices)
        setFormData((prev) => ({
          ...prev,
          budget: updatedBudget.toString(),
        }))
        setServiceForm({ name: '', cost: '' })
        setMessage('Serviço adicionado com sucesso!')
      })
      .catch((err) => console.log(err))
  }

  const handleRemoveService = (serviceId) => {
    const serviceToRemove = services.find((s) => s.id === serviceId)
    const updatedServices = services.filter((s) => s.id !== serviceId)
    const updatedBudget = parseFloat(formData.budget) + parseFloat(serviceToRemove.cost)

    const updatedProject = {
      ...project,
      services: updatedServices,
      budget: updatedBudget,
      category: formData.category,
      name: formData.name,
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setServices(updatedServices)
        setFormData((prev) => ({
          ...prev,
          budget: updatedBudget.toString(),
        }))
        setMessage('Serviço removido com sucesso!')
      })
      .catch((err) => console.log(err))
  }

  if (!project) return <p>Carregando...</p>

  return (
    <div className={styles.edit_container}>
      <h1>Editar Projeto</h1>
      {message && <p className={styles.message}>{message}</p>}

      <div className={styles.project_section}>
        <h2>Dados do Projeto</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Nome:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>

          <label>
            Orçamento:
            <input type="number" name="budget" value={formData.budget} onChange={handleChange} />
          </label>

          <label>
            Categoria:
            <select
              name="category"
              value={formData.category?.id || ''}
              onChange={handleCategoryChange}
            >
              <option value="">Selecione uma categoria</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id.toString()}>
                  {cat.name}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className={styles.button_submit}>
            Salvar alterações
          </button>
        </form>
      </div>

      <div className={styles.services_section}>
        <h2>Serviços</h2>
        <form onSubmit={handleAddService} className={styles.services_form}>
          <label>
            Nome do Serviço:
            <input type="text" name="name" value={serviceForm.name} onChange={handleServiceChange} />
          </label>

          <label>
            Custo do Serviço:
            <input type="number" name="cost" value={serviceForm.cost} onChange={handleServiceChange} />
          </label>

          <button type="submit">Adicionar Serviço</button>
        </form>

        <div className={styles.services_list}>
          {services.map((service) => (
            <div key={service.id} className={styles.service_card}>
              <h3>{service.name}</h3>
              <p>Custo: R${parseFloat(service.cost).toFixed(2)}</p>
              <button
                className={styles.button_remove}
                onClick={() => handleRemoveService(service.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
