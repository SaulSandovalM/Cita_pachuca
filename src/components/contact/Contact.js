import React, { Component } from 'react';
import './Contact.css';
import firebase from '../../firebase/firebaseConfig';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('citas');
    this.state = {
      nombre: '',
      apellidop: '',
      apellidom: '',
      email: '',
      sexo: '',
      cel: '',
      tel: '',
      sede: '',
      cita: '',
      citas: [],
      value: '',
      suggest: '',
      key: '',
    };
  }

  cancelCourse(){
    this.refs.nombre.value="";
    this.refs.apellidop.value="";
    this.refs.apellidom.value="";
    this.refs.email.value="";
    this.refs.sexo.value="";
    this.refs.cel.value="";
    this.refs.tel.value="";
    this.refs.sede.value="";
    this.refs.cita.value="";
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellidop, apellidom, email, sexo, cel, tel, sede, cita } = this.state;

    this.ref.add({
      nombre,
      apellidop,
      apellidom,
      email,
      sexo,
      cel,
      tel,
      sede,
      cita
    }).then((docRef) => {
      this.setState({
        nombre: '',
        apellidop: '',
        apellidom: '',
        email: '',
        sexo: '',
        cel: '',
        tel: '',
        sede: '',
        cita: '',
      });
       this.props.history.push('/Contact')
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {

    const { nombre, apellidop, apellidom, email, sexo, cel, tel, sede, cita } = this.state;

    return (
      <div style={{width: '100%', justifyContent: 'center', display: 'flex', zIndex: '100', paddingTop: '100px', minHeight: '100vh'}}>
        <div style={{width: '65%'}}>
          {/*<h1 className="back-title">Expedición de Constancia de NO Antecedentes Penales</h1>
          <div className="row">
            <div className="text">
              <h5 className="title-r">Requisitos</h5>
              <p className="size">
                Si Usted Radica en México.
                <br></br><br></br>
                1.- Recibo de pago (formato F-7)
                <br></br>
                2.- Una Copia de constancia de la  Clave Única de Registro de Población (CURP) actualizada (código QR)
                <br></br>
                3.- Una Copia de Identificación Oficial (INE)
                <br></br>
                4.- Una Fotografía a color tamaño pasaporte fondo blanco.
                <br></br>
                5. Recibo de pago (formato F-7) <a href="https://ruts.hidalgo.gob.mx/tramite/572">Desacargar formato de pago</a>
                <br></br><br></br>
                Si Usted radica en el Extranjero
                <br></br><br></br>
                1. Oficio del consulado dirigido a la  Procuraduría General de Justicia del Estado de Hidalgo
                <br></br>
                2. Toma de Huellas por el Consulado
                <br></br>
                3. Copia de identificación oficial (INE, Cartilla, Pasaporte o Matrícula)
                <br></br>
                4. Una Copia de constancia de la  Clave Única de Registro de Población (CURP) actualizada (código QR)
                <br></br>
                5. 2 fotografías tamaño credencial a color de frente
                <br></br>
                6. Comprobante de Domicilio donde radica el interesado
                <br></br>
                7. Carta poder
                <br></br>
                8. Credencial original y copia de la persona que realiza el trámite
                <br></br>
                9. Recibo de pago (formato F-7) <a href="https://ruts.hidalgo.gob.mx/tramite/572">Desacargar formato de pago</a>
              </p>
            </div>
            <div className="text2-res">
              <h5 className="title-r">Ubicación</h5>
              <p className="size">Servicios Periciales Pachuca</p>
              <p className="size"><i>Impulsor Sector Primario 202, Plaza las Torres, 42082 Pachuca de Soto, Hgo.</i></p>
              <a href="https://www.google.com.mx/maps/place/Servicios+Periciales/@20.0645574,-98.7844438,18z/data=!4m5!3m4!1s0x0:0x3c9746ad18bdeb6d!8m2!3d20.065287!4d-98.7853584">Abrir ubicación Google Maps</a>
              <p className="size">Servicios Periciales Huejutla</p>
              <p className="size"><i>Olimpia, 43000 Huejutla, Hgo.</i></p>
              <a href="https://www.google.com.mx/maps/place/Agencia+del+Ministerio+Publico/@21.1496548,-98.4171,18z/data=!4m8!1m2!2m1!1sAgencia+de+Ministerio+P%C3%BAblico!3m4!1s0x85d727a12b89e037:0xb4b27e217d3f0a5e!8m2!3d21.1495294!4d-98.4171117">Abrir ubicación Google Maps</a>
              <h5 className="title-r">Informes</h5>
              <p className="size">Para más información favor de llamar al numero: <br></br>+52 (771) 71 79000 Ext. 9217</p>
            </div>
          </div>*/}

          <div style={{width: '100%'}}>
            <h1 className="back-title">Agenda tu Cita CAT</h1>
            <div className="row2">
              <div className="text2">
                <form onSubmit={this.onSubmit} ref='contactForm'>
                  <div className="form-group-r">
                    <div className="modal-name">
                      <label>Nombre:</label>
                      <input
                        type='text'
                        className="form-control-r"
                        required
                        name="nombre"
                        onChange={this.onChange}
                        ref="nombre" />
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
                        onChange={this.onChange}
                        ref="apellidop" />
                    </div>
                    <div className='porcent-r2'>
                      <label>Apellido Materno:</label>
                      <input
                        type='text'
                        className="cell-r"
                        required
                        name="apellidom"
                        onChange={this.onChange}
                        ref="apellidom" />
                    </div>
                  </div>
                  <div className="card-container-r2">
                    <div className='porcent-r'>
                      <label>Email:</label>
                      <input
                        type="email"
                        className="cell-r"
                        name="email"
                        onChange={this.onChange}
                        ref="email" />
                    </div>
                    <div className='porcent-r2'>
                      <label>Sexo:</label>
                      <select className="form-control-r" name="sexo" onChange={this.onChange} ref="sexo">
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
                        maxlength={10}
                        name="cel"
                        onChange={this.onChange}
                        ref="cel" />
                    </div>
                    <div className='porcent-r2'>
                      <label>Telefono de casa u oficina:</label>
                      <input
                        type="number"
                        className="cell-r"
                        maxlength={10}
                        name="tel"
                        onChange={this.onChange}
                        ref="tel" />
                    </div>
                  </div>

                  <div className="card-container-r2">
                    <div className='porcent-r'>
                      <label>Sede:</label>
                      <select className="form-control-r" name="sede" onChange={this.onChange} ref="sede">
                        <option name='sede' required>Pachuca de Soto</option>
                        <option name='sede' required>Tizayuca</option>
                        <option name='sede' required>Tula</option>
                        <option name='sede' required>Tulancingo</option>
                        <option name='sede' required>Ixmiquilpan</option>
                      </select>
                    </div>
                    <div className='porcent-r2'>
                      <label>Tipo de cita:</label>
                      <select className="form-control-r" name="cita" onChange={this.onChange} ref="cita">
                        <option name='cita'>Inicio de Carpeta</option>
                        <option name='cita'>Seguimiento de Carpeta</option>
                      </select>
                    </div>
                  </div>
                  <div className="presentation-cta">
                    <button type='submit' className="boton-color2">Confirmar</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
