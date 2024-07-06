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
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export const addElectronic = async (newDevice) => {

/*  axios({
    method: 'post',
    url: '/user/12345',
    data: payload, // you are sending body instead
    headers: {
      // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
    },
  })*/
  try {
    return await axios({
      method: 'post',
      url: `${base_url}/electronics`,
      data: newDevice, // you are sending body instead
      headers: {
        // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })




       /* .post(`${base_url}/electronics`, {newDevice})
        .then((response) => {
          console.log("sparat data: ",response.data)
          console.log("New device data: ", response.status, response.data.token);
        });*/
  } catch (error) {
    console.log("Error: ", error);
    throw new Error(error)
  }
};
