import React, { Component } from 'react';
import * as api from '../../api'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class ProductsByItemType extends Component {
    state={
        products: [],
        isLoading: true
    };
    componentDidMount() {
        const { item_type } = this.props;
        this.fetchProductsByItemType(item_type)
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
                        <img className="product-image" src={product.img_url} alt="product"/>
                        </li>
                    )
                })}
            </div>
        )
    }
    fetchProductsByItemType = (item_type) => {
        api.getProductsByItemType(item_type).then((products) => {
            this.setState({ products, isLoading: false })
        })
    }
}