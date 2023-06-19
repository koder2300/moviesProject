// export let searchGenres;
const renderInpCreated = () => {
  const chooseInput = document.createElement("input");
  chooseInput.setAttribute("id", "idInput");
  chooseInput.setAttribute("placeholder", "Choose movie");
  chooseInput.type = "text";
  searchMoviesDiv.appendChild(chooseInput);
  let val = document.getElementById("idInput").value;

  document.getElementById("idInput").style.width = "30%";
};
renderInpCreated();
///////////   INPUT  POPRAWNE W ID CONTAINER

// idInput.addEventListener("input", function () {
//   let val = document.getElementById("idInput").value;
//   //
//   let searchGenres = "";
//   for (let i = 0; i < moviesArray.length; i++) {
//     let moviesArr = moviesArray[i].genres;
//     moviesArr.forEach((el) => {
//       if (el.includes(val)) {
//         // console.log(el);
//         searchGenres += `<div class="elAuthorDiv"> Gatunek :${moviesArr}</div>`;
//         document.querySelector("#container2").innerHTML = searchGenres;
//       }
//     });
//   }
// });
//
let divListed = document.querySelector(`.titleType`);

//  INPUT POPRAWNY PRÓBA 2
idInput.addEventListener("input", function (event) {
  let val = event.target.value;
  //
  for (let i = 0; i < moviesArray.length; i++) {
    let moviesArr = moviesArray[i].title;
    console.log(typeof moviesArr);
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
//Przyrodniczy
// Polski
// Komedia
//Tytuł 71
//Tytuł 44
