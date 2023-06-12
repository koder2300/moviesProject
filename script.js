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

const containerAll = document.querySelector(".containerAll");
//
const renderMoviesListItem = (el, title, author, genres, rating) => {
  //
  //  LIST CREATED ELEMENT
  let list = document.createElement("div");
  let divList = document.createElement("div");
  let listLeftColumn = document.createElement("div");
  let listCenterColumn = document.createElement("div");
  let listRightColumn = document.createElement("div");
  //      AUTHOR TITLE CREATED
  let titleType = document.createElement("div");
  let authorType = document.createElement("div");
  let titleTxt = document.createElement("div");
  let titleContent = document.createElement("div");
  let authorTxt = document.createElement("div");
  let authorContent = document.createElement("div");
  // GENRES     CREATED
  let genresContext = document.createElement("div");
  let genresTxt = document.createElement("div");
  let genresContent = document.createElement("div");
  //  RATING        CREATED
  let ratingContext = document.createElement("div");
  let ratingTxt = document.createElement("div");
  let ratingContent = document.createElement("div");

  // CLASSLIST ADD

  list.classList.add("list");
  divList.classList.add("divList");
  listLeftColumn.classList.add("listLeftColumn");
  listCenterColumn.classList.add("listCenterColumn");
  listRightColumn.classList.add("listRightColumn");
  //  CLASSLIST ADD CENTER COLUMN

  genresContent.classList.add("genresContent");
  genresTxt.classList.add("genresTxt");
  //  CLASSLIST ADD RIGHT COLUMN
  ratingContent.classList.add("ratingContent");
  ratingTxt.classList.add("ratingTxt");
  //  CLASSLIST ADD LEFT COLUMN
  //

  //
  titleTxt.classList.add("titleTxt");
  titleContent.classList.add("titleContent");
  authorTxt.classList.add("authorTxt");
  authorContent.classList.add("authorContent");
  //
  titleType.classList.add("titleType");
  authorType.classList.add("authorType");
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
  //

  //    LIST  APPENDCHILD
  el.appendChild(list);
  list.appendChild(divList);
  divList.appendChild(listLeftColumn);
  divList.appendChild(listCenterColumn);
  divList.appendChild(listRightColumn);
  //  Columns APPENDCHILD
  listLeftColumn.appendChild(titleType);
  listLeftColumn.appendChild(authorType);
  listCenterColumn.appendChild(genresContext);
  listRightColumn.appendChild(ratingContext);
  //  AUTHOR TITLE    APPENDCHILD
  titleType.appendChild(titleTxt);
  titleType.appendChild(titleContent);
  authorType.appendChild(authorTxt);
  authorType.appendChild(authorContent);
  //  GENRES  APPENDCHILD
  genresContext.appendChild(genresTxt);
  genresContext.appendChild(genresContent);
  //  RATING  APPENDCHILD
  ratingContext.appendChild(ratingTxt);
  ratingContext.appendChild(ratingContent);
  //
};
for (let i = 0; i < movies.length; i++) {
  renderMoviesListItem(
    containerAll,
    movies[i].title,
    movies[i].author,
    movies[i].genres,
    movies[i].rating
  );
}

const getAvailableAuthors = (movies) => {
  movies.forEach((element) => {
    console.log(element.author);
    console.log(element.title);
    console.log(element.genres);
    console.log(element.rating);
  });
  // for (let i = 0; i < movies.length; i++) {
  //   console.log(movies[i].author);
  // }
};
getAvailableAuthors(movies);
