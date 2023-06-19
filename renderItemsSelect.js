let changeAuthor = (e) => {
  let divListThird = document.querySelectorAll(".list");
  divListThird.forEach((el) => {
    // el.innerHTML = "";
    el.parentNode.removeChild(el);
  });
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
}; //GATUNEK
let changeGenres = (e) => {
  let divListThird = document.querySelectorAll(".list");
  divListThird.forEach((el) => {
    // el.innerHTML = "";
    el.parentNode.removeChild(el);
  });
  moviesArray.forEach((el) => {
    el.genres.forEach((elm) => {
      // console.log(elm);
      let flat = e.target.value;
      if (flat.includes(elm)) {
        console.log(elm);
      }
      // console.log(e.target.value);
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
