const slideTrack = document.querySelector(".slide-track");
const images = document.querySelectorAll(".slide-track img");
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 5000);

