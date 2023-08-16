function NavBar() {
    const displayNone = {
        display: 'none'
    }

    return(
        <header>
            <input type="checkbox" style={displayNone} name="hamburger" id="hamburger"/>
            <label htmlFor="hamburger" className="hamburger" id="ham">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <nav id="nav">
                <img src="imgs/logo.png" alt="logo" className="logo" onClick="location.href='index.html'"/>
                <ul className="nav_opts">
                    <li className="nav_opt nav_search">
                        <form action="#" method="get">
                            <input type="text" className="search_bar" name="search" id="search" placeholder="Buscar..." required maxlength="20"/>
                        </form>
                    </li>
                    <div className="nav_space">
                        <li className="nav_opt">
                            <img src="imgs/cart.svg" alt="cart" className="nav_icon"/>
                            <a href="#">Carrito</a>
                        </li>
                        <li className="nav_opt">
                            <img src="imgs/book-open.svg" alt="book" className="nav_icon"/>
                            <input type="checkbox" name="dropdown" id="dropdown"/>
                            <div className="catalogue">
                                <h2>(TBD)</h2>
                            </div>
                            <label htmlFor="dropdown">Descubrir</label>
                        </li>    
                    </div>
                    <div className="separator"></div>
                    <div className="nav_space">
                        <li className="nav_opt">
                            <a href="login.html">Ingresar</a>
                        </li>
                        <li className="nav_opt">
                            <a href="register.html"><strong>Registrate</strong></a>
                        </li>    
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;