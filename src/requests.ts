import { axiosAnime, axiosClient, axiosFact, axiosStoic } from "./axiosHandler";

// commands

// create promise axios function
export function getJoke(type: any) {
  return axiosClient.get(`/${type}?blacklistFlags=religious,racist,nsfw`);
}

export function getFact() {
  return axiosFact.get("");
}

export function getAnime(url: string) {
  return axiosAnime.get(`?url=${url}`);
}

export function getStoic() {
  return axiosStoic();
}
