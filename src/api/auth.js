import { apiClient } from "./apiClient";

const signIn = function(payload) {
  return apiClient.post("authentication/login", payload);
};

export { signIn };
