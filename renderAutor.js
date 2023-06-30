let arrayGenresSelect = [];
let uniqueCharactersEl = [];
uniqueCharactersEl.unshift("Wybierz");
//

const changeAutorSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  // filteredMovies.splice(0, filteredMovies.length);
  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      filteredMovies.push(el);
      // console.log(filteredMovies);
      arrayGenresSelect.push(el.genres);
      arrayGenresSelect.forEach((el) => {
        let elmGenres = el;
        elmGenres.forEach((elm) => {
          if (!uniqueCharactersEl.includes(elm)) {
            uniqueCharactersEl.push(elm);
            return uniqueCharactersEl;
          }
        });
        return uniqueCharactersEl;
      });

      renderMoviesListItem(
        containerAll,
        el.title,
        el.author,
        el.genres,
        el.rating
      );

      selectGen.innerHTML = "";
      uniqueCharactersEl.forEach((element) => {
        console.log(element);
        let option = document.createElement("option");
        let optionTxt = document.createTextNode(element);
        option.appendChild(optionTxt);
        selectGen.appendChild(option);
      });
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
document
  .querySelector("#selectGenres")
  .addEventListener("change", renderGenresArray);
document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAutorSelect);
