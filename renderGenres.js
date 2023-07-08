let resultMovies = [];
const changeGenresSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  //    FILTERED MOVIES =0
  // if (typeof filteredMovies !== "undefined" && filteredMovies.length === 0) {
  //   console.log(`klikasz`);
  //   moviesArray.forEach((el) => {
  //     el.genres.forEach((elm) => {
  //       if (elm === e.target.value) {
  //         arrayGenresSelect.splice(0, arrayGenresSelect.length);
  //
  //         renderMoviesListItem(
  //           containerAll,
  //           el.title,
  //           el.author,
  //           el.genres,
  //           el.rating
  //         );
  //       }
  //     });

  //     if ("Wybierz" === e.target.value) {
  //       arrayGenresSelect.splice(0, arrayGenresSelect.length);

  //       renderMoviesListItem(
  //         containerAll,
  //         el.title,
  //         el.author,
  //         el.genres,
  //         el.rating
  //       );
  //     }
  //   });
  // }
  // ////////
  // if (typeof filteredMovies !== "undefined" && filteredMovies.length > 0) {
  //   filteredMovies.forEach((el) => {
  //     el.genres.forEach((elm) => {
  //       if (elm === e.target.value) {
  //         console.log(`klik`);
  //         arrayGenresSelect.splice(0, arrayGenresSelect.length);
  //         // filteredMovies.push(el);
  //         filteredMovies.slice(el);
  //         resultMovies.push(el);
  //         console.log(resultMovies);
  //         renderMoviesListItem(
  //           containerAll,
  //           el.title,
  //           el.author,
  //           el.genres,
  //           el.rating
  //         );
  //         return resultMovies;
  //       }
  //     });

  //     if ("Wybierz" === e.target.value) {
  //       arrayGenresSelect.splice(0, arrayGenresSelect.length);

  //       renderMoviesListItem(
  //         containerAll,
  //         el.title,
  //         el.author,
  //         el.genres,
  //         el.rating
  //       );
  //     }
  //   });
  // }
  ///////////////////////////////
  //    FILTERED MOVIES =0
  // filteredMovies.splice(0, filteredMovies.length);
  // console.log(filteredMovies);
  // console.log(resultMovies);
  // console.log(arrayGenresSelect);
  if (typeof filteredMovies !== "undefined" && filteredMovies.length === 0) {
    console.log(`klikasz`);
    moviesArray.forEach((el) => {
      el.genres.forEach((elm) => {
        if (elm === e.target.value) {
          // console.log(el);

          resultMovies.push(el);
          // filteredMovies.push(el);
          // console.log(filteredMovies);
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
  if (typeof filteredMovies !== "undefined" && filteredMovies.length > 0) {
    filteredMovies.forEach((el) => {
      el.genres.forEach((elm) => {
        if (elm === e.target.value) {
          // console.log(`klik`);
          arrayGenresSelect.splice(0, arrayGenresSelect.length);
          // filteredMovies.push(el);
          filteredMovies.slice(el);
          resultMovies.push(el);
          // console.log(resultMovies);
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
  /////////////////////////
  // if (resultMovies.length > 0) {
  resultMovies.forEach((el) => {
    if (el.author === e.target.value) {
      console.log(`klikam`);
      filteredMovies.push(el);
      // console.log(filteredMovies);
      arrayGenresSelect.push(el.genres);
      // console.log(arrayGenresSelect);
      arrayGenresSelect.forEach((el) => {
        let elmGenres = el;
        elmGenres.forEach((elm) => {
          if (!uniqueCharEl.includes(elm)) {
            uniqueCharEl.push(elm);

            return uniqueCharEl;
          }
        });
        return uniqueCharEl;
      });

      renderMoviesListItem(
        containerAll,
        el.title,
        el.author,
        el.genres,
        el.rating
      );
    }
    ////
  });
  // }
  ////////////////
};
