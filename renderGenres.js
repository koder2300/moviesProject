const renderGenresArray = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  filteredMovies.forEach((el) => {
    el.genres.forEach((elm) => {
      if (elm === e.target.value) {
        // filteredMovies.splice(0, filteredMovies.length);
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
      // filteredMovies.splice(0, filteredMovies.length);
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
};
