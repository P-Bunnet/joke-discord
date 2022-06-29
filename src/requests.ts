import { axiosClient, axiosFact } from "./axiosHandler";

// commands

// create promise axios function
export function getJoke(type: any) {
  return axiosClient.get(`/${type}?blacklistFlags=religious,racist,nsfw`);
}

export function getFact() {
  return axiosFact.get("");
}
