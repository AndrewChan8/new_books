import axios from 'axios';

const API_URL = 'http://localhost:4000/api/bookList';

export const favoriteBook = async (bookDetails) => {
  try {
    const response = await axios.post(`${API_URL}/favorite`, bookDetails);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error favoriting book');
  }
};

export const unfavoriteBook = async (bookDetails) => {
  try {
    const response = await axios.post(`${API_URL}/unfavorite`, bookDetails);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error unfavoriting book');
  }
};

export const getFavoriteBooks = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}/favorites`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error fetching favorite books');
  }
};
