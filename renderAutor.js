let arrGenres = [];
let uniqueChars = [];
let uniqueEl = [];
const changeAutorSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  //////
  // console.log(`klik`);

  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      // console.log(el);
      uniqueEl.push(el);
      arrGenres.push(el.genres);
      // console.log(el);
      //////////////////

      arrGenres.forEach((el) => {
        let elmGenres = el;
        elmGenres.forEach((elm) => {
          if (!uniqueChars.includes(elm)) {
            //
            uniqueChars.push(elm);
            return uniqueChars;
          }
        });
        return uniqueChars;
      });
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
  //

  //
  uniqueChars.unshift("Wybierz");
  renderInputItems(uniqueChars, "selectGenres");

  //
  let arrGen = document.querySelector("#selectGenres");
  arrGen.remove();
  //
  document
    .querySelector("#selectGenres")
    .addEventListener("change", renderGenresArr);
};
// console.log(uniqueEl);
//
document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAutorSelect);
