import { apiClient } from "./apiClient";

const getListCourse = (params, signal) => {
  return apiClient.get("course/getall", {
    params,
    signal
  });
};

const getCourse = id => {
  return apiClient.get(`course/${id}`);
};

const createCourse = payload => {
  return apiClient.post("course", payload);
};

const updateCourse = (id, payload) => {
  return apiClient.put(`course/${id}`, payload);
};

const deleteCourse = payload => {
  return apiClient.delete(`course/bulkdelete`, { data: payload });
};

export { getListCourse, getCourse, createCourse, updateCourse, deleteCourse };
