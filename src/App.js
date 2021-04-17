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
            <ProductsContainer path="/" />

            <Cart path="/cart" />
            <SingleItem path="/products/:item_name" />
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
