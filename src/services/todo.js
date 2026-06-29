import { BASE_URL } from "./apiClinet";
import { apiClient } from "./apiClinet";


export const fetchTodos = async () => {
  const res = await apiClient.get(`${BASE_URL}/todos`);
  return res.data;
};

export const createTodos = async (todosData) => {
  const res = await apiClient.post(`${BASE_URL}/todos`, todosData);
  return res.data;
}

export const updateTodos = async (id, todosData) => {
  const res = await apiClient.put(`${BASE_URL}/todos/${id}`, todosData);
  return res.data;
};

export const deleteTodos = async (id) => {
  const res = await apiClient.delete(`${BASE_URL}/todos/${id}`);
  return res.data;
}

export const fetchTodosById = async (id) => {
  const res = await apiClient.get(`${BASE_URL}/todos/${id}`);
  return res.data;
};
