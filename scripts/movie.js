import { getOptions, single } from "./modules/apiData.js";
import { getMovie } from "./modules/api.js";
import { Movie } from "./modules/Movie.js";
import { getFromStorage, saveToStorage } from "./modules/storage.js";
import { showPopup } from "./modules/popup.js";

const favoriteBtn = document.querySelector("#fav");
const watchLaterBtn = document.querySelector("#wch");

const movieId = Number(
  new URLSearchParams(window.location.search).get("movie_id")
);

let favorites = getFromStorage("favorites");
let watchLater = getFromStorage("watchLater");
let movie = null;

let isFavoriteIndex = -1;
let isWatchIndex = -1;

//check if movie is in either of the lists
function checkFavorite() {
  isFavoriteIndex = favorites.findIndex((item) => item.id === movieId);
}

function checkWatchLater() {
  isWatchIndex = watchLater.findIndex((item) => item.id === movieId);
}

async function loadMovie() {
  movie = await getMovie(single, getOptions, movieId);

  checkFavorite();
  checkWatchLater();

  // Set initial button states
  if (isFavoriteIndex !== -1) {
    favoriteBtn.classList.add("active");
  }
  if (isWatchIndex !== -1) {
    watchLaterBtn.classList.add("active");
  }
}

//favorite button handler
favoriteBtn.addEventListener("click", function () {
  checkFavorite();

  if (isFavoriteIndex !== -1) {
    // Remove from favorites
    favorites = favorites.filter((item) => item.id !== movieId);
    saveToStorage("favorites", favorites);
    favoriteBtn.classList.remove("active");
    showPopup("Movie removed from favorites!", "success");
  } else {
    // Add to favorites
    const newMovie = new Movie(
      movie.id,
      movie.title,
      movie.poster_path,
      movie.release_date,
      movie.vote_average,
      movie.genres,
      movie.runtime,
      movie.overview
    );

    favorites = [newMovie, ...favorites];
    saveToStorage("favorites", favorites);
    favoriteBtn.classList.add("active");
    showPopup("Movie added to favorites!", "success");
  }
});

//watch later button handler
watchLaterBtn.addEventListener("click", function () {
  checkWatchLater();

  if (isWatchIndex !== -1) {
    // Remove from watch later
    watchLater = watchLater.filter((item) => item.id !== movieId);
    saveToStorage("watchLater", watchLater);
    watchLaterBtn.classList.remove("active");
    showPopup("Movie removed from Watch later!", "success");
  } else {
    // Add to watch later
    const newMovie = new Movie(
      movie.id,
      movie.title,
      movie.poster_path,
      movie.release_date,
      movie.vote_average,
      movie.genres,
      movie.runtime,
      movie.overview
    );

    watchLater = [newMovie, ...watchLater];
    saveToStorage("watchLater", watchLater);
    watchLaterBtn.classList.add("active");
    showPopup("Movie added to Watch later!", "success");
  }
});

// initial load
loadMovie();
