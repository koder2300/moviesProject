const renderInputItems = (array, idItem) => {
  const selectAdd = document.createElement("select");
  selectAdd.setAttribute("id", idItem);

  document.body.appendChild(selectAdd);
  //
  // let selectItem = document.getElementById("idItem");
  let arraysMovies = array;

  for (let i = 0; i < arraysMovies.length; i++) {
    let opt = arraysMovies[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectAdd.appendChild(el);
  }
};
renderInputItems(getAvailableAuthors(movies), "selectAuthor");
renderInputItems(getAvailableTitles(movies), "selectTitle");
renderInputItems(getAvailableGenres(movies), "selectGenres");
renderInputItems(getAvailableRatings(movies), "selectRating");
//
let selectAut = document.querySelector("#selectAuthor");
let selectTit = document.querySelector("#selectTitle");
let selectGen = document.querySelector("#selectGenres");
let selectRat = document.querySelector("#selectRating");
//
//    ZADANIE 4
document.querySelector("#selectAuthor").addEventListener("change", function () {
  console.log(selectAut.value);
  if (this.value == movies[1].author) {
    console.log(`ok1`);
    selectTit[0].textContent = movies[1].title;
    selectGen[0].textContent = movies[1].genres;
    selectRat[0].textContent = movies[1].rating;
  } else if (this.value == movies[2].author) {
    selectTit[0].textContent = movies[2].title;
    selectGen[0].textContent = movies[2].genres;
    selectRat[0].textContent = movies[2].rating;
  } else if (this.value == movies[0].author) {
    selectTit[0].textContent = movies[0].title;
    selectGen[0].textContent = movies[0].genres;
    selectRat[0].textContent = movies[0].rating;
  } else if (this.value == movies[3].author) {
    selectTit[0].textContent = movies[3].title;
    selectGen[0].textContent = movies[3].genres;
    selectRat[0].textContent = movies[3].rating;
  } else if (this.value == movies[4].author) {
    selectTit[0].textContent = movies[4].title;
    selectGen[0].textContent = movies[4].genres;
    selectRat[0].textContent = movies[4].rating;
  } else if (this.value == movies[5].author) {
    selectTit[0].textContent = movies[5].title;
    selectGen[0].textContent = movies[5].genres;
    selectRat[0].textContent = movies[5].rating;
  } else {
    console.log(`not`);
  }
});

//  jesli wybiore selectAut i tam movies np.[1] to w reszcie select ma być movies [1] event change .pierw zrobić dla jednego
