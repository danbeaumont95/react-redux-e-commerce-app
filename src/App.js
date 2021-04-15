import "./App.css";
import React from "react";
import { connect, Provider } from "react-redux";
import store from "./redux/store";
import ProductsContainer from "./Components/Products/ProductsContainer";
import NavBar from "./Components/NavBar/NavBar";
import { Router } from "@reach/router";
import Cart from "./Components/Cart/Cart";
import SingleItem from "./Components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <>
      <NavBar />
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

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);

// export default App;
