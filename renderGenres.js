const renderGenresArr = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    console.log(el.genres);
    if (el.genres === e.target.value) {
      arrGenres.push(el.genres);
      console.log(el);
      //////////////////
      ////////////////
      renderMoviesListItem(
        containerAll,
        el.title,
        el.author,
        el.genres,
        el.rating
      );
    }

    if ("Wybierz" === e.target.value) {
      filteredMovies.splice(0, filteredMovies.length);

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
