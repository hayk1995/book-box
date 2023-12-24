import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export function getUserServices(userId) {
  return axios.get(`${API_BASE_URL}/users/${userId}`).then((res)=>{
    return res.data.services;
  });
}
export function createUserService(userId, data) {
  return axios.post(`${API_BASE_URL}/users/${userId}/services`, data);
}