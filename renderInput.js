let searchMoviesDiv = document.querySelector(".searchMoviesTxt");
let selectAuthor = document.querySelector("#selectAuthor");

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
      filteredMovies.push(el);
      resultMovies.push(el);
      for (var i = 0; i < selectAuthor.length; i++) {
        selectAuthor[i].selectedIndex = 0;
      }
      // selectAuthor.selectedIndex = 0;
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
