document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const selectedRating = document.getElementById("selected-rating");
  
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        selectedRating.innerText = rating;
        stars.forEach((s) => s.classList.remove("active"));
        star.classList.add("active");
      });
    });
  });
  
 

  // hotel.js

window.onscroll = function() {
  shrinkNavbar();
};

function shrinkNavbar() {
  const navbar = document.querySelector('nav');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.padding = "5px 15px"; // Adjust the padding as needed
  } else {
    navbar.style.padding = "15px 15px"; // Default padding
  }
}

function redirectingtorate(){
  window.location.href = "rate us.html"

}

function redirectingtoabout(){
  window.location.href = "aboutus.html"


}
function redirectingtooder(){
  window.location.href = "order.html"


}