const renderInpCreated = () => {
  const chooseInput = document.createElement("input");
  chooseInput.setAttribute("id", "idInput");
  chooseInput.setAttribute("placeholder", "Choose movie");
  chooseInput.type = "text";
  searchMoviesDiv.appendChild(chooseInput);
  let val = document.getElementById("idInput").value;
  console.log(val);
  document.getElementById("idInput").style.width = "30%";
};
renderInpCreated();
/// INPUT PRÓBA 1
//
idInput.addEventListener("input", function () {
  let val = document.getElementById("idInput").value;
  //
  let searchAut = "";
  for (let i = 0; i < moviesArray.length; i++) {
    if (val === moviesArray[i].author) {
      let autMov = moviesArray[i].author;
      let autGen = moviesArray[i].genres;
      searchAut += `<div class="elAuthorDiv">Autor :${autMov} Gatunek :${autGen}</div>`;
      document.querySelector("#container2").innerHTML = searchAut;
    }
  }
});
////////////////////
// INPUT PRÓBA 2

// idInput.addEventListener("input", function () {
//   let val = document.getElementById("idInput").value;
//   //
//   for (let i = 0; i < moviesArray.length; i++) {
//     let arr = moviesArray[i].author;
//     // console.log(moviesArray[i].author);
//     let found = val.split("").filter((char) => arr.includes(char));
//     let foundLetter;
//     if (found) {
//       // console.log(found);
//       foundLetter += `<div class="elAuthorDiv">Autor :${found}</div>`;
//       document.querySelector("#container2").innerHTML = foundLetter;
//     }
//   }
// });
