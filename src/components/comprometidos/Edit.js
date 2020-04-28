import React, { Component } from 'react';
import firebase from '../../Firebase';
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

    const { nombre, apellidop, apellidom, email, sexo, cel, tel, sede, cita, fecha } = this.state;

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
      fecha
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
        fecha: ''
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
            <h4><div to={`/show/${this.state.key}`} class="btn btn-primary">Board List</div></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" name="nombre" value={this.state.nombre} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="cel">Telefono:</label>
                <input type="text" class="form-control" name="cel" value={this.state.cel} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="fecha">Fecha:</label>
                <input type="text" class="form-control" name="fecha" value={this.state.fecha} onChange={this.onChange} placeholder="Author" />
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
