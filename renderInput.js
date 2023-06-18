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

//  INPUT POPRAWNY PRÓBA 2
idInput.addEventListener("input", function () {
  let val = document.getElementById("idInput").value;
  let searchGenres;
  // let inpGenres = document.querySelectorAll(".listCenterColumn");
  //
  for (let i = 0; i < moviesArray.length; i++) {
    let moviesArr = moviesArray[i].genres;

    moviesArr.forEach((el) => {
      if (el.includes(val)) {
        searchGenres = `${moviesArr}`;
        renderMoviesListItem(
          containerAll,
          moviesArray[i].title,
          moviesArray[i].author,
          searchGenres,
          moviesArray[i].rating
        );
      }
    });
  }
});
//Przyrodniczy
// Polski
// Komedia
//Historyczny
//Horror Thriller
