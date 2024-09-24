import { useEffect, useState } from 'react';
import {
    addToLS,
    getStoredCart,
    removeFromLS,
} from '../../utilities/localstorage';
import Bottle from '../Bottle/Bottle';
import Cart from '../Cart/Cart';
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then((res) => res.json())
            .then((data) => setBottles(data));
    }, []);

    useEffect(() => {
        if (bottles.length) {
            const cartTotalBottle = [];
            const storedCart = getStoredCart();
            for (const id of storedCart) {
                const cartBottle = bottles.find((bottle) => bottle.id === id);
                if (cartBottle) {
                    cartTotalBottle.push(cartBottle);
                }
            }
            setCart(cartTotalBottle);
        }
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        const findingBottle = cart.find((b) => b.id === bottle.id);
        if (!findingBottle) {
            const newCart = [...cart, bottle];
            setCart(newCart);
            addToLS(bottle.id);
        } else {
            alert('Product Exist');
        }
    };

    const handleRemoveCart = (id) => {
        const remainingCart = cart.filter((bottle) => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    };

    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
            <div className="bottles-container">
                {bottles.map((bottle) => (
                    <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}
                    ></Bottle>
                ))}
            </div>
        </div>
    );
};

export default Bottles;
