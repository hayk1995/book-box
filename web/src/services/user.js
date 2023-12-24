import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
export function getUserById(userId) {
  return axios.get(`${API_BASE_URL}/${userId}`);
}