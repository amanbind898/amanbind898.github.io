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

  // hamburger icon
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });