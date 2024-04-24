import toggleClass from '../../js/hamburguer.js';
import logo from '../../imgs/logo.png';
import bookopen from '../../imgs/book-open.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { setup } from '../../ai/neural_network.js';

function NavBar() {
    const displayNone = {
        display: 'none'
    }

    const flex = {
        display: 'flex',
        gap: '2.5em'
    }

    useEffect(() => {
        setup();
    }, []);

    return(
        <header>
            <input type="checkbox" style={displayNone} name="hamburger" id="hamburger"/>
            <label htmlFor="hamburger" className="hamburger" id="ham" onClick={toggleClass}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <nav className="" id="nav">
                <img src={logo} alt="logo" className="logo" />
                <ul className="nav_opts">
                    <li className="search">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            className={flex}
                            >
                            <TextField 
                                id="filled-basic" 
                                label="Search..." 
                                variant="filled"
                            />
                        </Box>
                        <span id="pred_labels"></span>
                    </li>
                    <div className="navopts_ul">
                        <div className="nav_space">
                            <li className="nav_opt">
                                <img src={bookopen} alt="book" className="nav_icon"/>
                                <label htmlFor="dropdown"><a href="cart">Descubrir</a></label>
                            </li>    
                        </div>
                        <div className="separator"></div>
                        <div className="nav_space">
                            <li className="nav_opt">
                                <a href="login">Ingresar</a>
                            </li>
                            <li className="nav_opt">
                                <a href="register"><strong>Registrate</strong></a>
                            </li>    
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;