let arrayGenresSelect = [];
let uniqueCharEl = [];
uniqueCharEl.unshift("Wybierz");
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

      selectGen.innerHTML = "";
      uniqueCharEl.forEach((element) => {
        // console.log(element);
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
  .addEventListener("change", changeGenresSelect);
document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAutorSelect);
