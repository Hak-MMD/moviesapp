import { basicSearch } from "./modules/utils.js";
import { getFromStorage } from "./modules/storage.js";
import { renderSavedMovies } from "./modules/dom.js";
import { movieGrid, searchInput } from "./modules/domElements.js";

let watchLater = getFromStorage("watchLater");
//load watch Later
function loadMovies(list = watchLater) {
  renderSavedMovies(list, movieGrid);
}

searchInput.addEventListener("input", function () {
  const term = this.value.trim();

  if (!term) {
    // if input is empty, show all watchLater
    loadMovies();
    return;
  }

  // otherwise filter watchLater by term
  const result = basicSearch(watchLater, term);
  loadMovies(result);
});

//intial load
loadMovies();
