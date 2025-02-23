// Smooth scrolling for anchor links (accounts for sticky header)
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // offset for sticky header
          behavior: 'smooth'
        });
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = document.getElementById('phone-number');
    const revealButton = document.getElementById('reveal-button');

    revealButton.addEventListener('click', function() {
        phoneNumber.textContent = "0424 604 602"; // Replace with full number
        revealButton.style.display = "none"; // Hide the button after clicking
    });
});
