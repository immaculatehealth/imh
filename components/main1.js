document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = document.getElementById('phone-number');
    const emailaddr = document.getElementById('emailaddr');
    const revealButton1 = document.getElementById('revealButton1');

    revealButton1.addEventListener('click', function() {
        phoneNumber.textContent = "+61 424 604 602"; // Replace with full number
        emailaddr.textContent = "info@immaculatepsychology.com.au"; // Replace with full email
        revealButton1.style.display = "none"; // Hide the button after clicking
    });
});
