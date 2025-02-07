const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let i = 0;

function changerSlide() {
  const slide = slides[i];
  const imgBanner = document.getElementById("imgBanner");
  const tagLine = document.getElementById("tagLine");

  imgBanner.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;

  dots.forEach((d, index) => {
    if (index === i) {
      d.classList.remove("dot_selected");
    } else {
      d.classList.add("dot_selected");
    }
  });
}

window.addEventListener("load", () => {
  dots[0].classList.remove("dot_selected");
});

let flecheGauche = document.getElementById("flecheGauche");
flecheGauche.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  changerSlide();
});

let flecheDroite = document.getElementById("flecheDroite");
flecheDroite.addEventListener("click", () => {
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  changerSlide();
});

let dots = document.querySelectorAll(".dots .dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    i = index;
    changerSlide();
  });
});
