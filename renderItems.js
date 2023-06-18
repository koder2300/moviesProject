const getAvailableAuthors = (moviesArrays) => {
  let uniqueChars = [];
  let uniqueCharsArray = [];
  for (let i = 0; i < moviesArrays.length; i++) {
    uniqueChars.push(moviesArrays[i].author);

    uniqueCharsArray = uniqueChars.filter((c, index) => {
      return uniqueChars.indexOf(c) === index;
    });
  }
  return uniqueCharsArray;
};
//
const getAvailableTitles = (moviesArrays) => {
  let uniqueChars = [];
  let uniqueCharsArray = [];
  for (let i = 0; i < moviesArrays.length; i++) {
    uniqueChars.push(moviesArrays[i].title);

    uniqueCharsArray = uniqueChars.filter((c, index) => {
      return uniqueChars.indexOf(c) === index;
    });
  }
  return uniqueCharsArray;
};
getAvailableTitles(moviesArray);
//
const getAvailableRatings = (moviesArrays) => {
  let uniqueChars = [];
  let uniqueCharsArray = [];
  for (let i = 0; i < moviesArrays.length; i++) {
    uniqueChars.push(moviesArrays[i].rating);

    uniqueCharsArray = uniqueChars.filter((c, index) => {
      return uniqueChars.indexOf(c) === index;
    });
  }
  return uniqueCharsArray;
};
//
const getAvailableGenres = (moviesArrays) => {
  let uniqueChars = [];
  let uniqueCharsArray = [];
  let uniqueCharacter = [];
  for (let i = 0; i < moviesArrays.length; i++) {
    uniqueChars.push(moviesArrays[i].genres);
    uniqueCharacter = uniqueChars.flat();
    //
    uniqueCharsArray = uniqueCharacter.filter((c, index) => {
      return uniqueCharacter.indexOf(c) === index;
    });
  }
  return uniqueCharsArray;
};
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
