import { BASE_URL } from "./apiClinet";
import { apiClient } from "./apiClinet";


export const fetchPosts = async () => {
  const res = await apiClient.get(`${BASE_URL}/posts`);
  return res.data;
};

export const createPosts = async (postsData) => {
  const res = await apiClient.post(`${BASE_URL}/posts`, postsData);
  return res.data;
}

export const updatePosts = async (id, postsData) => {
  const res = await apiClient.put(`${BASE_URL}/posts/${id}`, postsData);
  return res.data;
};

export const deletePosts = async (id) => {
  const res = await apiClient.delete(`${BASE_URL}/posts/${id}`);
  return res.data;
}

export const fetchPostsById = async (id) => {
  const res = await apiClient.get(`${BASE_URL}/posts/${id}`);
  return res.data;
  return data;
};
