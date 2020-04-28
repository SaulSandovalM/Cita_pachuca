import React, { Component } from 'react';
import './Contact.css';
import firebase from "../../firebase/firebaseConfig";

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
