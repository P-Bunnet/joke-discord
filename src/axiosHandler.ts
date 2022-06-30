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

const axiosStoic = async () => {
  try {
    const { data, status } = await axios.get(
      'https://api.themotivate365.com/stoic-quote'
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
  
}

export { axiosClient, axiosFact, axiosAnime, axiosStoic };
