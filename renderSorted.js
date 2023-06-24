const renderSort = (e) => {
  let listItems = document.querySelectorAll(".list");
  listItems.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  let titleDescending = [];
  let ratingDescending = [];
  let titleAscending = [];
  let ratingAscending = [];
  //
  function sortDescending(a, b) {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
  }
  function sortAscending(a, b) {
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
      if (el === "sortuj alfabetycznie A-Z") {
        moviesArray.forEach((elm) => {
          //
          let titleElements = elm;
          titleAscending.push(titleElements);
          titleAscending = titleAscending.sort(function (a, b) {
            return a.title.localeCompare(b.title, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          });

          return titleAscending;
        });
        titleAscending.forEach((element) => {
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
          let titleElements = elm;
          titleDescending.push(titleElements);
          titleDescending.sort(function (a, b) {
            return b.title.localeCompare(a.title, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          });

          return titleDescending;
        });
        titleDescending.forEach((element) => {
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
          let ratingElements = elm;
          ratingAscending.push(ratingElements);
          ratingAscending = ratingAscending.sort(sortAscending);
          return ratingAscending;
        });
        ratingAscending.forEach((element) => {
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
          let ratingsElements = elm;
          ratingDescending.push(ratingsElements);
          ratingDescending = ratingDescending.sort(sortDescending);
          return ratingDescending;
        });
        ratingDescending.forEach((element) => {
          renderMoviesListItem(
            containerAll,
            element.title,
            element.author,
            element.genres,
            element.rating
          );
        });
      } else if ("Wybierz" === e.target.value) {
        moviesArray.forEach((el) => {
          renderMoviesListItem(
            containerAll,
            el.title,
            el.author,
            el.genres,
            el.rating
          );
        });
      }
      //
    }
  });
};

document.querySelector("#selectSorted").addEventListener("change", renderSort);
