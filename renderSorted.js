const renderSort = (e) => {
  let divListThird = document.querySelectorAll(".list");
  divListThird.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  let arrSorted = [];
  let arrSortedEl = [];
  let arrSort = [];
  //
  function sortN(a, b) {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
  }
  function sortNumb(a, b) {
    if (a.rating < b.rating) {
      return -1;
    }
    if (a.rating > b.rating) {
      return 1;
    }
  }
  //
  sortArray.forEach((el) => {
    if (e.target.value === el) {
      console.log(`${el}`);
      if (el === "sortuj alfabetycznie A-Z") {
        moviesArray.forEach((elm) => {
          //
          let authorArray = elm;
          arrSort.push(authorArray);
          arrSort = arrSort.sort(function (a, b) {
            return a.title.localeCompare(b.title, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          });

          return arrSort;
        });
        arrSort.forEach((element) => {
          renderMoviesListItem(
            containerAll,
            element.title,
            element.author,
            element.genres,
            element.rating
          );
        });
      } else if (el === "sortuj alfabetycznie Z-A") {
        moviesArray.forEach((elm) => {
          let arrAut = elm;
          arrSorted.push(arrAut);
          arrSorted.sort(function (a, b) {
            return b.title.localeCompare(a.title, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          });

          return arrSorted;
        });
        arrSorted.forEach((element) => {
          renderMoviesListItem(
            containerAll,
            element.title,
            element.author,
            element.genres,
            element.rating
          );
        });
      }
      //
      else if (el === "sortuj wg oceny rosnąco") {
        moviesArray.forEach((elm) => {
          //
          let authorTitle = elm;
          arrSort.push(authorTitle);
          arrSort = arrSort.sort(sortNumb);
          return arrSort;
        });
        arrSort.forEach((element) => {
          renderMoviesListItem(
            containerAll,
            element.title,
            element.author,
            element.genres,
            element.rating
          );
        });
      } else if (el === "sortuj wg oceny malejąco") {
        moviesArray.forEach((elm) => {
          let arrAut = elm;
          arrSortedEl.push(arrAut);
          arrSortedEl = arrSortedEl.sort(sortN);
          return arrSortedEl;
        });
        arrSortedEl.forEach((element) => {
          renderMoviesListItem(
            containerAll,
            element.title,
            element.author,
            element.genres,
            element.rating
          );
        });
      }
      //
    }
  });
};

document.querySelector("#selectSorted").addEventListener("change", renderSort);
