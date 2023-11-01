import { apiClient } from "./apiClient";

const statisticalTotal = () => {
  return apiClient.get("/statistical");
};

const revenueMonthly = () => {
  return apiClient.get("/statistical/revenue");
};

export { statisticalTotal, revenueMonthly };
