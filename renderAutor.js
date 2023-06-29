let arrGenres = [];
let uniqueChars = [];
let uniqueEl = [];
uniqueChars.unshift("Wybierz");
const changeAutorSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      uniqueEl.push(el);
      arrGenres.push(el.genres);

      arrGenres.forEach((el) => {
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
    selectGen.innerHTML = "";
    uniqueChars.forEach((element) => {
      let option = document.createElement("option");
      let optionTxt = document.createTextNode(element);
      option.appendChild(optionTxt);
      selectGen.appendChild(option);
      document
        .querySelector("#selectGenres")
        .addEventListener("change", renderGenresArr);
    });
  });
};

document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAutorSelect);
