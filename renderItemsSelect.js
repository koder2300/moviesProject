moviesArray.forEach((e) => {
  let t = document.createElement("div");
  (t.innerHTML = `gatunek ${e.genres}, autor: ${e.author}`),
    document.body.querySelector("#container2").appendChild(t);
});
//    AUTOR
let changeAuthor = (e) => {
  e.target.value
    ? ((document.body.querySelector("#container2").innerHTML = ""),
      moviesArray.forEach((el) => {
        if (el.author === e.target.value) {
          let createdEl = document.createElement("div");
          (createdEl.innerHTML = `gatunek : ${el.genres}, autor: ${el.author}`),
            document.body.querySelector("#container2").appendChild(createdEl);
        }
      }))
    : moviesArray((el) => {
        let createdElm = document.createElement("div");
        (createdElm.innerHTML = `gatunek : ${el.genres},autor :${el.author}`),
          document.body.querySelector("#container").appendChild(createdElm);
      });
};
// //    GATUNEK   POPRAWNY
// let changeGenres = (e) => {
//   console.log(`klik`);
//   e.target.value
//     ? ((document.body.querySelector("#container2").innerHTML = ""),
//       moviesArray.forEach((el) => {
//         el.genres.forEach((element) => {
//           if (element.includes(e.target.value)) {
//             let createdElm = document.createElement("div");
//             (createdElm.innerHTML = `autor : ${el.author}, gatunek: ${element}`),
//               document.body
//                 .querySelector("#container2")
//                 .appendChild(createdElm);
//           }
//         });
//       }))
//     : moviesArray((el) => {
//         let createdElement = document.createElement("div");
//         (createdElement.innerHTML = `autor : ${el.author}, gatunek :${el.genres}`),
//           document.body.querySelector("#container").appendChild(createdElement);
//       });
// };
///////////  DO zmiany
let changeGenres = (e) => {
  console.log(`klik`);
  e.target.value
    ? ((document.body.querySelector("#container2").innerHTML = ""),
      moviesArray.forEach((el) => {
        el.genres.forEach((element) => {
          if (element.includes(e.target.value)) {
            let createdElm = document.createElement("div");
            (createdElm.innerHTML = `autor : ${el.author}, gatunek: ${element}`),
              document.body.querySelector(".titleType").appendChild(createdElm);
          }
        });
      }))
    : moviesArray((el) => {
        let createdElement = document.createElement("div");
        (createdElement.innerHTML = `autor : ${el.author}, gatunek :${el.genres}`),
          document.body.querySelector("#container").appendChild(createdElement);
      });
};
//

moviesArray;
document
  .querySelector("#selectGenres")
  .addEventListener("change", changeGenres);

document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAuthor);
