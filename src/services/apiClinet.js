
export const BASE_URL = "https://dummyjson.com"



export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  const data = await res.json();
  return data
};


