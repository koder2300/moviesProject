let changeAuthor = (e) => {
  let sortedElements = [];
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    let listElement = el;
    sortedElements.push(listElement);
    if (el.author === e.target.value) {
      filteredMovies.push(el);
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
}; //GATUNEK
let changeGenres = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    el.genres.forEach((elm) => {
      let flat = e.target.value;
      if (flat.includes(elm)) {
      }
      if (elm === e.target.value) {
        renderMoviesListItem(
          containerAll,
          el.title,
          el.author,
          el.genres,
          el.rating
        );
      }
      if ("Wybierz" === e.target.value) {
        renderMoviesListItem(
          containerAll,
          el.title,
          el.author,
          el.genres,
          el.rating
        );
      }
    });
  });
};
// moviesArray;
document
  .querySelector("#selectGenres")
  .addEventListener("change", changeGenres);

document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAuthor);
