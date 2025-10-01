let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Automatic slideshow
setInterval(() => {
  moveSlide(1);
}, 3000); // Change image every 3 seconds