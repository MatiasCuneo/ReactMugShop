function NavBar() {
    return(
        <header>
            <input type="checkbox" style="display:none;" name="hamburger" id="hamburger"/>
            <label for="hamburger" class="hamburger" id="ham">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </label>
            <nav id="nav">
                <img src="../public/imgs/logo.png" alt="logo" class="logo" onclick="location.href='index.html'"/>
                <ul class="nav_opts">
                    <li class="nav_opt nav_search">
                        <form action="#" method="get">
                            <input type="text" class="search_bar" name="search" id="search" placeholder="Buscar..." required maxlength="20"/>
                        </form>
                    </li>
                    <div class="nav_space">
                        <li class="nav_opt">
                            <img src="../public/imgs/cart.svg" alt="cart" class="nav_icon"/>
                            <a href="#">Carrito</a>
                        </li>
                        <li class="nav_opt">
                            <img src="../public/imgs/book-open.svg" alt="book" class="nav_icon"/>
                            <input type="checkbox" name="dropdown" id="dropdown"/>
                            <div class="catalogue">
                                <h2>(TBD)</h2>
                            </div>
                            <label for="dropdown">Descubrir</label>
                        </li>    
                    </div>
                    <div class="separator"></div>
                    <div class="nav_space">
                        <li class="nav_opt">
                            <a href="login.html">Ingresar</a>
                        </li>
                        <li class="nav_opt">
                            <a href="register.html"><strong>Registrate</strong></a>
                        </li>    
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;