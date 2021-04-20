import React, { Component } from 'react';
import * as api from '../../api'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from '@reach/router'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class SellerInfo extends Component {
    state={
        info: [],
        isLoading: true
    };
    componentDidMount() {
        const { seller_name } = this.props;
        this.fetchSellerInfo(seller_name)
    }
    render() {
        const { info, isLoading } = this.state;
        if (isLoading) return <ClipLoader css={override} size={150} />
        return (
            <div>
                {info.map((seller) => {
                    return (
                        <>
                        <li>
                            <p>{seller.seller_name}</p>
                            <img src={seller.avatar_url} alt="seller"/>
                            <p>{seller.location}</p>
                            <p>{seller.reviews}</p>
                            <p>{seller.year_joined}</p>
                        </li>
                        <Link to={`/sellers/${seller.seller_name}/products`}>
                        <button>Click to see all products by this seller</button>
                        </Link>
                        </>
                    )
                })}
                
                
            </div>
        )
    }
    fetchSellerInfo = (seller_name) => {
        api.getSellerInfo(seller_name).then((info) => {
            this.setState({ info, isLoading: false })
        })
    }
}