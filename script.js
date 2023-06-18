const moviesArray = JSON.parse(
  '[{"title":"Tytuł 7","author":"Autor 4","genres":["Przyrodniczy"],"rating":7.6},{"title":"Tytuł 74","author":"Autor 11","genres":["Przyrodniczy","Historyczny"],"rating":6.2},{"title":"Tytuł 2","author":"Autor 13","genres":["Dramat","Przyrodniczy"],"rating":3.4},{"title":"Tytuł 7","author":"Autor 7","genres":["Horror","Thriller"],"rating":6.4},{"title":"Tytuł 71","author":"Autor 7","genres":["Historyczny"],"rating":9.8},{"title":"Tytuł 122","author":"Autor 13","genres":["Psychologiczny","Sensacyjny"],"rating":3.2},{"title":"Tytuł 68","author":"Autor 5","genres":["Wojenny"],"rating":5.7},{"title":"Tytuł 111","author":"Autor 9","genres":["Polski","Dramat"],"rating":9.7},{"title":"Tytuł 57","author":"Autor 6","genres":["Dokumentalny"],"rating":3.7},{"title":"Tytuł 20","author":"Autor 14","genres":["Dokumentalny","Wojenny"],"rating":8.4},{"title":"Tytuł 23","author":"Autor 2","genres":["Dramat"],"rating":9.8},{"title":"Tytuł 60","author":"Autor 4","genres":["Horror","Obyczajowy"],"rating":9.1},{"title":"Tytuł 70","author":"Autor 3","genres":["Komedia"],"rating":7.4},{"title":"Tytuł 89","author":"Autor 11","genres":["Thriller"],"rating":5.1},{"title":"Tytuł 119","author":"Autor 3","genres":["Thriller","Komedia"],"rating":4.8},{"title":"Tytuł 20","author":"Autor 13","genres":["Dokumentalny","Przyrodniczy"],"rating":4.7},{"title":"Tytuł 87","author":"Autor 4","genres":["Polski","Obyczajowy"],"rating":7},{"title":"Tytuł 21","author":"Autor 8","genres":["Historyczny"],"rating":9.6},{"title":"Tytuł 105","author":"Autor 9","genres":["Dramat"],"rating":4.9},{"title":"Tytuł 55","author":"Autor 6","genres":["Historyczny"],"rating":4.1},{"title":"Tytuł 72","author":"Autor 5","genres":["Psychologiczny"],"rating":8.4},{"title":"Tytuł 29","author":"Autor 2","genres":["Thriller","Kryminał"],"rating":3.8},{"title":"Tytuł 36","author":"Autor 4","genres":["Przyrodniczy","Psychologiczny"],"rating":5.7},{"title":"Tytuł 120","author":"Autor 11","genres":["Komedia"],"rating":8.1},{"title":"Tytuł 82","author":"Autor 3","genres":["Historyczny","Wojenny"],"rating":5.8},{"title":"Tytuł 59","author":"Autor 14","genres":["Polski","Dokumentalny"],"rating":3.6},{"title":"Tytuł 62","author":"Autor 14","genres":["Dramat"],"rating":8.2},{"title":"Tytuł 30","author":"Autor 12","genres":["Psychologiczny","Dokumentalny"],"rating":8.9},{"title":"Tytuł 69","author":"Autor 8","genres":["Sensacyjny"],"rating":4.3},{"title":"Tytuł 7","author":"Autor 3","genres":["Komedia"],"rating":3.7},{"title":"Tytuł 75","author":"Autor 7","genres":["Wojenny","Thriller"],"rating":6.9},{"title":"Tytuł 35","author":"Autor 5","genres":["Dramat"],"rating":3.3},{"title":"Tytuł 40","author":"Autor 6","genres":["Komedia","Wojenny"],"rating":9.8},{"title":"Tytuł 53","author":"Autor 4","genres":["Obyczajowy"],"rating":6.2},{"title":"Tytuł 33","author":"Autor 3","genres":["Wojenny"],"rating":4.2},{"title":"Tytuł 109","author":"Autor 7","genres":["Sensacyjny"],"rating":7.8},{"title":"Tytuł 108","author":"Autor 8","genres":["Komedia","Psychologiczny"],"rating":6},{"title":"Tytuł 66","author":"Autor 4","genres":["Dokumentalny"],"rating":6.1},{"title":"Tytuł 7","author":"Autor 9","genres":["Thriller"],"rating":5.5},{"title":"Tytuł 105","author":"Autor 10","genres":["Komedia"],"rating":3.9},{"title":"Tytuł 61","author":"Autor 10","genres":["Komedia"],"rating":10},{"title":"Tytuł 119","author":"Autor 11","genres":["Horror"],"rating":5.2},{"title":"Tytuł 2","author":"Autor 6","genres":["Thriller","Dokumentalny"],"rating":6.1},{"title":"Tytuł 54","author":"Autor 7","genres":["Obyczajowy"],"rating":8.9},{"title":"Tytuł 102","author":"Autor 7","genres":["Psychologiczny"],"rating":3.7},{"title":"Tytuł 89","author":"Autor 9","genres":["Polski"],"rating":5.1},{"title":"Tytuł 92","author":"Autor 10","genres":["Komedia","Dokumentalny"],"rating":3.1},{"title":"Tytuł 67","author":"Autor 4","genres":["Obyczajowy"],"rating":9.9},{"title":"Tytuł 47","author":"Autor 3","genres":["Sensacyjny"],"rating":5.6},{"title":"Tytuł 29","author":"Autor 7","genres":["Przyrodniczy"],"rating":7.5},{"title":"Tytuł 58","author":"Autor 11","genres":["Wojenny"],"rating":9.2},{"title":"Tytuł 57","author":"Autor 14","genres":["Psychologiczny","Kryminał"],"rating":7.5},{"title":"Tytuł 64","author":"Autor 3","genres":["Komedia","Psychologiczny"],"rating":4.1},{"title":"Tytuł 1","author":"Autor 3","genres":["Kryminał","Psychologiczny"],"rating":8},{"title":"Tytuł 84","author":"Autor 11","genres":["Psychologiczny","Obyczajowy"],"rating":7.2},{"title":"Tytuł 12","author":"Autor 2","genres":["Obyczajowy","Komedia"],"rating":7.3},{"title":"Tytuł 102","author":"Autor 7","genres":["Horror","Thriller"],"rating":9.2},{"title":"Tytuł 8","author":"Autor 5","genres":["Dramat","Przyrodniczy"],"rating":4.9},{"title":"Tytuł 92","author":"Autor 14","genres":["Komedia"],"rating":4.7},{"title":"Tytuł 110","author":"Autor 7","genres":["Obyczajowy"],"rating":7.4},{"title":"Tytuł 96","author":"Autor 4","genres":["Dramat"],"rating":5.7},{"title":"Tytuł 26","author":"Autor 6","genres":["Horror","Sensacyjny"],"rating":8},{"title":"Tytuł 107","author":"Autor 10","genres":["Dramat"],"rating":10},{"title":"Tytuł 27","author":"Autor 11","genres":["Dokumentalny"],"rating":5.2},{"title":"Tytuł 53","author":"Autor 8","genres":["Komedia","Psychologiczny"],"rating":7.5},{"title":"Tytuł 50","author":"Autor 8","genres":["Psychologiczny"],"rating":7.5},{"title":"Tytuł 85","author":"Autor 6","genres":["Komedia","Horror"],"rating":6.2},{"title":"Tytuł 9","author":"Autor 11","genres":["Komedia"],"rating":9.8},{"title":"Tytuł 55","author":"Autor 6","genres":["Wojenny"],"rating":7.7},{"title":"Tytuł 53","author":"Autor 8","genres":["Polski","Wojenny"],"rating":4.1},{"title":"Tytuł 66","author":"Autor 13","genres":["Horror","Dramat"],"rating":7},{"title":"Tytuł 89","author":"Autor 12","genres":["Dramat","Dokumentalny"],"rating":5.7},{"title":"Tytuł 90","author":"Autor 5","genres":["Sensacyjny"],"rating":6.8},{"title":"Tytuł 58","author":"Autor 5","genres":["Komedia"],"rating":9.3},{"title":"Tytuł 98","author":"Autor 7","genres":["Sensacyjny"],"rating":3.4},{"title":"Tytuł 34","author":"Autor 11","genres":["Dokumentalny","Kryminał"],"rating":8.8},{"title":"Tytuł 3","author":"Autor 10","genres":["Thriller"],"rating":6.7},{"title":"Tytuł 64","author":"Autor 11","genres":["Obyczajowy","Psychologiczny"],"rating":4.1},{"title":"Tytuł 110","author":"Autor 10","genres":["Dramat","Dokumentalny"],"rating":8.7},{"title":"Tytuł 6","author":"Autor 7","genres":["Horror","Obyczajowy"],"rating":9.1},{"title":"Tytuł 24","author":"Autor 9","genres":["Komedia"],"rating":3.4},{"title":"Tytuł 110","author":"Autor 4","genres":["Dramat"],"rating":4.4},{"title":"Tytuł 104","author":"Autor 10","genres":["Kryminał"],"rating":8.2},{"title":"Tytuł 42","author":"Autor 11","genres":["Komedia"],"rating":8.9},{"title":"Tytuł 73","author":"Autor 11","genres":["Horror"],"rating":9.6},{"title":"Tytuł 61","author":"Autor 5","genres":["Przyrodniczy","Polski"],"rating":4.1},{"title":"Tytuł 105","author":"Autor 2","genres":["Dramat","Psychologiczny"],"rating":9.2},{"title":"Tytuł 17","author":"Autor 13","genres":["Obyczajowy","Psychologiczny"],"rating":5.4},{"title":"Tytuł 120","author":"Autor 12","genres":["Horror"],"rating":3.6},{"title":"Tytuł 44","author":"Autor 2","genres":["Polski","Historyczny"],"rating":7.1},{"title":"Tytuł 57","author":"Autor 14","genres":["Obyczajowy","Psychologiczny"],"rating":7.2},{"title":"Tytuł 89","author":"Autor 4","genres":["Sensacyjny","Wojenny"],"rating":7.4},{"title":"Tytuł 7","author":"Autor 1","genres":["Dramat"],"rating":3},{"title":"Tytuł 51","author":"Autor 10","genres":["Horror","Obyczajowy"],"rating":4.5},{"title":"Tytuł 11","author":"Autor 3","genres":["Kryminał","Thriller"],"rating":6.6},{"title":"Tytuł 96","author":"Autor 6","genres":["Thriller","Psychologiczny"],"rating":5.4},{"title":"Tytuł 87","author":"Autor 4","genres":["Polski","Kryminał"],"rating":7.2},{"title":"Tytuł 6","author":"Autor 12","genres":["Obyczajowy","Psychologiczny"],"rating":8.1},{"title":"Tytuł 112","author":"Autor 5","genres":["Dokumentalny"],"rating":5.4},{"title":"Tytuł 106","author":"Autor 4","genres":["Psychologiczny"],"rating":5.9},{"title":"Tytuł 102","author":"Autor 7","genres":["Polski","Wojenny"],"rating":7.2}]'
);

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

for (let i = 0; i < moviesArray.length; i++) {
  renderMoviesListItem(
    containerAll,
    moviesArray[i].title,
    moviesArray[i].author,
    moviesArray[i].genres,
    moviesArray[i].rating
  );
}
