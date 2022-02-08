import axios from "axios";

const URL = "http://localhost:5000";

export const saveUser = async (user) => {
  try {
    return await axios.post(`${URL}/register`, user);
  } catch (err) {
    console.log("Error while calling saveUser API", err);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    axios.defaults.withCredentials = true;
    return await axios.post(`${URL}/login`, { email, password });
  } catch (err) {
    console.log("Error while calling loginUser API", err);
  }
};
