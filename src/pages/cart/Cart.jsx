import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import './cart.css';
import axios from 'axios';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setData(response.data);
            } catch (error) {
                console.error('Error interno del servidor:', error);
            }
        };

        fetchData();
    }, []);

    const addToCart = (product) => {
        if (cartItems[product.id]) {
            const updatedCart = { ...cartItems };
            updatedCart[product.id].quantity += 1;
            setCartItems(updatedCart);
        } else {
            setCartItems({
            ...cartItems,
            [product.id]: { ...product, quantity: 1 },
            });
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = { ...cartItems };

        if (updatedCart[productId]) {
            if (updatedCart[productId].quantity > 1) {
                updatedCart[productId].quantity -= 1;
            } else {
                delete updatedCart[productId];
            }

            setCartItems(updatedCart);
        }
    };

    const filteredCart = Object.values(cartItems).map(({ id, quantity }) => ({ id, quantity }));

    const jsonifiedCart = JSON.stringify(filteredCart);

    const handleCart = async () => {
        if (jsonifiedCart !== "[]") {
            try {
                await axios.post('http://localhost:8080/cart', {jsonifiedCart});
    
                alert('Articulos comprados con exito');
            } catch (err) {
                alert('Error al realizar la compra');
                console.log("Error al registrar carrito: ", err)
            }    
        } else {
            alert('Seleccionar articulos antes de realizar la compra');
        }
    };

    return (
        <div className="Cart">
            <NavBar />
            <div className="discover">
                <div className="products">
                    <ul>
                        <h1>Categoria 1</h1>
                        <div className="items">
                            {data.map(producto => (
                                <li className="item_style" key={producto.id}>
                                    <img src={producto.image} alt={producto.nombre} />
                                    <h3><b>{producto.nombre}</b> - {producto.precio}</h3>
                                    <p>{producto.desc}</p>
                                    <button className="mainBtn" onClick={() => addToCart(producto)}>Añadir</button>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="cart">
                    <h1>Carrito</h1>
                    <hr />
                    <div className="pushed">
                        {Object.values(cartItems).map((item) => (
                            <div className="item_style" key={item.id}>
                                <img src={item.image} alt={item.nombre} />
                                <h3>
                                {item.nombre} - {Number((item.precio * item.quantity)).toFixed(1)}
                                </h3>
                                <p>Cantidad: {item.quantity}</p>
                                <button className="mainBtn" onClick={() => removeFromCart(item.id)}>
                                Quitar
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="mainBtn" onClick={handleCart}>Comprar</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
