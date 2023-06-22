const renderSort = (e) => {
  let arrSorted = [];

  //
  function sortN(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
  }
  //
  sortArray.forEach((el) => {
    if (e.target.value === el) {
      console.log(`${el}`);
      if (el === "sortuj alfabetycznie A-Z") {
        moviesArray.forEach((elm) => {
          let arrAut = elm.author;
          arrSorted.push(arrAut);
          arrSorted.sort(function (a, b) {
            return a.localeCompare(b);
          });
          return arrSorted;
        });
        console.log(arrSorted);
      } else if (el === "sortuj alfabetycznie Z-A") {
        moviesArray.forEach((elm) => {
          let arrAut = elm.author;
          arrSorted.push(arrAut);
          arrSorted.sort(function (a, b) {
            return b.localeCompare(a);
          });
          return arrSorted;
        });
        console.log(arrSorted);
      }
      //
      else if (el === "sortuj wg oceny rosnąco") {
        moviesArray.forEach((elm) => {
          let arrAut = elm.rating;
          arrSorted.push(arrAut);
          // console.log(arrSorted);
          arrSorted.sort();
          return arrSorted;
        });
        console.log(arrSorted);
      } else if (el === "sortuj wg oceny malejąco") {
        moviesArray.forEach((elm) => {
          let arrAut = elm.rating;
          arrSorted.push(arrAut);
          // console.log(arrSorted);
          arrSorted.sort(sortN);
          return arrSorted;
        });
        console.log(arrSorted);
      }
      //
    }
  });
};

document.querySelector("#selectSorted").addEventListener("change", renderSort);
