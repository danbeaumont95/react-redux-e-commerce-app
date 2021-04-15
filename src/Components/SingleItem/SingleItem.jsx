import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../redux/Products/productsActions'
import './SingleItem.css'

const SingleItem = ({ current, addToCart }) => {

    return (
        <div className="singleItem">
            <img className="singleItem__image" src={current.img_url} alt={current.title}/>
            
            <div className="singleItem__details">
            <p className="details__title">{current.item_name}</p>
            <p className="details__description">{current.description}</p>
            <p className="details__price">$ {current.price}</p>
            <button
            onClick={() => addToCart(current.item_name)}
            className="details__addBtn"
            >
                Add To Cart
            </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
      current: state.shop.currentItem,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (item_name) => dispatch(addToCart(item_name)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)