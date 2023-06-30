const changeGenresSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  if (typeof filteredMovies !== "undefined" && filteredMovies.length > 0) {
    filteredMovies.forEach((el) => {
      el.genres.forEach((elm) => {
        if (elm === e.target.value) {
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
  } else {
    moviesArray.forEach((el) => {
      el.genres.forEach((elm) => {
        if (elm === e.target.value) {
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
};
