import React, { useState } from 'react';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import loginImg from "../imgs/login.svg";
import axios from 'axios';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
          await axios.post('http://localhost:8080/login/try', {
            usuario,
            password
          });
    
          alert("Login exitoso");
        } catch (error) {
          alert("Login fallido");
          console.log("Error al ingresar: ", error);
        }
    };

    return (
        <div className="Login">
            <NavBar />
            <div className="login">
                <form>
                    <h1>Ingresar</h1>
                    <div className="form_input">
                        <label htmlFor="usuario">Ingresar Nombre de Usuario</label>
                        <input type="text" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} id="usuario" placeholder="Nombre de Usuario" required />
                    </div>
                    <div className="form_input">
                        <label htmlFor="password">Ingresar Contraseña</label>
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Contraseña" required />
                    </div>
                    <button type="submit" onClick={handleRegister}>Ingresar</button>
                </form>
                <img src={loginImg} alt="login" />
            </div>
            <Footer />
        </div>
    );
};
  
export default Login;
