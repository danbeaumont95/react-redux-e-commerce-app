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
