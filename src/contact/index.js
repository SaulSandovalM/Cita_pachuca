import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import './styled.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-citas-545b9.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <div style={{width: '40%'}}>
        <form onSubmit={handleSubmit} style={{marginTop: '100px', color: 'black', minHeight: '100vh'}}>
          <h1>Complete el formulario</h1>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={updateInput}
            value={formData.name || ''}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Mensaje"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
