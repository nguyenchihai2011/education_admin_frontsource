import { apiClient } from "./apiClient";

const getListCategory = (params, signal) => {
  return apiClient.get("category", {
    params,
    signal
  });
};

const getCategory = id => {
  return apiClient.get(`category/${id}`);
};

const createCategory = payload => {
  return apiClient.post("category", payload);
};

const updateCategory = (id, payload) => {
  return apiClient.put(`category/${id}`, payload);
};

const deleteCategory = payload => {
  return apiClient.delete(`category/bulkdelete`, { data: payload });
};

export {
  getListCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
