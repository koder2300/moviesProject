const renderInp = () => {
  const chooseInput = document.createElement("input");
  chooseInput.setAttribute("id", "idInput");
  chooseInput.setAttribute("placeholder", "Choose movie");
  chooseInput.type = "text";
  containerAll.before(chooseInput);
  let val = document.getElementById("idInput").value;
  console.log(val);
};
renderInp();
idInput.addEventListener("change", function () {
  //   console.log(document.getElementById("idInput").value);
  let val = document.getElementById("idInput").value;
  let arr = [];
  arr.push(val);
  movies.forEach((el) => {
    console.log(typeof el.author);
  });
  if (arr.includes()) console.log(arr);
});
