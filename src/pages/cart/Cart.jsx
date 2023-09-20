import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import 'cart.css';

export default function Cart({productos}) {
    return (
        <div className="Cart">
            <NavBar />
            <div className="login">
                <div className="products">
                    <ul>
                        <h1>Category 1</h1>
                        {productos.map(producto => (
                            <li key={producto.id}>
                                <img src={producto.image} alt={producto.name} />
                                <h3><b>{producto.name}</b> - {producto.price}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
