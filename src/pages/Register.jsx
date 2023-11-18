import React, { useState } from 'react';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import register from "../imgs/register.svg";
import axios from 'axios';

const Register = () => {
  const [formData, setForm] = useState({
    usuario: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      alert("Las contrasenas deben ser coincidentes");
    } else {
      try {
        await axios.post('http://localhost:8080/register/success', {
          formData
        });
  
        alert("Usuario registrado exitosamente");
      } catch (error) {
        alert("Erro al registrar al usuario");
        console.log("Error al registrar el usuario: ", error);
      }  
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
        <form style={formStyle}>
          <h1>Registrate</h1>
          <div className="form_input">
            <label htmlFor="usuario">Ingresar Nombre de Usuario</label>
            <input type="text" name="usuario" onChange={handleChange} id="usuario" placeholder="Nombre de Usuario" required />
          </div>
          <div className="form_input">
            <label htmlFor="email">Ingresar Correo Electrónico</label>
            <input type="email" name="email" onChange={handleChange} id="email" placeholder="Correo Electronico" required />
          </div>
          <div className="form_input">
            <label htmlFor="password">Ingresar Contraseña</label>
            <input type="password" name="password" onChange={handleChange} id="password" placeholder="Contraseña" required />
          </div>
          <div className="form_input">
            <label htmlFor="password2">Ingresar Contraseña Nuevamente</label>
            <input type="password" name="password2" onChange={handleChange} id="password2" placeholder="Contraseña" required />
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
