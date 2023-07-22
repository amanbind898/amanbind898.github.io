const e = document.querySelector(".header__main-ham-menu-cont")
  , n = document.querySelector(".header__sm-menu")
  , s = document.querySelector(".header__main-ham-menu")
  , t = document.querySelector(".header__main-ham-menu-close")
  , a = document.querySelectorAll(".header__sm-menu-link");
e.addEventListener("click", ()=>{
    n.classList.contains("header__sm-menu--active") ? n.classList.remove("header__sm-menu--active") : n.classList.add("header__sm-menu--active"),
    s.classList.contains("d-none") ? (s.classList.remove("d-none"),
    t.classList.add("d-none")) : (s.classList.add("d-none"),
    t.classList.remove("d-none"))
}
);
for (let e = 0; e < a.length; e++)
    a[e].addEventListener("click", ()=>{
        n.classList.remove("header__sm-menu--active"),
        s.classList.remove("d-none"),
        t.classList.add("d-none")
    }
    );
const c = document.querySelector(".header__logo-container");
c.addEventListener("click", ()=>{
    location.href = "index.html"
}
);

;
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementsByClassName("navbar")[0];
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};
// preloader js
document.addEventListener("DOMContentLoaded", function() {
  var languages = ["नमस्ते ", "নমস্কার", "வனக்கம்", "ನಮಸ್ಕಾರ ", "నమస్కారం"];
  var messageElement = document.getElementById("message");
  var duration = languages.length / 6; // Duration in seconds

  var index = 0;
  var interval = setInterval(function() {
    messageElement.textContent = languages[index];
    index++;

    if (index >= languages.length) {
      clearInterval(interval);
      setTimeout(function() {
        // Hide the preloader after the specified duration
        document.getElementById("preloader").style.display = "none";
      }, duration * 500);
    }
  }, duration * 500);
});
