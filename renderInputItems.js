const renderInputItems = (array, idItem) => {
  const selectAdd = document.createElement("select");
  selectAdd.setAttribute("id", idItem);
  console.log(selectAdd);
  document.body.appendChild(selectAdd);
  //
  let selectItem = document.getElementById("idItem");
  let arrayAuthors = array;
  console.log(arrayAuthors);
  for (let i = 0; i < arrayAuthors.length; i++) {
    let opt = arrayAuthors[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectAdd.appendChild(el);
  }
  console.log(selectAdd);
};
renderInputItems(getAvailableAuthors(movies), "selectAuthor");
renderInputItems(getAvailableTitles(movies), "selectTitle");
renderInputItems(getAvailableGenres(movies), "selectGenres");
renderInputItems(getAvailableRatings(movies), "selectRating");
//

//
document.querySelector("#selectAuthor").addEventListener("change", function () {
  if (this.value == movies[1].author) {
    console.log(`ok`);
  } else {
    console.log(`not`);
  }
});
