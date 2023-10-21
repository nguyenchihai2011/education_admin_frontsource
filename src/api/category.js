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

export { getListCategory, getCategory, createCategory };
