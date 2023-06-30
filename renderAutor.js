let arrayGenresSelect = [];
let uniqueChars = [];

uniqueChars.unshift("Wybierz");
//
const changeAutorSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  filteredMovies.splice(0, filteredMovies.length);

  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      filteredMovies.push(el);

      console.log(filteredMovies);
      arrayGenresSelect.push(el.genres);
      arrayGenresSelect.forEach((el) => {
        let elmGenres = el;
        elmGenres.forEach((elm) => {
          if (!uniqueChars.includes(elm)) {
            uniqueChars.push(elm);
            return uniqueChars;
          }
        });
      });

      renderMoviesListItem(
        containerAll,
        el.title,
        el.author,
        el.genres,
        el.rating
      );
      selectGen.innerHTML = "";
      uniqueChars.forEach((element) => {
        let option = document.createElement("option");
        let optionTxt = document.createTextNode(element);
        option.appendChild(optionTxt);
        selectGen.appendChild(option);
      });
    }

    if ("Wybierz" === e.target.value) {
      filteredMovies.splice(0, filteredMovies.length);
      // selectGen.value = "";
      // uniqueChars.splice(0, uniqueChars.length);

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
