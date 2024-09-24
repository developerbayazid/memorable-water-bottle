import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-container">
                {cart.map((bottle) => (
                    <div key={bottle.id}>
                        <img src={bottle.img} alt="" />
                        <br />
                        <button onClick={() => handleRemoveCart(bottle.id)}>
                            Remove Item
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired,
};
export default Cart;
