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

  // filteredMovies = [];
  // resultMovies = [];

  sortArray.forEach((el) => {
    if (e.target.value === el) {
      if (e.target.value === "sortuj alfabetycznie A-Z") {
        //  SORT ARRAY MOVIES ===0

        if (resultMovies.length === 0 && filteredMovies.length === 0) {
          //

          moviesArray.forEach((elm) => {
            moviesArray.slice(elm);

            moviesArray = moviesArray.sort(function (a, b) {
              return a.title.localeCompare(b.title, undefined, {
                numeric: true,
                sensitivity: "base",
              });
            });

            return moviesArray;
          });

          moviesArray.forEach((el) => {
            renderMoviesListItem(
              containerAll,
              el.title,
              el.author,
              el.genres,
              el.rating
            );
          });
        } else if (
          typeof filteredMovies !== "undefined" &&
          filteredMovies.length > 0
        ) {
          filteredMovies.forEach((elm) => {
            filteredMovies.slice(elm);
            //

            filteredMovies = filteredMovies.sort(function (a, b) {
              return a.title.localeCompare(b.title, undefined, {
                numeric: true,
                sensitivity: "base",
              });
            });

            return filteredMovies;
          });
          if (resultMovies.length === 0) {
            if (
              typeof filteredMovies !== "undefined" &&
              filteredMovies.length > 0
            ) {
              filteredMovies.forEach((element) => {
                renderMoviesListItem(
                  containerAll,
                  element.title,
                  element.author,
                  element.genres,
                  element.rating
                );
              });
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
          }
        }

        /////// RESULT BIGGER MOVIES
        if (resultMovies > 0 || typeof resultMovies !== "undefined") {
          //

          resultMovies = resultMovies.sort(function (a, b) {
            return a.title.localeCompare(b.title, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          });

          //
          resultMovies.forEach((element) => {
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
        ////////////////////
      } else if (el === "sortuj alfabetycznie Z-A") {
        //  SORT ARRAY MOVIES =0
        if (resultMovies.length === 0 && filteredMovies.length === 0) {
          //
          moviesArray.forEach((elm) => {
            moviesArray.slice(elm);

            moviesArray = moviesArray.sort(function (a, b) {
              return b.title.localeCompare(a.title, undefined, {
                numeric: true,
                sensitivity: "base",
              });
            });

            return moviesArray;
          });
          //
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
        // END SORT MOVIES
        if (
          typeof filteredMovies !== "undefined" &&
          filteredMovies.length > 0
        ) {
          filteredMovies.forEach((elm) => {
            filteredMovies.slice(elm);
            filteredMovies.sort(function (a, b) {
              return b.title.localeCompare(a.title, undefined, {
                numeric: true,
                sensitivity: "base",
              });
            });

            return filteredMovies;
          });
          if (resultMovies.length === 0) {
            if (
              typeof filteredMovies !== "undefined" &&
              filteredMovies.length > 0
            ) {
              filteredMovies.forEach((element) => {
                renderMoviesListItem(
                  containerAll,
                  element.title,
                  element.author,
                  element.genres,
                  element.rating
                );
              });
            } else {
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
          }
        }
        //    RESULT MOVIES BIGGER
        if (resultMovies > 0 || typeof resultMovies !== "undefined") {
          //
          resultMovies = resultMovies.sort(function (a, b) {
            return b.title.localeCompare(a.title, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          });

          //
          resultMovies.forEach((element) => {
            renderMoviesListItem(
              containerAll,
              element.title,
              element.author,
              element.genres,
              element.rating
            );
          });
        }
        ///
      }
      //
      else if (el === "sortuj wg oceny rosnąco") {
        //  SORT ARRAY MOVIES =0
        if (resultMovies.length === 0 && filteredMovies.length === 0) {
          //
          moviesArray.forEach((elm) => {
            moviesArray.slice(elm);

            moviesArray = moviesArray.sort(sortAscending);

            return moviesArray;
          });
          //
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
        /////////
        //    RESULT MOVIES BIGGER
        if (resultMovies > 0 || typeof resultMovies !== "undefined") {
          //
          resultMovies = resultMovies.sort(sortAscending);
          //
          resultMovies.forEach((element) => {
            renderMoviesListItem(
              containerAll,
              element.title,
              element.author,
              element.genres,
              element.rating
            );
          });
        }

        if (
          typeof filteredMovies !== "undefined" &&
          filteredMovies.length > 0
        ) {
          filteredMovies.forEach((elm) => {
            filteredMovies.slice(elm);
            //
            filteredMovies = filteredMovies.sort(sortAscending);
            return filteredMovies;
          });
          if (resultMovies.length === 0) {
            if (
              typeof filteredMovies !== "undefined" &&
              filteredMovies.length > 0
            ) {
              filteredMovies.forEach((element) => {
                renderMoviesListItem(
                  containerAll,
                  element.title,
                  element.author,
                  element.genres,
                  element.rating
                );
              });
            } else {
              moviesArray.forEach((elm) => {
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
            }
          }
        }
      } else if (el === "sortuj wg oceny malejąco") {
        //  SORT ARRAY MOVIES =0
        if (resultMovies.length === 0 && filteredMovies.length === 0) {
          //
          moviesArray.forEach((elm) => {
            moviesArray.slice(elm);
            moviesArray = moviesArray.sort(sortDescending);
            return moviesArray;
          });
          //
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
        if (
          typeof filteredMovies !== "undefined" &&
          filteredMovies.length > 0
        ) {
          filteredMovies.forEach((elm) => {
            filteredMovies.slice(elm);
            //
            filteredMovies = filteredMovies.sort(sortDescending);
            return filteredMovies;
          });
          if (resultMovies.length === 0) {
            if (
              typeof filteredMovies !== "undefined" &&
              filteredMovies.length > 0
            ) {
              filteredMovies.forEach((element) => {
                renderMoviesListItem(
                  containerAll,
                  element.title,
                  element.author,
                  element.genres,
                  element.rating
                );
              });
            } else {
              ///
              moviesArray.forEach((elm) => {
                //
                let ratingElements = elm;
                ratingAscending.push(ratingElements);
                ratingAscending = ratingAscending.sort(sortDescending);
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
            }
          }
          //    RESULT MOVIES BIGGER
          if (resultMovies > 0 || typeof resultMovies !== "undefined") {
            //
            resultMovies = resultMovies.sort(sortDescending);
            resultMovies.forEach((element) => {
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
        moviesArray.forEach((el) => {
          renderMoviesListItem(
            containerAll,
            el.title,
            el.author,
            el.genres,
            el.rating
          );
        });
      } else if ("wybierz" === e.target.value) {
        if (
          typeof filteredMovies !== "undefined" &&
          filteredMovies.length > 0
        ) {
          filteredMovies.forEach((el) => {
            renderMoviesListItem(
              containerAll,
              el.title,
              el.author,
              el.genres,
              el.rating
            );
          });
        }
      }
      //
    }
  });
};

document.querySelector("#selectSorted").addEventListener("change", renderSort);
