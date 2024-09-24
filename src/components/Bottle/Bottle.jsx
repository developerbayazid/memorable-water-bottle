import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price, seller } = bottle;

    return (
        <div className="bottle">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h5>Price: ${price}</h5>
            <h6>{seller}</h6>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
