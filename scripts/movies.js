import { getOptions, urlMap, search } from "./modules/apiData.js";
import { getMovies, searchMovies } from "./modules/api.js";
import { renderMovies } from "./modules/dom.js";
import {
  toolbar,
  movieGrid,
  searchForm,
  searchInput,
  pagination,
  active,
} from "./modules/domElements.js";
const categoryDropdown = toolbar.querySelector(".category-dropdown");

let movies = [];
let page = 1;
let selectedUrl = urlMap["popular"];

function loadMovies(genre = "") {
  getMovies(selectedUrl, getOptions, page, genre).then((results) => {
    movies = results;
    renderMovies(movies, movieGrid);
  });
}

// Handle search
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const term = searchInput.value;
  // console.log(term);

  if (!term) {
    return;
  }
  //convert user input to url query
  let queryTerm = term.trim().toLowerCase().split(" ").join("+");
  // console.log(queryTerm);

  page = 1;
  active.textContent = page;

  searchMovies(search, getOptions, page, queryTerm).then((results) => {
    movies = results;
    renderMovies(movies, movieGrid);
  });
});

// top menu
toolbar.addEventListener("click", function (e) {
  const toolbar = document.querySelector(".toolbar");

  toolbar.addEventListener("click", function (e) {
    if (!e.target.matches(".btn-tag")) return;
    //remove the active class and add to new btn
    const buttons = toolbar.querySelectorAll(".btn-tag");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    const genre =
      categoryDropdown.options[categoryDropdown.selectedIndex].dataset.id;
    //display different movies
    const urlKey = e.target.dataset.url;
    selectedUrl = urlMap[urlKey];
    page = 1;
    active.textContent = page;

    loadMovies(genre);
  });
});

//pagination
pagination.addEventListener("click", function (e) {
  if (!e.target.matches(".btn-tag-pag")) return;
  // if (active) return;
  console.log(123);
  const btn = e.target;
  // Handle prev/next
  if (btn.dataset.action === "prev") {
    if (page > 1) {
      page--;
      active.textContent = page;
      //scroll to top and show all the movies
      window.scrollTo(0, 0);
      loadMovies();
    }
  } else if (btn.dataset.action === "next") {
    page++;
    active.textContent = page;
    //scroll to top and show all the movies
    window.scrollTo(0, 0);
    loadMovies();
  }
});

// Initial render when page loads
loadMovies();
