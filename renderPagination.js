var listing_table = document.getElementById("listingTable");
listing_table.innerHTML = "";
let paginElementsMoviesArr;
var btn_next = document.getElementById("btn_next");
let btn_prev = document.querySelector("#btn_prev");
//
btn_next.style.width = "50px";
btn_next.classList.add("btn");
btn_prev.classList.add("btn");
btn_prev.style.width = "50px";

//
btn_next.addEventListener("click", function () {
  listing_table.style.display = "grid";
  listing_table.style.gap = "1rem";
  let listElements = document.querySelectorAll(".list");

  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  listing_table.innerHTML = "";
  if (pageNumber >= 0 && pageNumber < 10) {
    pageNumber++;
  }
  document.querySelector("#page").textContent = `Page:${pageNumber}`;
  let pageSize = 10;
  paginElementsMoviesArr = paginate(moviesArray, pageSize, pageNumber);
  //
  paginElementsMoviesArr.forEach((el) => {
    renderMoviesListItem(
      containerAll,
      el.title,
      el.author,
      el.genres,
      el.rating
    );
  });
});
///   PREV
btn_prev.addEventListener("click", function () {
  listing_table.style.display = "grid";
  listing_table.style.gap = "1rem";
  let listElements = document.querySelectorAll(".list");
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  listing_table.innerHTML = "";
  if (pageNumber > 1 && pageNumber <= 10) {
    pageNumber--;
  }

  document.querySelector("#page").textContent = `Page:${pageNumber}`;
  let pageSize = 10;
  paginElementsMoviesArr = paginate(moviesArray, pageSize, pageNumber);
  //
  paginElementsMoviesArr.forEach((el) => {
    renderMoviesListItem(
      containerAll,
      el.title,
      el.author,
      el.genres,
      el.rating
    );
  });
});
