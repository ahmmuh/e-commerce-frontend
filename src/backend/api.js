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
