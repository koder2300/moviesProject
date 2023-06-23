let changeAuthor = (e) => {
  let arrSorted = [];
  let divListThird = document.querySelectorAll(".list");
  divListThird.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    // console.log(el);
    let listEl = el;
    arrSorted.push(listEl);
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
}; //GATUNEK
let changeGenres = (e) => {
  let divListThird = document.querySelectorAll(".list");
  divListThird.forEach((el) => {
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    el.genres.forEach((elm) => {
      let flat = e.target.value;
      if (flat.includes(elm)) {
        console.log(elm);
      }
      if (elm === e.target.value) {
        renderMoviesListItem(
          containerAll,
          el.title,
          el.author,
          el.genres,
          el.rating
        );
      }
    });
  });
};
moviesArray;
document
  .querySelector("#selectGenres")
  .addEventListener("change", changeGenres);

document
  .querySelector("#selectAuthor")
  .addEventListener("change", changeAuthor);
