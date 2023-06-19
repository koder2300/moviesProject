let changeAuthor = (e) => {
  moviesArray.forEach((el) => {
    if (el.author === e.target.value) {
      renderMoviesListItem(
        containerAll,
        el.title,
        el.author,
        el.genres,
        el.rating
      );
    }
  });
};
//    GATUNEK   POPRAWNY
let changeGenres = (e) => {
  console.log(`klik`);
  e.target.value
    ? ((document.body.querySelector("#container2").innerHTML = ""),
      moviesArray.forEach((el) => {
        el.genres.forEach((element) => {
          if (element.includes(e.target.value)) {
            let createdElm = document.createElement("div");
            (createdElm.innerHTML = `autor : ${el.author}, gatunek: ${element}`),
              document.body
                .querySelector("#container2")
                .appendChild(createdElm);
          }
        });
      }))
    : moviesArray((el) => {
        let createdElement = document.createElement("div");
        (createdElement.innerHTML = `autor : ${el.author}, gatunek :${el.genres}`),
          document.body.querySelector("#container").appendChild(createdElement);
      });
};

moviesArray;
document
  .querySelector("#selectGenres")
  .addEventListener("change", changeGenres);

document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAuthor);
