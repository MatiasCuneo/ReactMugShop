import React, { useState } from 'react';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import register from "../imgs/register.svg";
import axios from 'axios';

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/register/success', {
        usuario,
        password,
        password2,
        email
      });

      alert("Usuario registrado exitosamente");
    } catch (error) {
      console.log("Error al registrar el usuario: ", error);
    }
  };

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
        <form action="/register/success" method="post" style={formStyle}>
          <h1>Registrate</h1>
          <div className="form_input">
            <label htmlFor="usuario">Ingresar Nombre de Usuario</label>
            <input type="text" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} id="usuario" placeholder="Nombre de Usuario" required />
          </div>
          <div className="form_input">
            <label htmlFor="email">Ingresar Correo Electrónico</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Correo Electronico" required />
          </div>
          <div className="form_input">
            <label htmlFor="password">Ingresar Contraseña</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Contraseña" required />
          </div>
          <div className="form_input">
            <label htmlFor="password2">Ingresar Contraseña Nuevamente</label>
            <input type="password" name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} id="password2" placeholder="Contraseña" required />
          </div>
          <span className="terms">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              <p>Al ingresar aceptas nuestros </p>
              <a href="#">Terminos y Condiciones.</a>
            </label>
          </span>
          <button type="submit" onClick={handleRegister} style={{ marginTop: 0 }}>Registrarse</button>
        </form>
        <img src={register} alt="register" style={imageStyle} />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
