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
    // el.innerHTML = "";
    el.parentNode.removeChild(el);
  });
  for (let i = 0; i < moviesArray.length; i++) {
    let moviesArr = moviesArray[i].title;

    if (moviesArr.includes(val)) {
      console.log(moviesArr);
      renderMoviesListItem(
        containerAll,
        moviesArr,
        moviesArray[i].author,
        moviesArray[i].genres,
        moviesArray[i].rating
      );
    }
  }
});
