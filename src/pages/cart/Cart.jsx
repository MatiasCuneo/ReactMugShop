import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import './cart.css';

export default function Cart({productos}) {
    return (
        <div className="Cart">
            <NavBar />
            <div className="discover">
                <div className="products">
                    <ul>
                        <h1>Categoria 1</h1>
                        <div className="items">
                            {productos.map(producto => (
                                <li key={producto.id}>
                                    <img src={producto.image} alt={producto.name} />
                                    <h3><b>{producto.name}</b> - {producto.price}</h3>
                                    <p>{producto.description}</p>
                                    <button className="mainBtn">Añadir</button>
                                </li>
                            ))}
                        </div>
                    </ul>
                    <ul>
                        <h1>Categoria 2</h1>
                        <div className="items">
                            {productos.map(producto => (
                                <li key={producto.id}>
                                    <img src={producto.image} alt={producto.name} />
                                    <h3><b>{producto.name}</b> - {producto.price}</h3>
                                    <p>{producto.description}</p>
                                    <button className="mainBtn">Añadir</button>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="cart">
                    <h1>Carrito</h1>
                    <hr />
                    <div className="pushed">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
