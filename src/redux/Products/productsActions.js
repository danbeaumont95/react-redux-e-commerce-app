import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
} from "./productsTypes";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://e-commerce-backend-api.herokuapp.com/api/products")
      .then((response) => {
        const products = response.data.products;
        //may need to change .data.products
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products, cart) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      item_name: item,
    },
  };
};

export const removeFromCart = (itemName) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      item_name: itemName,
    },
  };
};

export const adjustItemQty = (itemName, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      item_name: itemName,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
