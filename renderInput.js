const renderInp = () => {
  const chooseInput = document.createElement("input");
  chooseInput.setAttribute("id", "idInput");
  chooseInput.setAttribute("placeholder", "Choose movie");
  chooseInput.type = "text";
  searchMoviesDiv.appendChild(chooseInput);
  let val = document.getElementById("idInput").value;
  console.log(val);
  document.getElementById("idInput").style.width = "30%";
};
renderInp();
idInput.addEventListener("change", function () {
  //   console.log(document.getElementById("idInput").value);
  let val = document.getElementById("idInput").value;
  let arr = [];
  arr.push(val);
  movies.forEach((el) => {
    console.log(el.author);
  });
  if (arr.includes()) console.log(arr);
});
