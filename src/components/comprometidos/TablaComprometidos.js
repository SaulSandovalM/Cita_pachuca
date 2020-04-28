import React, { Component } from 'react';
import './Comprometidos.css';
import firebase from '../../firebase/firebaseConfig';
import { Link } from 'react-router-dom';

class TablaComprometidos extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('citas');
    this.unsubscribe = null;
    this.state = {
      citas: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const citas = [];
    querySnapshot.forEach((doc) => {
      const { nombre, apellidop, apellidom, email, sexo, cel, tel, sede, cita, fecha } = doc.data();
      citas.push({
        key: doc.id,
        doc, // DocumentSnapshot
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
      });
    });
    this.setState({
      citas
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {

    var user = firebase.auth().currentUser;
    var email;

    if (user != null) {
      email = user.email;
    }

    let admin;
    if (email == 'administrador@procu.com') {
      admin = 'ADMIN';
    } else if (email == 'nayra@procu.com') {
      admin = 'NAYRA';
    } else if (email == 'laura@procu.com') {
      admin = 'LAURA';
    } else if (email == 'miguel@procu.com') {
      admin = 'MIGUEL';
    } else if (email == 'teresa@procu.com') {
      admin = 'TERESA';
    } else if (email == 'marcos@procu.com') {
      admin = 'MARCOS';
    } else if (email == 'eloy@procu.com') {
      admin = 'ELOY';
    } else if (email == 'karina@procu.com') {
      admin = 'KARINA';
    } else if (email == 'martha@procu.com') {
      admin = 'MARTHA';
    } else if (email == 'lilia@procu.com') {
      admin = 'LILIA';
    } else if (email == 'cenely@procu.com') {
      admin = 'CENELY';
    } else if (email == 'hector@procu.com') {
      admin = 'HECTOR';
    } else if (email == 'omar@procu.com') {
      admin = 'OMAR';
    }

    return (
      <div className="cent-compro">
        <div className="App">
          <h2 className="title" style={{fontFamily: 'Arial'}}>Citas</h2>
          <div className="products-al">
            <div className="a-row-t">Nombre</div>
            <div className="a-row-t">Telefono Celular</div>
            <div className="a-row-t">Fecha</div>
            <div className="a-row-t">Tipo de Cita</div>
            <div className="a-row-t"></div>
          </div>
          <div>
            {this.state.citas.map(citas =>
              <div>
                {/*{citas.realizo === admin &&*/}
                <div className="products-al">
                  <div className="a-row">{citas.nombre} {citas.apellidop} {citas.apellidom}</div>
                  <div className="a-row">{citas.cel}</div>
                  <div className="a-row">{citas.fecha}</div>
                  <div className="a-row">{citas.cita}</div>
                  <div className="a-row vista">
                    <Link to={`/edit/${citas.key}`}>Ver</Link>
                  </div>
                </div>
              {/*}*/}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TablaComprometidos;
