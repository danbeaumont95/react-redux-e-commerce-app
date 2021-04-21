import axios from "axios";
const request = axios.create({
  baseURL: "https://e-commerce-backend-api.herokuapp.com/api",
});

export const checkPassword = (userData) => {
  return request.post("/login", userData).then((res) => {
    console.log(res.data);
  });
};

export const getUser = (username) => {
  return request.get(`/users/${username}`);
};

export const postUser = (newUser) => {
  return request.post(`/users`, newUser);
};

export const postNewProduct = (productdata) => {
  return request.post("/products", productdata).then((res) => {
    return res.data.product;
  });
};

export const deleteProductByItemName = (item_name) => {
  return request.delete(`/products/${item_name}`);
};

export const getProductsBySellerName = (seller_name) => {
  console.log(seller_name, "seller name api");
  return request.get(`/sellers/${seller_name}/products`).then((res) => {
    return res.data.products;
  });
};

export const getSellerInfo = (seller_name) => {
  console.log(seller_name, "seller");
  return request.get(`/sellers/${seller_name}`).then((res) => {
    return res.data.seller;
  });
};

export const getProductsByItemType = (item_type) => {
  console.log(item_type);
  return request.get(`/products/type/${item_type}`).then((res) => {
    console.log(res, "res GPBIT");
    return res.data.products;
  });
};

export const getAllProducts = () => {
  return request.get("/products").then((res) => {
    console.log(res.data.products, "resAllProds");
    return res.data.products;
  });
};

export const getAllProductTypes = () => {
  return request.get("/products/types/all").then((res) => {
    console.log(res, "allproducttypesAPI");
    return res.data;
  });
};
