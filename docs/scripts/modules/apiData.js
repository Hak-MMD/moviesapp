import { token } from "../../config/variables.js";

export const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const baseImage = "https://image.tmdb.org/t/p/w500";
export const popular =
  "https://api.themoviedb.org/3/movie/popular?language=en-US";
export const top_rated =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US";
export const upcoming =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US";
export const now_playing =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US";
export const genre =
  "https://api.themoviedb.org/3/discover/movie?language=en-US";
export const search = "https://api.themoviedb.org/3/search/movie?";
export const single = "https://api.themoviedb.org/3/movie/";

export const urlMap = {
  popular,
  top_rated,
  upcoming,
  now_playing,
  genre,
};
