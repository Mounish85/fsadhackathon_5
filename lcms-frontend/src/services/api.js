import axios from "axios";

const BASE_URL = "http://localhost:8080/api/content";

export const getAll = (page, size) =>
  axios.get(`${BASE_URL}?page=${page}&size=${size}`);

export const addContent = (data) =>
  axios.post(BASE_URL, data);

export const deleteContent = (id) =>
  axios.delete(`${BASE_URL}/${id}`);

export const updateContent = (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);

export const searchContent = (title, course) =>
  axios.get(`${BASE_URL}/search?title=${title}&course=${course}`);

export const getAnalytics = () =>
  axios.get(`${BASE_URL}/analytics`);