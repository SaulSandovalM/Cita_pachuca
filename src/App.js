import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/login/Login";
import TablaComprometidos from './components/comprometidos/TablaComprometidos';
import Edit from './components/comprometidos/Edit';
import Show from './components/comprometidos/Show';
import Contact from './components/contact/Contact';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={TablaComprometidos}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/Login" component={Login} />
      <Route path="/Contact" component={Contact} />
      <Route path='/edit/:id' component={Edit} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
