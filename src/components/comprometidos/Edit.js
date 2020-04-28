import React, { Component } from 'react';
import firebase from '../../firebase/firebaseConfig';
import './Comprometidos.css';

class Comprometido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nombre: '',
      apellidop: '',
      apellidom: '',
      email: '',
      sexo: '',
      cel: '',
      tel: '',
      sede: '',
      cita: '',
      fecha: '',
      hora: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('citas').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const citas = doc.data();
        this.setState({
          key: doc.id,
          nombre: citas.nombre,
          apellidop: citas.apellidop,
          apellidom: citas.apellidom,
          email: citas.email,
          sexo: citas.sexo,
          cel: citas.cel,
          tel: citas.tel,
          sede: citas.sede,
          cita: citas.cita,
          fecha: citas.fecha,
          hora: citas.hora
        });
      } else {
        console.log("No se encuentra documento");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({citas:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellidop, apellidom, email, sexo, cel, tel, sede, cita, fecha, hora } = this.state;

    const ref = firebase.firestore().collection('citas').doc(this.state.key);
    ref.set({
      nombre,
      apellidop,
      apellidom,
      email,
      sexo,
      cel,
      tel,
      sede,
      cita,
      fecha,
      hora
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
        fecha: '',
        hora: ''
      });
      this.props.history.push('/')
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Agregar fecha y hora de cita
            </h3>
          </div>
          <div class="panel-body">
            <h4><div to={`/show/${this.state.key}`} class="btn btn-primary">Agregar hora de cita</div></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" name="nombre" value={this.state.nombre} onChange={this.onChange} placeholder="Nombre" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="cel">Telefono:</label>
                <input type="text" class="form-control" name="cel" value={this.state.cel} onChange={this.onChange} placeholder="Telefono" />
              </div>
              <div class="form-group">
                <label for="fecha">Fecha:</label>
                <input type="date" class="form-control" name="fecha" value={this.state.fecha} onChange={this.onChange} placeholder="Fecha" />
              </div>
              <div class="form-group">
                <label for="hora">Hora:</label>
                <select class="form-control" name="hora" value={this.state.hora} onChange={this.onChange} placeholder="Hora">
                  <option name="hora"></option>
                  <option name="hora">9:00 am</option>
                  <option name="hora">10:00 am</option>
                  <option name="hora">11:00 am</option>
                  <option name="hora">12:00 pm</option>
                  <option name="hora">13:00 pm</option>
                  <option name="hora">14:00 pm</option>
                  <option name="hora">15:00 pm</option>
                  <option name="hora">16:00 pm</option>
                  <option name="hora">17:00 pm</option>
                </select>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Comprometido;
