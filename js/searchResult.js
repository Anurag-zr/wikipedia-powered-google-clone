export const deleteSearchResult = () => {
  const parentElement = document.getElementById("searchResults");
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

export const buildSearchResult = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
    const resultTitle = createResultTitle(result);
    resultItem.append(resultTitle);
    const resultContent = document.createElement("div");
    resultContent.classList.add("resultContents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContent.append(resultImage);
    }

    const resultText = createResultText(result);
    resultContent.append(resultText);

    resultItem.append(resultContent);

    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultItem);
  });
};

const createResultTitle = (result) => {
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("resultTitle");
  const link = document.createElement("a");
  link.href = `https://en.wikipedia.org/?curid=${result.id}`;
  link.textContent = result.title;
  link.target = "_blank";
  resultTitle.append(link);

  return resultTitle;
};

const createResultImage = (result) => {
  const resultImage = document.createElement("div");
  resultImage.classList.add("resultImage");
  const img = document.createElement("img");
  img.src = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
};

const createResultText = (result) => {
  const resultText = document.createElement("div");
  resultText.classList.add("resultText");
  const resultDescription = document.createElement("p");
  resultDescription.classList.add("resultDescription");
  resultDescription.textContent = result.text;
  resultText.append(resultDescription);

  return resultText;
};

export const clearStatsLine = () => {
  document.getElementById("stats").textContent = "";
};

export const setStatsLine = (noOfResults) => {
  const statsLine = document.getElementById("stats");
  if (noOfResults) statsLine.textContent = `Displaying ${noOfResults} results`;
  else statsLine.textContent = `Sorry! no results found`;
};
