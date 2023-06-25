const changeSortingEl = (e) => {
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((elements) => {
    elements.genres.forEach((elment) => {
      let flat = e.target.value;
      if (flat.includes(elment)) {
      }
      if (elment === e.target.value) {
        let result = renderMoviesListItem(
          containerAll,
          elements.title,
          elements.author,
          elements.genres,
          elements.rating
        );
        console.log(result);

        ///////////////////////////
        ///////////////////////////
      }
      if ("Wybierz" === e.target.value) {
        renderMoviesListItem(
          containerAll,
          elements.title,
          elements.author,
          elements.genres,
          elements.rating
        );
      }
    });
  });
};
// document
//   .querySelector("#selectGenres")
//   .addEventListener("change", changeSortingEl);

//jesli chnageGenres zostanie wybrany na tym wykonać tej tablicy select sorted
// document
//   .querySelector("#selectSorted")
//   .addEventListener("change", changeSortingEl);

// changeSortingEl();
