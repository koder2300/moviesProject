let resultMovies = [];

const changeGenresSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  resultMovies = [];
  if (typeof filteredMovies !== "undefined" && filteredMovies.length === 0) {
    // let pageNumber = 1;
    // let pageSize = 10;
    // moviesArray = paginate(moviesArray, pageSize, pageNumber);
    // console.log(moviesArray);

    resultMovies = [];
    moviesArray.forEach((el) => {
      el.genres.forEach((elm) => {
        if (elm === e.target.value) {
          // filteredMovies.push(el);
          resultMovies.push(el);

          arrayGenresSelect.splice(0, arrayGenresSelect.length);
          renderMoviesListItem(
            containerAll,
            el.title,
            el.author,
            el.genres,
            el.rating
          );
        }
      });

      if ("Wybierz" === e.target.value) {
        arrayGenresSelect.splice(0, arrayGenresSelect.length);
        renderMoviesListItem(
          containerAll,
          el.title,
          el.author,
          el.genres,
          el.rating
        );
      }
    });
  }
  ////////
  else if (typeof filteredMovies !== "undefined" && filteredMovies.length > 0) {
    //

    resultMovies = [];
    filteredMovies.forEach((el) => {
      el.genres.forEach((elm) => {
        if (elm === e.target.value) {
          // arrayGenresSelect.splice(0, arrayGenresSelect.length);

          resultMovies.push(el);

          renderMoviesListItem(
            containerAll,
            el.title,
            el.author,
            el.genres,
            el.rating
          );
          return resultMovies;
        }
      });

      if ("Wybierz" === e.target.value) {
        arrayGenresSelect.splice(0, arrayGenresSelect.length);

        renderMoviesListItem(
          containerAll,
          el.title,
          el.author,
          el.genres,
          el.rating
        );
      }
    });
  }

  // resultMovies.forEach((el) => {
  //   if (el.author === e.target.value) {
  //
  //     filteredMovies.push(el);
  //     arrayGenresSelect.push(el.genres);
  //     arrayGenresSelect.forEach((el) => {
  //       let elmGenres = el;
  //       elmGenres.forEach((elm) => {
  //         if (!uniqueCharEl.includes(elm)) {
  //           uniqueCharEl.push(elm);

  //           return uniqueCharEl;
  //         }
  //       });
  //       return uniqueCharEl;
  //     });

  //     renderMoviesListItem(
  //       containerAll,
  //       el.title,
  //       el.author,
  //       el.genres,
  //       el.rating
  //     );
  //   }
  // });
};
