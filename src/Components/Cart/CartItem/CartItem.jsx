import React, { useState } from 'react';
import './CartItem.css'
import { connect } from 'react-redux'
import {
    adjustItemQty,
    removeFromCart
} from '../../../redux/Products/productsActions'

const CartItem = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {

        setInput(e.target.value);
        adjustQty(item.item_name, e.target.value)
    };

    return (
        
        <div className="cartItem">

            <img className="cartItem__image" src={item.img_url} alt={item.title}/>
            <div className="cartItem__details">
                <p className="details__title">{item.title}</p>
                <p className="details__desc">{item.description}</p>
                <p className="details__price">$ {item.price}</p>
            </div>
            <div className="cartItem__actions">
                <div className="cartItem__qty">
                    <label htmlFor="qty">Qty</label>
                    <input
                    min="1" 
                    type="number"
                    id="qty"
                    name="qty"
                    value={input}
                    onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(item.item_name)}
                    className="actions__deleteItemBtn"
                >
                    <img src="https://image.flaticon.com/icons/svg/709/709519.svg" alt=""
                    />
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (item_name, value) => dispatch(adjustItemQty(item_name, value)),
        removeFromCart: (item_name) => dispatch(removeFromCart(item_name))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)