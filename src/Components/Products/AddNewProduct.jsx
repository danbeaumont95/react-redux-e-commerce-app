import React, { Component } from 'react';

export default class AddNewProduct extends Component {
    state={
        item_name: "",
        price: null,
        img_url: "",
        description: "",
        seller_name: "",
        item_type: "",
        loggedIn: false
    }

    handleInput = ({ target: { id, value } }) => {
        this.setState({ [id]: value })
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
        placeholder="item_name"
        id="item_name"
        value={this.state.item_name}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="number"
        placeholder="price"
        id="price"
        value={this.state.price}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="img_url"
        id="img_url"
        value={this.state.img_url}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="description"
        id="description"
        value={this.state.description}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="seller_name"
        id="seller_name"
        value={this.props.username}
        onChange={this.handleInput}
        className="add_new_item_input"
        />
        <input type="text"
        placeholder="item_type"
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