import { basicSearch } from "./modules/utils.js";
import { getFromStorage } from "./modules/storage.js";
import { renderSavedMovies } from "./modules/dom.js";
import { movieGrid, searchInput } from "./modules/domElements.js";

let favorites = getFromStorage("favorites");
//load favorite
function loadMovies(list = favorites) {
  renderSavedMovies(list, movieGrid);
}

searchInput.addEventListener("input", function () {
  const term = this.value.trim();

  if (!term) {
    // if input is empty, show all favorites
    loadMovies();
    return;
  }

  // otherwise filter favorites by term
  const result = basicSearch(favorites, term);
  loadMovies(result);
});

//intial load
loadMovies();
