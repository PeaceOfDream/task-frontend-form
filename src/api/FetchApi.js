import axios from 'axios';

export const fetchApi = async (path) => {
  const res = await axios.get(path);
  return res.data;
};
