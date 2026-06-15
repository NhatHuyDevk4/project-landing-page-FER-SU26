import { BASE_URL } from "./apiClinet";

export const fetchProduct = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data;
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  const data = await res.json();
  return data;
};
