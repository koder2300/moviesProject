function sortN(a, b) {
  if (a.rating < b.rating) {
    return 1;
  }
  if (a.rating > b.rating) {
    return -1;
  }
}

const getAvailableAuthors = (moviesArrays) => {
  let uniqueChars = [];
  let uniqueArr = [];
  moviesArrays.forEach((el) => {
    if (!uniqueChars.includes(el.author)) {
      return uniqueChars.push(el.author);
    }
  });

  uniqueChars.forEach((elm) => {
    // console.log(elm);
    let elArr = elm;
    uniqueArr.push(elArr);
    uniqueArr.sort(function (a, b) {
      return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
    return uniqueArr;
  });
  uniqueArr.unshift("Wybierz");

  return uniqueArr;
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
  let uniqueArr = [];
  let uniqueCharsArray = [];
  moviesArrays.forEach((el) => {
    let elmGenres = el.genres;
    elmGenres.forEach((elm) => {
      if (!uniqueChars.includes(elm)) {
        //
        uniqueChars.push(elm);
        return uniqueChars;
      }
    });
    return uniqueChars;
  });

  uniqueChars.forEach((elm) => {
    let elArr = elm;
    uniqueArr.push(elArr);
    uniqueArr.sort(function (a, b) {
      return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
    return uniqueArr;
  });
  uniqueArr.unshift("Wybierz");

  return uniqueArr;
};
getAvailableGenres(moviesArray);
//
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
renderInputItems(sortArray, "selectSorted");
renderInputItems(getAvailableGenres(moviesArray), "selectGenres");
// renderInputItems(getAvailableRatings(moviesArray), "selectRating");
//
//    SORT SELECT
//
let selectAut = document.querySelector("#selectAuthor");
let selectTit = document.querySelector("#selectTitle");
let selectGen = document.querySelector("#selectGenres");
let selectRat = document.querySelector("#selectRating");
