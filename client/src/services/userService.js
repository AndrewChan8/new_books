// services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/users';

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};
