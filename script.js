const movies = [
  {
    title: "Tytuł 1",
    author: "Autor 1",
    genres: ["Komedia"],
    rating: 4,
  },
  {
    title: "Tytuł 2",
    author: "Autor 1",
    genres: ["Kryminał", "Dramat"],
    rating: 7.6,
  },
  {
    title: "Tytuł 3",
    author: "Autor 2",
    genres: ["Dramat"],
    rating: 6,
  },
  {
    title: "Tytuł 4",
    author: "Autor 3",
    genres: ["Obyczajowy"],
    rating: 5.1,
  },
  {
    title: "Tytuł 5",
    author: "Autor 4",
    genres: ["Dokumentalny"],
    rating: 8.3,
  },
  {
    title: "Tytuł 6",
    author: "Autor 4",
    genres: ["Dokumentalny"],
    rating: 7.2,
  },

  {
    title: "Tytuł 7",
    author: "Autor 4",
    genres: ["Przyrodniczy"],
    rating: 7.6,
  },
];

let movies1Title = movies.title;
let movies1Author = movies.author;
let movies1Genres = movies.genres;
let movies1Rating = movies.rating;
//
const containerAll = document.querySelector(".container");
//
const addContent = (el, title, author, genres, rating) => {
  // movies.forEach((element) => {
  //   console.log(element.author);
  // });
  //
  let newAuthor = document.createElement("p");
  let newTitle = document.createElement("p");
  let newGenres = document.createElement("p");
  let newRating = document.createElement("p");
  //
  newAuthor.classList.add("positionAuthorType");
  newTitle.classList.add("positionTitleType");
  newGenres.classList.add("positionGenresType");
  newRating.classList.add("positionRatingType");
  //
  let authorContent = document.createTextNode("Autor: ");
  let titleContent = document.createTextNode("Tytuł: ");
  let genresContent = document.createTextNode("gatunek: ");
  let ratingContent = document.createTextNode("ocena: ");
  //
  newAuthor.appendChild(authorContent);
  newTitle.appendChild(titleContent);
  newGenres.appendChild(genresContent);
  newRating.appendChild(ratingContent);
  //

  //
  let newDivCont1 = document.createElement("div");
  let newDivCont2 = document.createElement("div");
  let newDivCont3 = document.createElement("div");
  let newDivCont4 = document.createElement("div");
  let newDivCont5 = document.createElement("div");
  //
  let contentTitle = document.createTextNode(title);
  let contentAuthor = document.createTextNode(author);
  let contentGenres = document.createTextNode(genres);
  let contentRating = document.createTextNode(rating);
  //

  //
  newDivCont1.classList.add("positionFirst");
  newDivCont2.classList.add("positionAuthor");
  newDivCont3.classList.add("positionGenres");
  newDivCont4.classList.add("positionRating");
  newDivCont5.classList.add("positionTitle");
  //
  newDivCont1.appendChild(newAuthor);
  newDivCont1.appendChild(newTitle);
  newDivCont1.appendChild(newGenres);
  newDivCont1.appendChild(newRating);
  //
  newDivCont5.appendChild(contentTitle);
  newDivCont4.appendChild(contentRating);
  newDivCont3.appendChild(contentGenres);
  newDivCont2.appendChild(contentAuthor);
  //
  newDivCont1.appendChild(newDivCont5);
  newDivCont1.appendChild(newDivCont3);
  newDivCont1.appendChild(newDivCont4);
  newDivCont1.appendChild(newDivCont2);
  //
  el.appendChild(newDivCont1);
};
for (let i = 0; i < movies.length; i++) {
  addContent(
    containerAll,
    movies[i].title,
    movies[i].author,
    movies[i].genres,
    movies[i].rating
  );
}
// addContent(
//   containerAll,
//   movies1Title,
//   movies1Author,
//   movies1Genres,
//   movies1Rating
// );
// addContent(
//   containerAll2,
//   movies2Title,
//   movies2Author,
//   movies2Genres,
//   movies2Rating
// );
// addContent(
//   containerAll3,
//   movies3Title,
//   movies3Author,
//   movies3Genres,
//   movies3Rating
// );
// addContent(
//   containerAll4,
//   movies4Title,
//   movies4Author,
//   movies4Genres,
//   movies4Rating
// );
