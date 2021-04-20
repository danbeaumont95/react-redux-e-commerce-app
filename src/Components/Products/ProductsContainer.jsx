import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../redux'
import './ProductsContainer.css'
import { addToCart, loadCurrentItem } from '../../redux/Products/productsActions'
import { Link, Router } from '@reach/router'
import AddNewProduct from './AddNewProduct';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function ProductsContainer  ({ productsData, fetchProducts, addToCart, loadCurrentItem, username }) {
    useEffect(() => {
        fetchProducts()
    }, [])

    const addNewProduct = (newProduct) => {
        // this.setState(
            return ({productsData}) => {
                return { productsData: [newProduct, ...productsData] }
            // })
        
    }
}
    console.log(username, 'usernameprops')
    return productsData.loading ? (
        <ClipLoader css={override} size={150} />
    ) : productsData.error ? (
        <h2>{productsData.error}</h2>
    ) : (
        <>
        <div>
        
        {/* <Link to="/sell"> */}
            {/* <h2>Sell a product</h2> */}
            
            {/* {console.log(this.props.username, 'props in container')} */}
            <AddNewProduct path="/sell" username={username} addNewProduct={addNewProduct}/>
        {/* </Link> */}
        </div>
        <div>
            <h2 className="product-list-title">Products List</h2>
            <div>
                {productsData &&
                productsData.products &&
                productsData.products.map((product) =>{ 

                    return (
                        <section className="product-galleries">
                        <div className="product-info">
                            {/* <Link to={`/products/${product.item_name}`}> */}
                                <h4 className="product-item-name">{product.item_name}</h4>
                            {/* </Link> */}
                        <p className="product-price">Price: £{product.price}</p>
                        <img className="product-image" src={product.img_url} alt="product"/>
                        <p className="product-seller">Seller: {product.seller_name}</p>
                        <div className="product__buttons">
                            <Link to={`/products/${product.item_name}`}>
                            <button
                        onClick={() => loadCurrentItem(product)}
                        className="buttons__btn buttons__view"
                        >
                         View Item   
                            </button>
                        </Link>
                        <button
                        //CHANGED BELOW TO PRODUCT.ITEM_NAME
                        onClick={() => addToCart(product.item_name)}
                        className="buttons__btn buttons__add"
                        >
                            Add To Cart
                        </button>
                        </div>
                        
                        
                        </div>
                        </section>
                    )
                
                })}
            </div>
        </div>
        </>
    )
}



const mapStateToProps = state => {
    return {
        productsData: state.shop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addToCart: (item_name) => dispatch(addToCart(item_name)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ProductsContainer)
