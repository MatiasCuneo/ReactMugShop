import React, { useState } from 'react';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import loginImg from "../imgs/login.svg";

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
};


function Login() {
    return (
        <div className="Login">
            <NavBar />
            <div className="login">
                <form action="#" method="get">
                    <h1>Ingresar</h1>
                    <div className="form_input">
                        <label htmlFor="usuario">Ingresar Nombre de Usuario</label>
                        <input type="text" name="usuario" id="usuario" placeholder="Nombre de Usuario" required />
                    </div>
                    <div className="form_input">
                        <label htmlFor="password">Ingresar Contraseña</label>
                        <input type="text" name="password" id="password" placeholder="Contraseña" required />
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
                <img src={loginImg} alt="login" />
            </div>
            <Footer />
        </div>
    );
}
  
export default Login;
