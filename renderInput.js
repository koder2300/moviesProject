let searchMoviesDiv = document.querySelector(".searchMoviesTxt");

const renderInpCreated = () => {
  const chooseInput = document.createElement("input");
  chooseInput.setAttribute("id", "idInput");
  chooseInput.setAttribute("placeholder", "Choose movie");
  chooseInput.type = "text";
  searchMoviesDiv.appendChild(chooseInput);
};
renderInpCreated();

//  INPUT POPRAWNY
idInput.addEventListener("input", function (event) {
  let val = event.target.value;
  //
  let divListThird = document.querySelectorAll(".list");
  divListThird.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  ////////////////////////////
  moviesArray.forEach((el) => {
    if (el.title.includes(val)) {
      selectAut.selectedIndex = 0;
      selectGen.selectedIndex = 0;
      filteredMovies.push(el);
      selectSort.selectedIndex = 0;
      // resultMovies.push(el);

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
