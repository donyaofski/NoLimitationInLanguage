
const pictures = [
  { img: "assets/cat.jpg", words: { en: "Cat", de: "Katze", fa: "گربه" } },
  { img: "assets/apple.jpg", words: { en: "Apple", de: "Apfel", fa: "سیب" } },
  { img: "assets/house.jpg", words: { en: "House", de: "Haus", fa: "خانه" } }
];

let currentIndex = 0;
let currentLang = 'en';

function updateContent() {
  document.getElementById("mainImage").src = pictures[currentIndex].img;
  document.getElementById("wordLabel").innerText = pictures[currentIndex].words[currentLang];
}

function changeLanguage(lang) {
  currentLang = lang;
  updateContent();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % pictures.length;
  updateContent();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
  updateContent();
}

window.onload = updateContent;
