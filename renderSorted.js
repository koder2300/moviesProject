const renderSort = (e) => {
  let arrSorted = [];
  let arrayTitle = [];
  let arraySortRating = [];
  //
  function sortN(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  }
  //
  sortArray.forEach((el) => {
    if (e.target.value === el) {
      console.log(`${el}`);
      if (el === "sortuj alfabetycznie A-Z") {
        //       LIST
        let divListTitle = document.querySelectorAll(".titleType");
        //
        divListTitle.forEach((el) => {
          const titleContent = el.innerHTML;
          arrayTitle.push(titleContent);
          arrayTitle.sort(sortN);
          return arrayTitle;
        });
      } else if (el === "sortuj alfabetycznie Z-A") {
        moviesArray.forEach((elm) => {
          let arrAut = elm.author;
          arrSorted.push(arrAut);
          arrSorted.sort(function (a, b) {
            return b - a;
          });
          return arrSorted;
        });
      }
      //
      else if (el === "sortuj wg oceny rosnąco") {
        let arrayRating = document.querySelectorAll(".ratingType");
        let arrFrom = Array.from(arrayRating);
        arrFrom.forEach((el) => {
          let arrRat = el.innerHTML;
          arraySortRating.push(arrRat);
          arraySortRating.sort(sortN);
          return arraySortRating;
        });
      }
      //
    }
  });
};

document.querySelector("#selectSorted").addEventListener("change", renderSort);
