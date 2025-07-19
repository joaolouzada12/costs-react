// src/pages/Contato.jsx
import { useState } from 'react'
import styles from './Contato.module.css'

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Obrigado pela mensagem, ${formData.name}! Em breve entraremos em contato.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className={styles.contato}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Seu nome"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="seu@email.com"
        />

        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Escreva sua mensagem aqui..."
          rows="5"
        />

        <button type="submit" className={styles.btn}>Enviar</button>
      </form>
    </section>
  )
}

export default Contato
