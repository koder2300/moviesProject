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

let movies1Title = movies[0].title;
let movies2Title = movies[1].title;
let movies3Title = movies[2].title;
let movies4Title = movies[3].title;
//
let movies1Author = movies[0].author;
let movies2Author = movies[1].author;
let movies3Author = movies[2].author;
let movies4Author = movies[3].author;
//
let movies1Genres = movies[0].genres;
let movies2Genres = movies[1].genres;
let movies3Genres = movies[2].genres;
let movies4Genres = movies[3].genres;
//
let movies1Rating = movies[0].rating;
let movies2Rating = movies[1].rating;
let movies3Rating = movies[2].rating;
let movies4Rating = movies[3].rating;
console.log(movies1Title);
//
const containerAll = document.querySelector(".container");
const containerAll2 = document.querySelector(".container2");
const containerAll3 = document.querySelector(".container3");
const containerAll4 = document.querySelector(".container4");
const addContent = (el, title, author, genres, rating) => {
  // movies.forEach((element) => {
  //   console.log(element.author);
  // });

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
  newDivCont1.classList.add("positionFirst");
  newDivCont2.classList.add("positionAuthor");
  newDivCont3.classList.add("positionGenres");
  newDivCont4.classList.add("positionRating");
  newDivCont5.classList.add("positionTitle");
  //
  newDivCont5.appendChild(contentTitle);
  newDivCont4.appendChild(contentRating);
  newDivCont3.appendChild(contentGenres);
  newDivCont2.appendChild(contentAuthor);
  //
  newDivCont2.appendChild(newDivCont5);
  newDivCont2.appendChild(newDivCont3);
  newDivCont2.appendChild(newDivCont4);
  //
  newDivCont1.appendChild(newDivCont2);
  //
  el.appendChild(newDivCont1);
  // body.appendChild(newDivCont1);
  el.classList.add("container");
};
addContent(
  containerAll,
  movies1Title,
  movies1Author,
  movies1Genres,
  movies1Rating
);
addContent(
  containerAll2,
  movies2Title,
  movies2Author,
  movies2Genres,
  movies2Rating
);
addContent(
  containerAll3,
  movies3Title,
  movies3Author,
  movies3Genres,
  movies3Rating
);
addContent(
  containerAll4,
  movies4Title,
  movies4Author,
  movies4Genres,
  movies4Rating
);

//chce powielic kod tylko ze dodaje do kontenera to samo a chce dodac z inna pozycja
