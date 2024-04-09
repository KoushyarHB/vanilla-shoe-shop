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
