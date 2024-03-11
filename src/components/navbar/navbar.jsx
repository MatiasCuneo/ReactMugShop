import toggleClass from '../../js/hamburguer.js';
import logo from '../../imgs/logo.png';
import bookopen from '../../imgs/book-open.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [data, setData] = useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const displayNone = {
        display: 'none'
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setData(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
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
                            >
                            <TextField 
                                id="filled-basic" 
                                label="Search..." 
                                variant="filled"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onChange={handleClick}
                            />
                        </Box>
                            
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {data.map(producto => (
                                <MenuItem onClick={handleClose}>{producto.nombre}</MenuItem>
                            ))}
                        </Menu>
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