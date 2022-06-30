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

// anime
const axiosAnime = axios.create({
  baseURL: `https://api.trace.moe/search`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosAnime.interceptors.response.use(
  function (response) {
    // console.log(response.request);
    return response.data;
  },
  function (error) {
    let res = error.response;
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

const leauge = (name: string) =>
  axios.request({
    method: "GET",
    url: `https://mobafire-lol-builds.p.rapidapi.com/api/champions/${name}/runes`,
    headers: {
      "X-RapidAPI-Key": "d397acbdb6mshaf84fbd85273f57p17a4dejsn2ce7db4e1a2a",
      "X-RapidAPI-Host": "mobafire-lol-builds.p.rapidapi.com",
    },
  });

export { axiosClient, axiosFact, axiosAnime, leauge };
