import React, { Component } from 'react';
import * as api from '../../api'

export default class DeleteProduct extends Component {
    state={};
    render() {
        const { item_name, username, seller_name } = this.props;
       
        return username === seller_name ? (
            <div>
                <button onClick={this.handleClick}>Delete item</button>
            </div>
        ) : null
    }
    handleClick = () => {
        const { item_name } = this.props
        api.deleteProductByItemName(item_name)
    }
}