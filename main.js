let slides = document.querySelectorAll(".myslid");
let dots = document.querySelector(".dot");

let slide = 1;
showSlides(slide);


function plusSlides(a) {
  showSlides(slide += a);
}

function currentSlide(a) {
  showSlides(slide = a);
}
function showSlides(n) {
  if (n > slides.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slide - 1].style.display = "block";
  dots[slide - 1].classList.add("active");
}
