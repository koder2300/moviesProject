const getAvailableAuthors = (moviesArrays) => {
  let uniqueChars = [];
  moviesArrays.forEach((el) => {
    if (!uniqueChars.includes(el.author)) {
      return uniqueChars.push(el.author);
    }
  });
  return uniqueChars;
};
getAvailableAuthors(moviesArray);

const getAvailableTitles = (moviesArrays) => {
  let uniqueChars = [];
  moviesArrays.forEach((el) => {
    if (!uniqueChars.includes(el.title)) {
      return uniqueChars.push(el.title);
    }
  });
  return uniqueChars;
};
getAvailableTitles(moviesArray);
//
const getAvailableRatings = (moviesArrays) => {
  let uniqueChars = [];
  moviesArrays.forEach((el) => {
    if (!uniqueChars.includes(el.rating)) {
      return uniqueChars.push(el.rating);
    }
  });
  return uniqueChars;
};
//
const getAvailableGenres = (moviesArrays) => {
  let uniqueChars = [];
  moviesArrays.forEach((el) => {
    if (!uniqueChars.includes(el.genres)) {
      return uniqueChars.push(el.genres);
    }
  });
  return uniqueChars;
};
getAvailableGenres(moviesArray);
//
let searchMoviesDiv = document.querySelector(".searchMoviesTxt");
const renderInputItems = (array, idItem) => {
  const selectAdd = document.createElement("select");
  //
  selectAdd.setAttribute("id", idItem);
  searchMoviesDiv.appendChild(selectAdd);
  let arraysMovies = array;
  for (let i = 0; i < arraysMovies.length; i++) {
    let opt = arraysMovies[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectAdd.appendChild(el);
  }
};
//
renderInputItems(getAvailableAuthors(moviesArray), "selectAuthor");
// renderInputItems(getAvailableTitles(moviesArray), "selectTitle");
renderInputItems(getAvailableGenres(moviesArray), "selectGenres");
// renderInputItems(getAvailableRatings(moviesArray), "selectRating");
//
let selectAut = document.querySelector("#selectAuthor");
let selectTit = document.querySelector("#selectTitle");
let selectGen = document.querySelector("#selectGenres");
let selectRat = document.querySelector("#selectRating");
