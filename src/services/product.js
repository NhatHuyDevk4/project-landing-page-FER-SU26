import { BASE_URL } from "./apiClinet";
import { apiClient } from "./apiClinet";


export const fetchProduct = async () => {
  const res = await apiClient.get(`${BASE_URL}/products`);
  return res.data;
};

export const createProduct = async (productData) => {
  const res = await apiClient.post(`${BASE_URL}/products/add`, productData);
  console.log("createProduct", res.data);
  return res.data;
}

export const updateProduct = async (id, productData) => {
  const res = await apiClient.put(`${BASE_URL}/products/${id}`, productData);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await apiClient.delete(`${BASE_URL}/products/${id}`);
  return res.data;
}

export const getProductById = async (id) => {
  const res = await apiClient.get(`${BASE_URL}/products/${id}`);
  return res.data;
};
