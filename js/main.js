import {
  clearPushListener,
  clearSearchText,
  setSearchFocus,
  showClearButton,
} from "./searchBar.js";
import { getSearchTerm, retreiveSearchResult } from "./dataFunction.js";
import {
  deleteSearchResult,
  buildSearchResult,
  clearStatsLine,
  setStatsLine,
} from "./searchResult.js";

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  //set the focus at search Bar
  setSearchFocus();

  const search = document.getElementById("search");
  search.addEventListener("input", showClearButton);

  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);

  const form = document.querySelector("#searchBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = async (e) => {
  e.preventDefault();
  // delete previous search Result
  deleteSearchResult();

  await processTheSearch();

  setSearchFocus();
};

const processTheSearch = async () => {
  //clear stats line
  clearStatsLine();

  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retreiveSearchResult(searchTerm);
  if (resultArray.length) buildSearchResult(resultArray);

  //set stats line
  setStatsLine(resultArray.length);
};
