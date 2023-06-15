var u = Object.defineProperty;
var n = (e, t) =>
  u(e, "name", {
    value: t,
    configurable: !0,
  });

moviesArray.forEach((e) => {
  let t = document.createElement("div");
  (t.innerHTML = `gatunek ${e.genres}, autor: ${e.author}`),
    document.body.querySelector("#container2").appendChild(t);
});
//
let changeTitles = (e) => {
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

//
let changeGenres = (e) => {
  e.target.value
    ? ((document.body.querySelector("#container2").innerHTML = ""),
      moviesArray.forEach((el) => {
        if (el.genres === e.target.value) {
          let createdElm = document.createElement("div");
          (createdElm.innerHTML = `autor : ${el.author}, gatunek: ${el.genres}`),
            document.body.querySelector("#container2").appendChild(createdElm);
        }
      }))
    : moviesArray.forEach((el) => {
        let createdElement = document.createElement("div");
        (createdElement.innerHTML = `autor : ${el.author}, gatunek :${el.genres}`),
          document.body
            .querySelector("#container2")
            .appendChild(createdElement);
      });
};

//
// changeGenres();
// document
//   .querySelector("#selectGenres")
//   .addEventListener("change", changeGenres);

document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeTitles);
