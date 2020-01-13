const axios = require('axios');


const search = "spotlist";


async function getUser() {
  try {
    const response = await axios.get(`http://localhost:4000/${search}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

