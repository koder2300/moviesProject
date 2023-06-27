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
        if (filteredMovies) {
          filteredMovies.forEach((elm) => {
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

          if (
            typeof filteredMovies !== "undefined" &&
            filteredMovies.length > 0
          ) {
            titleAscending.forEach((element) => {
              renderMoviesListItem(
                containerAll,
                element.title,
                element.author,
                element.genres,
                element.rating
              );
            });
          }
        } else {
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
          moviesArray.forEach((element) => {
            renderMoviesListItem(
              containerAll,
              element.title,
              element.author,
              element.genres,
              element.rating
            );
          });
        }
        ////////////////////
      } else if (el === "sortuj alfabetycznie Z-A") {
        if (filteredMovies) {
          filteredMovies.forEach((elm) => {
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
          if (
            typeof filteredMovies !== "undefined" &&
            filteredMovies.length > 0
          ) {
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
        }
      }
      //
      else if (el === "sortuj wg oceny rosnąco") {
        if (filteredMovies) {
          filteredMovies.forEach((elm) => {
            //
            let ratingElements = elm;
            ratingAscending.push(ratingElements);
            ratingAscending = ratingAscending.sort(sortAscending);
            return ratingAscending;
          });
          if (
            typeof filteredMovies !== "undefined" &&
            filteredMovies.length > 0
          ) {
            ratingAscending.forEach((element) => {
              renderMoviesListItem(
                containerAll,
                element.title,
                element.author,
                element.genres,
                element.rating
              );
            });
          }
        }
      } else if (el === "sortuj wg oceny malejąco") {
        if (filteredMovies) {
          filteredMovies.forEach((elm) => {
            let ratingsElements = elm;
            ratingDescending.push(ratingsElements);
            ratingDescending = ratingDescending.sort(sortDescending);
            return ratingDescending;
          });
          if (
            typeof filteredMovies !== "undefined" &&
            filteredMovies.length > 0
          ) {
            ratingDescending.forEach((element) => {
              renderMoviesListItem(
                containerAll,
                element.title,
                element.author,
                element.genres,
                element.rating
              );
            });
          }
        }
      } else if ("Wybierz" === e.target.value) {
        filteredMovies.splice(0, filteredMovies.length);

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
