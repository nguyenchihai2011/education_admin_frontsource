import { apiClient } from "./apiClient";

const getListLecture = (params, signal) => {
  return apiClient.get("lecture", {
    params,
    signal
  });
};

const getLecture = id => {
  return apiClient.get(`lecture/${id}`);
};

const createLecture = payload => {
  return apiClient.post("lecture", payload);
};

const updateLecture = (id, payload) => {
  return apiClient.put(`lecture/${id}`, payload);
};

const deleteLecture = payload => {
  return apiClient.delete(`lecture/bulkdelete`, { data: payload });
};

export {
  getListLecture,
  getLecture,
  createLecture,
  updateLecture,
  deleteLecture
};
