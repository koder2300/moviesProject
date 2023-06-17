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
///////////   INPUT  POPRAWNE

// idInput.addEventListener("input", function () {
//   let val = document.getElementById("idInput").value;
//   //
//   let searchGenres = "";
//   for (let i = 0; i < moviesArray.length; i++) {
//     let moviesArr = moviesArray[i].genres;
//     moviesArr.forEach((el) => {
//       if (el.includes(val)) {
//         // console.log(el);
//         searchGenres += `<div class="elAuthorDiv"> Gatunek :${el}</div>`;
//         document.querySelector("#container2").innerHTML = searchGenres;
//       }
//     });
//   }
// });
//

//  INPUT POPRAWNY PRÓBA 2
idInput.addEventListener("input", function () {
  let inpGenres = document.querySelectorAll(".listCenterColumn");
  let val = document.getElementById("idInput").value;
  let searchGenres = "";
  //

  for (let i = 0; i < moviesArray.length; i++) {
    let moviesArr = moviesArray[i].genres;
    moviesArr.forEach((el) => {
      if (el.includes(val)) {
        searchGenres = `<div class="elAuthorDiv"> Gatunek :${el}</div>`;

        inpGenres.forEach((elm) => {
          elm.innerHTML = searchGenres;
        });
      }
    });
  }
});

// No hej!  więc trudno opisać jakiej wskazówki potrzebuje, ale chciałbym wyrenderować taką ilość div, którą zwracam w renderInput.js pliku, pod nazwą searchGenres lub el z pętli forEach.Jak narazie wpisując w input ustawiam wszystkim divom wartość danego gatunku.Jeśli opanuje inputa to z resztą będzie łatwiej.Z góry dzięki za odp :)
