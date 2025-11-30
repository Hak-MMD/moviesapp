import { baseImage } from "./apiData.js";

export function renderMovies(list, movieGrid) {
  movieGrid.innerHTML = "";

  if (!list || list.length === 0) {
    movieGrid.innerHTML = "<p>No movies found.</p>";
    return;
  }

  list.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <img
        src="${baseImage}${movie.poster_path}"
        alt="${movie.title} poster"
        class="movie-poster"
      />
      <div class="movie-content">
        <h3 class="movie-title"><a href="movie.html?movie_id=${movie.id}">${
      movie.title
    }</a></h3>    
        <p class="movie-year">🗓️ ${movie.release_date.split("-")[0]}</p>
        <p class="movie-rating">⭐ ${movie.vote_average} / 10</p>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}
export function renderSavedMovies(list, movieGrid) {
  movieGrid.innerHTML = "";

  if (!list || list.length === 0) {
    movieGrid.innerHTML = "<p>No movies found.</p>";
    return;
  }

  list.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <img
        src="${baseImage}${movie.posterPath}"
        alt="${movie.title} poster"
        class="movie-poster"
      />
      <div class="movie-content">
        <h3 class="movie-title"><a href="movie.html?movie_id=${movie.id}">${
      movie.title
    }</a></h3>    
        <p class="movie-year">🗓️ ${movie.release_date.split("-")[0]}</p>
        <p class="movie-rating">⭐ ${movie.rating} / 10</p>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}

export function displayMovie(movie) {
  document.querySelector(
    ".movie-poster"
  ).src = `${baseImage}${movie.poster_path}`;
  document.querySelector(".movie-title").textContent = movie.title;
  document.querySelector(
    ".movie-year"
  ).textContent = `Date of release: 🗓️ ${movie.release_date}`;
  document.querySelector(
    ".movie-rating"
  ).textContent = `Rating: ⭐ ${movie.vote_average} / 10`;
  document.querySelector(
    ".movie-genres"
  ).textContent = `Genres: 🎭 ${movie.genres.map((g) => g.name).join(", ")}`;
  document.querySelector(
    ".movie-runtime"
  ).textContent = `Runtime: ⏱ ${movie.runtime} min`;
  document.querySelector(".movie-description").textContent = movie.overview;
}
