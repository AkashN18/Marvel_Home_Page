const image = new Image();


const characters = [
  { name: "Iron Man", img: "img/Iron Man.webp" },
  { name: "Captain America", img: "img/Caption America.webp" },
  { name: "Thor", img: "img/Thor.webp" },
  { name: "Black Widow", img: "img/Black Widow.webp" },
  { name: "Hulk", img: "img/Hulk.webp" },
  { name: "Spider-Man", img: "img/Spiderman.webp" }
];

// Render character cards
const characterList = document.getElementById("characterList");
characters.forEach(char => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${char.img}" alt="${char.name}">
    <h3>${char.name}</h3>
  `;
  characterList.appendChild(card);
});

// Button interaction
document.getElementById("exploreBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".featured").offsetTop,
    behavior: "smooth"
  });
});