document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu functionality for mobile
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        navMenu.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    }
  });

  // Phone reveal functionality
  const phoneNumber = document.getElementById('phone-number');
  const revealButton = document.getElementById('reveal-button');

  revealButton.addEventListener('click', function(e) {
    e.stopPropagation();
    phoneNumber.textContent = "0424 604 602"; // Replace with full number
    revealButton.style.display = "none";
  });

  // Email obfuscation functionality
  const emailLink = document.getElementById('email-link');
  if (emailLink) {
    const user = emailLink.getAttribute('data-user');
    const domain = emailLink.getAttribute('data-domain');
    const email = user + "@" + domain;
    emailLink.setAttribute('href', 'mailto:' + email);
    emailLink.textContent = email;
  }
});
