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

//

//

// let movies1Title = movies.title;
// let movies1Author = movies.author;
// let movies1Genres = movies.genres;
// let movies1Rating = movies.rating;
// //
const containerAll = document.querySelector(".containerAll");

const addContent = (el, title, author, genres, rating) => {
  //   //
  //   newDivCont1.classList.add("container");
  //   newDivCont2.classList.add("positionAuthor");
  //   newDivCont3.classList.add("positionGenres");
  //   newDivCont4.classList.add("positionRating");
  //   newDivCont5.classList.add("positionTitle");
  //   //
  //  LIST CREATED ELEMENT
  let list = document.createElement("div");
  let divList = document.createElement("div");
  let listLeftColumn = document.createElement("div");
  let listCenterColumn = document.createElement("div");
  let listRightColumn = document.createElement("div");
  //      AUTHOR TITLE CREATED
  let titleAuthorTogether = document.createElement("div");
  let titleTxt = document.createElement("div");
  let titleContent = document.createElement("div");
  let authorTxt = document.createElement("div");
  let authorContent = document.createElement("div");
  // GENRES     CREATED
  let genres1 = document.createElement("div");
  let genresTxt = document.createElement("div");
  let genresContent = document.createElement("div");
  //  RATING        CREATED
  let rating1 = document.createElement("div");
  let ratingTxt = document.createElement("div");
  let ratingContent = document.createElement("div");
  // CLASSLIST ADD
  list.classList.add("list");
  divList.classList.add("divList");
  listLeftColumn.classList.add("listLeftColumn");
  listCenterColumn.classList.add("listCenterColumn");
  listRightColumn.classList.add("listRightColumn");
  //    LIST  APPENDCHILD
  el.appendChild(list);
  list.appendChild(divList);
  divList.appendChild(listLeftColumn);
  divList.appendChild(listCenterColumn);
  divList.appendChild(listRightColumn);
  //  Columns APPENDCHILD
  listLeftColumn.appendChild(titleAuthorTogether);
  listCenterColumn.appendChild(genres1);
  listRightColumn.appendChild(rating1);
  //  AUTHOR TITLE    APPENDCHILD
  titleAuthorTogether.appendChild(titleTxt);
  titleAuthorTogether.appendChild(titleContent);
  titleAuthorTogether.appendChild(authorTxt);
  titleAuthorTogether.appendChild(authorContent);
  //  GENRES  APPENDCHILD
  genres1.appendChild(genresTxt);
  genres1.appendChild(genresContent);
  //  RATING  APPENDCHILD
  rating1.appendChild(ratingTxt);
  rating1.appendChild(ratingContent);
  // CREATETEXTNODE
  genresTxt = document.createTextNode("Gatunki: ");
  titleTxt = document.createTextNode("Tytuł: ");
  ratingTxt = document.createTextNode("Ocena: ");
  authorTxt = document.createTextNode("Autor: ");
  //CREATETEXTNODE
  titleContent = document.createTextNode(title);
  genresContent = document.createTextNode(genres);
  ratingContent = document.createTextNode(rating);
  authorContent = document.createTextNode(author);
};
// for (let i = 0; i < movies.length; i++) {
//   addContent(
//     containerAll,
//     movies[i].title,
//     movies[i].author,
//     movies[i].genres,
//     movies[i].rating
//   );
// }

addContent(
  containerAll,
  movies[0].title,
  movies[0].author,
  movies[0].genres,
  movies[0].rating
);
