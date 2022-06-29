import axios from "axios";
// joke call handler
const axiosClient = axios.create({
  baseURL: `https://v2.jokeapi.dev/joke`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let res = error.response;
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

// fact call handler
const axiosFact = axios.create({
  baseURL: `https://uselessfacts.jsph.pl/random.json?language=en`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosFact.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let res = error.response;
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);
export { axiosClient, axiosFact };
