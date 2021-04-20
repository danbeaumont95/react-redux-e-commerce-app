import React, { Component } from 'react';
import * as api from '../../api'

export default class AddNewProduct extends Component {
    state={
        item_name: "",
        price: "",
        img_url: "",
        description: "",
        seller_name: "",
        item_type: "",
        loggedIn: false
    }

    handleInput = ({ target: { id, value } }) => {
        this.setState({ [id]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { item_name, price, img_url, description, seller_name, item_type } = this.state;
        // const { seller_name } = this.props.username;
        const productdata = {item_name, price, img_url, description, seller_name, item_type}
        api.postNewProduct(productdata)
        .then(({product}) => {
            this.props.addNewProduct(product)
        })
    }

    render() {
        let { loggedIn } = this.state;
        if (this.props.username) loggedIn = true;
        return (
            <div>
    <h2>Sell a product</h2>
    {console.log(this.props.username, 'usernameZZZ')}
            {loggedIn ? 
            
        <form>
        <input type="text"
        placeholder="Item name"
        id="item_name"
        value={this.state.item_name}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="Price"
        id="price"
        value={this.state.price}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="Image Url"
        id="img_url"
        value={this.state.img_url}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="Description"
        id="description"
        value={this.state.description}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="Seller Name"
        id="seller_name"
        value={this.state.username}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="Item Type"
        id="item_type"
        value={this.state.item_type}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <button onClick={this.handleSubmit}>Add new product!</button>
        </form>
        
            : <p style={{ color: "red" }}>Please log in or create an account in order to sell a product</p>} 
            </div>
        )
    }
}