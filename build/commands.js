import axios from "axios";
const axiosClient = axios.create({
    baseURL: `https://v2.jokeapi.dev/joke`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
axiosClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let res = error.response;
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
});
// commands
const getJoke = async () => {
    const response = await axiosClient.get("/Any?blacklistFlags=religious,racist,nsfw");
    //   console.log(response.data);
    return response.data;
};
const getJokeCode = async () => {
    const response = await axiosClient.get("/Programming?blacklistFlags=religious,racist,nsfw");
    //   console.log(response.data);
    return response.data;
};
const getJokeDark = async () => {
    const response = await axiosClient.get("/Dark?blacklistFlags=religious,racist,nsfw");
    //   console.log(response.data);
    return response.data;
};
export default { getJoke, getJokeCode, getJokeDark };
