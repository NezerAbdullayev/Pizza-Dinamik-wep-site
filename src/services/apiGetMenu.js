import axios from 'axios';

const API_URL = "http://localhost:3005/data";

export const getMenu = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data.menu;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};