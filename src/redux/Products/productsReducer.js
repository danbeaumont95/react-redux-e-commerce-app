import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
} from "./productsTypes";

const initialState = {
  loading: false,
  products: [],
  error: "",
  cart: [],
  currentItem: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
        cart: state.cart,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    case ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod.item_name === action.payload.item_name
      );

      const inCart = state.cart.find((item) =>
        item.item_name === action.payload.item_name ? true : false
      );

      return {
        ...state,
        loading: false,
        cart: inCart
          ? state.cart.map((item) =>
              item.item_name === action.payload.item_name
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.item_name !== action.payload.item_name
        ),
      };
    case ADJUST_QTY:
      console.log(typeof action.payload.qty, "typeQty");
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.item_name === action.payload.item_name
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
