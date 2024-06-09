import axios from "axios";

const base_url = "http://localhost:5000/api";

export const getCategories = async () => {
  try {
    const response = await fetch(`${base_url}/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getElectronics = async () => {
  try {
    const response = await fetch(`${base_url}/electronics`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const addElectronic = async (newDevice) => {
  try {
    const response = await axios
      .post(`${base_url}/electronics`, { newDevice })
      .then((response) => {
        console.log("New device data: ", response.status, response.data.token);
      });
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
};
