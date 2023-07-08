let arrayGenresSelect = [];
let uniqueCharEl = [];
let selectSort = document.querySelector("#selectSorted");
//

const changeAutorSelect = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  filteredMovies.splice(0, filteredMovies.length);
  uniqueCharEl.splice(0, uniqueCharEl.length);
  arrayGenresSelect.splice(0, arrayGenresSelect.length);

  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      /////////////////
      // console.log(resultMovies);
      console.log(el);
      if (resultMovies.length > 0) {
        resultMovies.forEach((elm) => {
          renderMoviesListItem(
            containerAll,
            elm.title,
            elm.author,
            elm.genres,
            elm.rating
          );
        });
      }
      /////////////
      filteredMovies.push(el);
      // console.log(filteredMovies);
      arrayGenresSelect.push(el.genres);
      // console.log(arrayGenresSelect);
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
      //////////////////////
      // selectSort.innerHTML = "";
      // sortArray.forEach((el) => {
      //   // console.log(el);
      //   //
      //   let option = document.createElement("option");
      //   let optionTxt = document.createTextNode(el);

      //   option.appendChild(optionTxt);
      //   selectSort.appendChild(option);
      //   //
      //   // selectSort.innerHTML = `klik`;
      // });
      //////////////
      // console.log(filteredMovies);
      // console.log(resultMovies);
      // console.log(arrayGenresSelect);
      // console.log(uniqueCharEl);
      //
      selectGen.innerHTML = "";
      if (!uniqueCharEl.includes("Wybierz")) {
        uniqueCharEl.unshift("Wybierz");

        return uniqueCharEl;
      }
      uniqueCharEl.forEach((element) => {
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

//
