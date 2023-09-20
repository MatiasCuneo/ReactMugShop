import React from 'react';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import register from "../imgs/register.svg";

function Register() {
  const formStyle = {
    height: '85%',
  };

  const imageStyle = {
    height: '70%',
  };

  return (
    <div className="Register">
      <NavBar />
      <div className="login">
        <form action="#" method="get" style={formStyle}>
          <h1>Registrate</h1>
          <div className="form_input">
            <label htmlFor="usuario">Ingresar Nombre de Usuario</label>
            <input type="text" name="usuario" id="usuario" placeholder="Nombre de Usuario" required />
          </div>
          <div className="form_input">
            <label htmlFor="email">Ingresar Correo Electrónico</label>
            <input type="email" name="email" id="email" placeholder="Correo Electronico" required />
          </div>
          <div className="form_input">
            <label htmlFor="password">Ingresar Contraseña</label>
            <input type="text" name="password" id="password" placeholder="Contraseña" required />
          </div>
          <span className="terms">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              <p>Al ingresar aceptas nuestros </p>
              <a href="#">Terminos y Condiciones.</a>
            </label>
          </span>
          <button type="submit" style={{ marginTop: 0 }}>Registrarse</button>
        </form>
        <img src={register} alt="register" style={imageStyle} />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
