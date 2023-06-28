let arrGenres = [];
const changeAutorSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  //////
  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      arrGenres.push(el.genres);
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
  arrGenres.unshift("Wybierz");
  //
  let arrGen = document.querySelector("#selectGenres");
  arrGen.remove();
  //
  renderInputItems(arrGenres, "selectGenres");
};
// document
//   .querySelector("#selectAuthor")
//   .addEventListener("change", changeAutorSelect);
