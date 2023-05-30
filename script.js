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

const containerAll = document.querySelector(".container");
//
const addContent = () => {
  movies.forEach((el) => {
    console.log(el.genres);
    // for (const [key, value] of Object.entries(el)) {
    //   console.log(`${key} : ${value}`);
    //   // console.log(typeof key);
    // }
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newContent = document.createTextNode(el.author);
    newP = document.createTextNode(el.genres);
    containerAll.classList.add("container");
    newP.className = "newPClass";
    // newP.classList.add("newPClass");
    newDiv.classList.add("addClass");
    newDiv.appendChild(newContent);
    newDiv.appendChild(newP);
    containerAll.appendChild(newDiv);
  });
};
addContent();
