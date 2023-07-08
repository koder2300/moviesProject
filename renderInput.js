let searchMoviesDiv = document.querySelector(".searchMoviesTxt");

const renderInpCreated = () => {
  const chooseInput = document.createElement("input");
  chooseInput.setAttribute("id", "idInput");
  chooseInput.setAttribute("placeholder", "Choose movie");
  chooseInput.type = "text";
  searchMoviesDiv.appendChild(chooseInput);
};
renderInpCreated();
///////////   INPUT  POPRAWNE
let divListed = document.querySelector(`.titleType`);
let divListSec = document.querySelector(".divList");
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
      // console.log(el);
      filteredMovies.push(el);
      resultMovies.push(el);
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
