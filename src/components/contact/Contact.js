import React, { useState } from 'react';
import './Contact.css';
import './Contact.scss';
import { Axios, db } from '../../firebase/firebaseConfig'

const Contact = () => {
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
      nombre: '',
      apellidop: '',
      apellidom: '',
      email: '',
      sexo: '',
      cel: '',
      tel: '',
      sede: '',
      cita: '',
      lugar: '',
      fecha_h: '',
      hora_h: '',
      desc_h: '',
      num_carpeta: '',
      parte_in: '',
      motivo: ''
    })
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-citas-545b9.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          nombre: formData.nombre,
          apellidop: formData.apellidop,
          apellidom: formData.apellidom,
          email: formData.email,
          sexo: formData.sexo,
          cel: formData.cel,
          tel: formData.tel,
          sede: formData.sede,
          cita: formData.cita,
          lugar: formData.lugar,
          fecha_h: formData.fecha_h,
          hora_h: formData.hora_h,
          desc_h: formData.desc_h,
          num_carpeta: formData.num_carpeta,
          parte_in: formData.parte_in,
          motivo: formData.motivo,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div style={{width: '100%', justifyContent: 'center', display: 'flex', zIndex: '100', paddingTop: '100px', minHeight: '100vh'}}>
      <div style={{width: '65%'}}>
        <div style={{width: '100%'}}>
          <h1 className="back-title">Agenda tu Cita</h1>
          <div className="row2">
            <div className="text2">
              <form onSubmit={handleSubmit}>
                <div className="form-group-r">
                  <div className="modal-name">
                    <label>Nombre:</label>
                    <input
                      type='text'
                      className="form-control-r"
                      required
                      name="nombre"
                      onChange={updateInput}
                      value={formData.nombre || ''} />
                  </div>
                </div>
                <div className="card-container-r2">
                  <div className='porcent-r'>
                    <label>Apellido Paterno:</label>
                    <input
                      type='text'
                      className="cell-r"
                      required
                      name="apellidop"
                      onChange={updateInput}
                      value={formData.apellidop || ''} />
                  </div>
                  <div className='porcent-r2'>
                    <label>Apellido Materno:</label>
                    <input
                      type='text'
                      className="cell-r"
                      required
                      name="apellidom"
                      onChange={updateInput}
                      value={formData.apellidom || ''} />
                  </div>
                </div>
                <div className="card-container-r2">
                  <div className='porcent-r'>
                    <label>Email:</label>
                    <input
                      type="email"
                      className="cell-r"
                      name="email"
                      onChange={updateInput}
                      value={formData.email || ''} />
                  </div>
                  <div className='porcent-r2'>
                    <label>Sexo:</label>
                    <select className="form-control-r" name="sexo" onChange={updateInput} value={formData.sexo || ''}>
                      <option name='sexo'></option>
                      <option name='sexo'>Masculino</option>
                      <option name='sexo'>Femenino</option>
                    </select>
                  </div>
                </div>

                <div className="card-container-r2">
                  <div className='porcent-r'>
                    <label>Telefono Celular:</label>
                    <input
                      type="number"
                      className="cell-r"
                      name="cel"
                      onChange={updateInput}
                      value={formData.cel || ''} />
                  </div>
                  <div className='porcent-r2'>
                    <label>Telefono de casa u oficina:</label>
                    <input
                      type="number"
                      className="cell-r"
                      name="tel"
                      onChange={updateInput}
                      value={formData.tel || ''} />
                  </div>
                </div>

                <div className="card-container-r2">
                  <div className='porcent-r'>
                    <label>Sede:</label>
                    <select className="form-control-r" name="sede" onChange={updateInput} value={formData.sede || ''}>
                      <option name='sede' required></option>
                      <option name='sede' required>Pachuca de Soto</option>
                      <option name='sede' required>Tizayuca</option>
                      <option name='sede' required>Tula</option>
                      <option name='sede' required>Tulancingo</option>
                      <option name='sede' required>Ixmiquilpan</option>
                    </select>
                  </div>
                  <div className='porcent-r2'>
                    <label>Tipo de cita:</label>
                    <select className="form-control-r" required name="cita" onChange={updateInput} value={formData.cita || ''}>
                      <option name='cita'></option>
                      <option name='cita'>Inicio de Carpeta</option>
                      <option name='cita'>Seguimiento de Carpeta</option>
                    </select>
                  </div>
                </div>

                <div style={{marginBottom: '50px'}}>
                </div>

                {formData.cita === 'Inicio de Carpeta' && (
                  <div className='border-form'>
                    <p style={{paddingLeft: '20px', paddingTop: '20px'}}>Datos de tramite</p>
                    <div className="modal-name2">
                      <label>Lugar de los hechos:</label>
                      <input
                        type='text'
                        className="form-control-r"
                        name="lugar"
                        onChange={updateInput}
                        value={formData.lugar || ''} />
                    </div>
                    <div className="card-container-r3" style={{marginTop: '15px'}}>
                      <div className='porcent-r'>
                        <label>Fecha de los hechos:</label>
                        <input
                          type='date'
                          className="cell-r"
                          name="fecha_h"
                          onChange={updateInput}
                          value={formData.fecha_h || ''} />
                      </div>
                      <div className='porcent-r2'>
                        <label>Hora de los hechos:</label>
                        <input
                          type='text'
                          className="cell-r"
                          name="hora_h"
                          onChange={updateInput}
                          value={formData.hora_h || ''} />
                      </div>
                    </div>
                    <div className="modal-name3">
                      <label>Descripcion de los hechos:</label>
                      <textarea
                        type='text'
                        className="form-control-rf"
                        required
                        name="desc_h"
                        onChange={updateInput}
                        value={formData.desc_h || ''} />
                    </div>
                  </div>
                )}

                {formData.cita === 'Seguimiento de Carpeta' && (
                   <div className='border-form'>
                     <p style={{paddingLeft: '20px', paddingTop: '20px'}}>Datos de tramite</p>
                     <div className="modal-name2">
                       <label>Numero de carpeta:</label>
                       <input
                         type='number'
                         className="form-control-r"
                         name="num_carpeta"
                         onChange={updateInput}
                         value={formData.num_carpeta || ''} />
                     </div>
                     <div className="modal-name2" style={{marginTop: '15px'}}>
                       <label>Parte Involucrada:</label>
                       <select className="form-control-r" name="parte_in" onChange={updateInput} value={formData.parte_in || ''}>
                         <option name='parte_in'></option>
                         <option name='parte_in'>Victima</option>
                         <option name='parte_in'>Asesor Juridico Victima</option>
                         <option name='parte_in'>Asesor Juridico Imputado</option>
                       </select>
                     </div>
                     <div className="modal-name3" style={{marginTop: '15px'}}>
                       <label>Motivo:</label>
                       <textarea
                         type='text'
                         className="form-control-rf"
                         name="motivo"
                         onChange={updateInput}
                         value={formData.motivo || ''}
                         placeholder="(Entrevista de testigos ...)" />
                     </div>
                   </div>
               )}

                <div style={{marginBottom: '50px'}}>
                </div>

                <button type="submit">Enviar</button>

                <div style={{marginBottom: '50px'}}>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
