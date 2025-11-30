import { showPopup } from "./popup.js";
import { displayMovie } from "./dom.js";

export async function getMovies(url, options, page, genre = "") {
  try {
    const response = await fetch(
      `${url}&page=${page}&with_genres=${genre}`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    showPopup(error.message, "fail");
    return [];
  }
}

export async function searchMovies(url, options, page, query) {
  try {
    const response = await fetch(`${url}&page=${page}&query=${query}`, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    showPopup(error.message, "fail");
    return [];
  }
}

export async function getMovie(url, options, id) {
  try {
    // console.log(id);
    // console.log(123);
    const response = await fetch(`${url}${id}`, options);
    const data = await response.json();
    displayMovie(data);
    return data;
  } catch (error) {
    showPopup(error.message, "fail");
    return {};
  }
}
