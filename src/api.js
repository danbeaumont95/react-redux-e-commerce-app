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
  console.log(productdata, "PD");
  return request.post("/products", productdata).then((res) => {
    console.log(res, "res");
    console.log(res.data);
    return res.data.product;
  });
};
