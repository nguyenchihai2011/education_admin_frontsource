import { apiClient } from "./apiClient";

const signIn = function(payload) {
  return apiClient.post("authentication/login", payload);
};

const deleteUser = payload => {
  return apiClient.delete(`user/bulkdelete`, { data: payload });
};

export { signIn, deleteUser };
