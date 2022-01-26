import axios from "axios";

const url = "http://localhost:5000/api/v1";

export const fetchProducts = () => axios.get(`${url}/products`);
export const fetchProductDetails = (id) => axios.get(`${url}/product/${id}`);
