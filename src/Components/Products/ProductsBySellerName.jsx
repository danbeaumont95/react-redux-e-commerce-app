import React, { Component } from 'react';
import * as api from '../../api'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class ProductsBySellerName extends Component {
    state = {
        products: [],
        isLoading: true
    }

    componentDidMount() {
        const { seller_name } = this.props;
        this.fetchProductsBySellerName(seller_name)
    }

    render() {
        const { products, isLoading } = this.state;
        if (isLoading) return <ClipLoader css={override} size={150} />
        return (
            <div>
                {products.map((product) => {
                    return (
                        <li>
                            <p>{product.item_name}</p>
                            <p className="product-price">Price: £{product.price}</p>
                            <p>{product.description}</p>
                            <p>{product.item_type}</p>
                        <img className="product-image" src={product.img_url} alt="product"/>
                       
                        </li>
                    )
                })}
            </div>
        )
    }
    fetchProductsBySellerName = (seller_name) => {
        api.getProductsBySellerName(seller_name).then((products) => {
            this.setState({ products, isLoading: false })
        })
    }
}
