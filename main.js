const e = document.querySelector(".header-main-ham-menu-cont")
  , n = document.querySelector(".header__sm-menu")
  , s = document.querySelector(".header-main-ham-menu")
  , t = document.querySelector(".header-main-ham-menu-close")
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
const c = document.querySelector(".header-logo-container");
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
  var languages = ["hello","नमस्ते ", "নমস্কার", "வனக்கம்", "ನಮಸ್ಕಾರ ", "నమస్కారం"];
  var messageElement = document.getElementById("message");
  var duration = languages.length / 10; // Duration in seconds

  var index = 0;
  var interval = setInterval(function() {
    messageElement.textContent = languages[index];
    index++;

    if (index >= languages.length) {
      clearInterval(interval);

      // Check if the user has visited before
      if (hasVisitedBefore()) {
        // If the user has visited before, hide the preloader immediately
        hidePreloader();
      } else {
        // If it's the first visit, hide the preloader after the specified duration
        setTimeout(function() {
          hidePreloader();
          // Set the flag indicating that the user has visited
          setVisitedFlag();
        }, duration * 500);
      }
    }
  }, duration * 500);
});

// Function to check if the user has visited the website before
function hasVisitedBefore() {
  return localStorage.getItem('visited') === 'true';
}

// Function to set a flag indicating that the user has visited the website
function setVisitedFlag() {
  localStorage.setItem('visited', 'true');
}

// Function to hide the preloader
function hidePreloader() {
  var preloaderElement = document.getElementById("preloader");
  if (preloaderElement) {
    preloaderElement.style.display = "none";
  }
}
