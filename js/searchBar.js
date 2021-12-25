export const setSearchFocus = () => {
  document.querySelector("#search").focus();
};

export const showClearButton = () => {
  const search = document.getElementById("search");
  const clear = document.getElementById("clear");

  if (search.value.length) {
    clear.classList.remove("none");
  } else {
    clear.classList.add("none");
  }
};

export const clearSearchText = (event) => {
  event.preventDefault();
  document.getElementById("search").value = "";
  document.getElementById("clear").classList.add("none");
  setSearchFocus();
};

export const clearPushListener = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.getElementById("clear").click();
  }
};
