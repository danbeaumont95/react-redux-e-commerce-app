import "./App.css";
import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import store from "./redux/store";
import ProductsContainer from "./Components/Products/ProductsContainer";
import NavBar from "./Components/NavBar/NavBar";
import { Router } from "@reach/router";
import Cart from "./Components/Cart/Cart";
import SingleItem from "./Components/SingleItem/SingleItem";
import LoginForm from "./Components/Login/LoginForm";
import Header from "./Components/Header/Header";
import AddNewProduct from "./Components/Products/AddNewProduct";
import ProductsBySellerName from "./Components/Products/ProductsBySellerName";
import SellerInfo from "./Components/Seller/SellerInfo";
import ItemTypeButtons from "./Components/Products/ItemTypeButtons";

class App extends Component {
  state = { username: "", ownerOrUser: "" };
  render() {
    return (
      <>
        <NavBar />
        <Header setUser={this.setUser} username={this.state.username} />
        {/* <Provider store={store}> */}
        <div className="App">
          <Router>
            <ProductsContainer path="/" username={this.state.username} />

            <Cart path="/cart" />
            <SingleItem path="/products/:item_name" />
            {/* <AddNewProduct path="/sell" username={this.state.username} /> */}
            <ProductsBySellerName path="/sellers/:seller_name/products" />
            <SellerInfo path="/sellers/:seller_name" />
            <ItemTypeButtons path="/all" />
          </Router>
        </div>
        {/* </Provider> */}
      </>
    );
  }
  setUser = (username, ownerOrUserString) => {
    this.setState({ username, ownerOrUser: ownerOrUserString });
  };
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);

// export default App;
