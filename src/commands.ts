import axios from "axios";

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

// commands

// create promise axios function
export function getJoke(type: any) {
  return axiosClient.get(`/${type}?blacklistFlags=religious,racist,nsfw`);
}

export function getFact() {
  return axiosFact.get("");
}
