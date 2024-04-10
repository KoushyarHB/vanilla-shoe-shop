import axios from "axios";
import { BASE_URL } from "@/localization/constants/apiConfig";

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};

export const getProductsByBrandName = async (name) => {
  const baseQuery = `${BASE_URL}/products`;
  const queryString = name === "ALL" ? baseQuery : baseQuery + `?brand=${name}`;
  try {
    const response = await axios.get(queryString);
    return response.data;
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};
