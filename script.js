const moviesArray = JSON.parse(
  `[{"title":"Tytuł 50","author":"Autor 1","genres":["Sensacyjny","Thriller"],"rating":4.85},{"title":"Tytuł 77","author":"Autor 5","genres":["Dramat"],"rating":4.12},{"title":"Tytuł 31","author":"Autor 1","genres":["Dokumentalny","Przyrodniczy"],"rating":6.9},{"title":"Tytuł 5","author":"Autor 1","genres":["Przyrodniczy","Przygodowy"],"rating":3.37},{"title":"Tytuł 19","author":"Autor 3","genres":["Przyrodniczy","Przygodowy"],"rating":8.59},{"title":"Tytuł 65","author":"Autor 3","genres":["Historyczny"],"rating":7.15},{"title":"Tytuł 67","author":"Autor 6","genres":["Thriller"],"rating":4.99},{"title":"Tytuł 89","author":"Autor 1","genres":["Sensacyjny","Komedia"],"rating":5.16},{"title":"Tytuł 21","author":"Autor 6","genres":["Dramat"],"rating":9.76},{"title":"Tytuł 17","author":"Autor 3","genres":["Przygodowy"],"rating":5.25},{"title":"Tytuł 54","author":"Autor 6","genres":["Dramat","Komedia"],"rating":8.3},{"title":"Tytuł 64","author":"Autor 3","genres":["Dramat"],"rating":7.16},{"title":"Tytuł 11","author":"Autor 4","genres":["Horror"],"rating":5.53},{"title":"Tytuł 88","author":"Autor 2","genres":["Przyrodniczy","Komedia"],"rating":7.99},{"title":"Tytuł 60","author":"Autor 4","genres":["Sensacyjny","Przygodowy"],"rating":3.21},{"title":"Tytuł 66","author":"Autor 5","genres":["Dramat","Przyrodniczy"],"rating":8.28},{"title":"Tytuł 75","author":"Autor 6","genres":["Horror","Dramat"],"rating":9.6},{"title":"Tytuł 56","author":"Autor 2","genres":["Dramat"],"rating":6.67},{"title":"Tytuł 14","author":"Autor 1","genres":["Dramat","Dokumentalny"],"rating":7.76},{"title":"Tytuł 95","author":"Autor 4","genres":["Dramat","Sensacyjny"],"rating":8.76},{"title":"Tytuł 85","author":"Autor 3","genres":["Dokumentalny","Przygodowy"],"rating":9.08},{"title":"Tytuł 13","author":"Autor 5","genres":["Thriller","Dokumentalny"],"rating":9.5},{"title":"Tytuł 34","author":"Autor 5","genres":["Przyrodniczy"],"rating":4.56},{"title":"Tytuł 91","author":"Autor 4","genres":["Thriller","Przyrodniczy"],"rating":3.99},{"title":"Tytuł 44","author":"Autor 5","genres":["Thriller"],"rating":5.96},{"title":"Tytuł 47","author":"Autor 4","genres":["Sensacyjny"],"rating":7.49},{"title":"Tytuł 23","author":"Autor 2","genres":["Dokumentalny","Sensacyjny"],"rating":9.49},{"title":"Tytuł 98","author":"Autor 3","genres":["Przyrodniczy","Historyczny"],"rating":8.62},{"title":"Tytuł 84","author":"Autor 5","genres":["Thriller"],"rating":7.48},{"title":"Tytuł 93","author":"Autor 3","genres":["Dramat"],"rating":4.57},{"title":"Tytuł 63","author":"Autor 2","genres":["Przyrodniczy","Przygodowy"],"rating":8.04},{"title":"Tytuł 22","author":"Autor 5","genres":["Komedia"],"rating":4.29},{"title":"Tytuł 36","author":"Autor 4","genres":["Historyczny"],"rating":6.57},{"title":"Tytuł 2","author":"Autor 3","genres":["Thriller","Horror"],"rating":5.38},{"title":"Tytuł 59","author":"Autor 3","genres":["Przygodowy","Historyczny"],"rating":3.98},{"title":"Tytuł 4","author":"Autor 6","genres":["Sensacyjny"],"rating":4.27},{"title":"Tytuł 58","author":"Autor 2","genres":["Horror"],"rating":4.52},{"title":"Tytuł 94","author":"Autor 4","genres":["Dramat","Komedia"],"rating":5.25},{"title":"Tytuł 30","author":"Autor 3","genres":["Przyrodniczy"],"rating":6.67},{"title":"Tytuł 6","author":"Autor 1","genres":["Sensacyjny"],"rating":4.54},{"title":"Tytuł 15","author":"Autor 2","genres":["Przyrodniczy","Thriller"],"rating":5.35},{"title":"Tytuł 87","author":"Autor 6","genres":["Dramat"],"rating":3.53},{"title":"Tytuł 10","author":"Autor 3","genres":["Komedia","Przyrodniczy"],"rating":8.99},{"title":"Tytuł 86","author":"Autor 4","genres":["Historyczny"],"rating":7.02},{"title":"Tytuł 96","author":"Autor 5","genres":["Komedia","Przygodowy"],"rating":8.54},{"title":"Tytuł 78","author":"Autor 4","genres":["Horror","Dokumentalny"],"rating":6.45},{"title":"Tytuł 99","author":"Autor 1","genres":["Horror","Sensacyjny"],"rating":6.59},{"title":"Tytuł 62","author":"Autor 4","genres":["Sensacyjny"],"rating":3.03},{"title":"Tytuł 80","author":"Autor 6","genres":["Dokumentalny"],"rating":8.41},{"title":"Tytuł 92","author":"Autor 5","genres":["Komedia","Dramat"],"rating":7.26},{"title":"Tytuł 16","author":"Autor 5","genres":["Dramat","Przyrodniczy"],"rating":6.84},{"title":"Tytuł 82","author":"Autor 3","genres":["Historyczny"],"rating":8.85},{"title":"Tytuł 97","author":"Autor 4","genres":["Dokumentalny","Przyrodniczy"],"rating":8.05},{"title":"Tytuł 1","author":"Autor 4","genres":["Dokumentalny","Komedia"],"rating":4.91},{"title":"Tytuł 74","author":"Autor 5","genres":["Dramat"],"rating":5.98},{"title":"Tytuł 33","author":"Autor 3","genres":["Przyrodniczy"],"rating":6.61},{"title":"Tytuł 27","author":"Autor 5","genres":["Thriller"],"rating":4.91},{"title":"Tytuł 45","author":"Autor 5","genres":["Przyrodniczy"],"rating":5.36},{"title":"Tytuł 51","author":"Autor 6","genres":["Historyczny"],"rating":5.4},{"title":"Tytuł 57","author":"Autor 4","genres":["Thriller","Dokumentalny"],"rating":3.42},{"title":"Tytuł 72","author":"Autor 6","genres":["Historyczny"],"rating":6.05},{"title":"Tytuł 40","author":"Autor 2","genres":["Dramat"],"rating":5.17},{"title":"Tytuł 24","author":"Autor 2","genres":["Komedia"],"rating":3.83},{"title":"Tytuł 55","author":"Autor 4","genres":["Przygodowy"],"rating":3.41},{"title":"Tytuł 18","author":"Autor 4","genres":["Dokumentalny"],"rating":3.02},{"title":"Tytuł 7","author":"Autor 1","genres":["Thriller"],"rating":7.86},{"title":"Tytuł 49","author":"Autor 3","genres":["Thriller"],"rating":4.48},{"title":"Tytuł 38","author":"Autor 1","genres":["Thriller"],"rating":4.46},{"title":"Tytuł 29","author":"Autor 3","genres":["Dramat"],"rating":5.95},{"title":"Tytuł 69","author":"Autor 1","genres":["Dramat"],"rating":9.17},{"title":"Tytuł 46","author":"Autor 4","genres":["Przyrodniczy"],"rating":6.23},{"title":"Tytuł 28","author":"Autor 4","genres":["Przyrodniczy"],"rating":7.97},{"title":"Tytuł 68","author":"Autor 2","genres":["Historyczny"],"rating":4.8},{"title":"Tytuł 26","author":"Autor 4","genres":["Przyrodniczy","Sensacyjny"],"rating":7.31},{"title":"Tytuł 81","author":"Autor 6","genres":["Historyczny"],"rating":6.59},{"title":"Tytuł 41","author":"Autor 5","genres":["Historyczny","Przyrodniczy"],"rating":9.27},{"title":"Tytuł 48","author":"Autor 1","genres":["Przygodowy"],"rating":9.66},{"title":"Tytuł 100","author":"Autor 6","genres":["Przyrodniczy","Dramat"],"rating":8.37},{"title":"Tytuł 61","author":"Autor 1","genres":["Thriller"],"rating":8.74},{"title":"Tytuł 76","author":"Autor 4","genres":["Thriller","Horror"],"rating":5.25},{"title":"Tytuł 12","author":"Autor 2","genres":["Thriller"],"rating":7.71},{"title":"Tytuł 70","author":"Autor 6","genres":["Przyrodniczy","Sensacyjny"],"rating":7.21},{"title":"Tytuł 39","author":"Autor 1","genres":["Historyczny"],"rating":5.99},{"title":"Tytuł 42","author":"Autor 6","genres":["Dokumentalny"],"rating":8.79},{"title":"Tytuł 32","author":"Autor 1","genres":["Komedia"],"rating":6.17},{"title":"Tytuł 79","author":"Autor 2","genres":["Sensacyjny"],"rating":4.17},{"title":"Tytuł 35","author":"Autor 6","genres":["Przygodowy"],"rating":5.76},{"title":"Tytuł 71","author":"Autor 5","genres":["Przygodowy"],"rating":6.1},{"title":"Tytuł 8","author":"Autor 2","genres":["Dokumentalny"],"rating":5.17},{"title":"Tytuł 52","author":"Autor 4","genres":["Przyrodniczy"],"rating":9.59},{"title":"Tytuł 3","author":"Autor 2","genres":["Dramat"],"rating":3.04},{"title":"Tytuł 90","author":"Autor 1","genres":["Thriller","Historyczny"],"rating":8.15},{"title":"Tytuł 25","author":"Autor 3","genres":["Przygodowy","Komedia"],"rating":5.08},{"title":"Tytuł 83","author":"Autor 6","genres":["Sensacyjny"],"rating":5.41},{"title":"Tytuł 9","author":"Autor 2","genres":["Dokumentalny","Sensacyjny"],"rating":6.82},{"title":"Tytuł 73","author":"Autor 6","genres":["Przygodowy","Horror"],"rating":4.39},{"title":"Tytuł 53","author":"Autor 2","genres":["Thriller"],"rating":9.97},{"title":"Tytuł 43","author":"Autor 5","genres":["Przyrodniczy"],"rating":5.74},{"title":"Tytuł 20","author":"Autor 1","genres":["Dramat"],"rating":7.53},{"title":"Tytuł 37","author":"Autor 1","genres":["Dokumentalny"],"rating":6.15}]`
);
let sortArray = [
  "Wybierz",
  "sortuj alfabetycznie A-Z",
  "sortuj alfabetycznie Z-A",
  "sortuj wg oceny rosnąco",
  "sortuj wg oceny malejąco",
];
const containerAll = document.querySelector(".containerAll");
//
let filteredMovies = [];
let autorSelect = [];
const renderMoviesListItem = (el, title, author, genres, rating) => {
  //

  //  LIST CREATED
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
  //  CLASSLIST ADD RIGHT COLUMN
  ratingContext.classList.add("ratingType");
  ratingContent.classList.add("ratingContent");
  ratingTxt.classList.add("ratingTxt");
  //
  list.classList.add("list");
  divList.classList.add("divList");
  listLeftColumn.classList.add("listLeftColumn");
  listCenterColumn.classList.add("listCenterColumn");
  listRightColumn.classList.add("listRightColumn");
  //  CLASSLIST ADD CENTER COLUMN

  genresContent.classList.add("genresContent");
  genresTxt.classList.add("genresTxt");

  //  CLASSLIST ADD LEFT COLUMN
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
  //  RATING  APPENDCHILD
  ratingContext.appendChild(ratingTxt);
  ratingContext.appendChild(ratingContent);
  //
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

  //
  //
};

for (let i = 0; i < moviesArray.length; i++) {
  renderMoviesListItem(
    containerAll,
    moviesArray[i].title,
    moviesArray[i].author,
    moviesArray[i].genres,
    moviesArray[i].rating
  );
}
