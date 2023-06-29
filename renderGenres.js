const renderGenresArr = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  uniqueEl.forEach((el) => {
    el.genres.forEach((elm) => {
      if (elm === e.target.value) {
        arrGenres.push(el);
        renderMoviesListItem(
          containerAll,
          el.title,
          el.author,
          el.genres,
          el.rating
        );
      }

      if (elm === e.target.value) {
        //
        filteredMovies.splice(0, filteredMovies.length);
        arrGenres.splice(0, arrGenres.length);

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
          document
            .querySelector("#selectGenres")
            .addEventListener("change", renderGenresArr);
        });
      }
    });

    if ("Wybierz" === e.target.value) {
      filteredMovies.splice(0, filteredMovies.length);
      arrGenres.splice(0, arrGenres.length);

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
