function sortN(a, b) {
  if (a.rating < b.rating) {
    return 1;
  }
  if (a.rating > b.rating) {
    return -1;
  }
}

const getAvailableAuthors = (moviesArrays) => {
  let uniqueCharArray = [];
  let uniqueArr = [];
  moviesArrays.forEach((el) => {
    if (!uniqueCharArray.includes(el.author)) {
      return uniqueCharArray.push(el.author);
    }
  });

  uniqueCharArray.forEach((elm) => {
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
  let uniqueCharArray = [];
  moviesArrays.forEach((el) => {
    if (!uniqueCharArray.includes(el.title)) {
      return uniqueCharArray.push(el.title);
    }
  });
  return uniqueCharArray;
};
getAvailableTitles(moviesArray);
//
const getAvailableRatings = (moviesArrays) => {
  let uniqueCharArray = [];
  moviesArrays.forEach((el) => {
    if (!uniqueCharArray.includes(el.rating)) {
      return uniqueCharArray.push(el.rating);
    }
  });
  return uniqueCharArray;
};
//
const getAvailableGenres = (moviesArrays) => {
  let uniqueCharArray = [];
  let uniqueArr = [];
  // let uniqueCharArrayArray = [];
  moviesArrays.forEach((el) => {
    let elmGenres = el.genres;
    elmGenres.forEach((elm) => {
      if (!uniqueCharArray.includes(elm)) {
        //
        uniqueCharArray.push(elm);
        return uniqueCharArray;
      }
    });
    return uniqueCharArray;
  });

  uniqueCharArray.forEach((elm) => {
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
