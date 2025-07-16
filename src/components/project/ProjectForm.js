import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(
    projectData || {
      name: '',
      budget: '',
      category: {
        id: '',
        name: ''
      }
    }
  )

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        value={project.name ? project.name : ''}
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Orçamento"
        name="budget"
        placeholder="Insira o orçamento"
        value={project.budget ? project.budget : ''}
        handleOnChange={handleChange}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        value={project.category.id}
        handleOnChange={handleCategory}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm
