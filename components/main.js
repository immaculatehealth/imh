document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = document.getElementById('phone-number');
    const revealButton1 = document.getElementById('revealButton1');

    revealButton1.addEventListener('click', function() {
        phoneNumber.textContent = "+61 424 604 602"; // Replace with full number
        revealButton1.style.display = "none"; // Hide the button after clicking
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const emailaddr = document.getElementById('emailaddr');
    const revealButton2 = document.getElementById('revealButton2'); // Corrected ID

    revealButton2.addEventListener('click', function() {
        emailaddr.textContent = "info@immaculatepsychology.com.au"; // Replace with full email
        revealButton2.style.display = "none"; // Hide the button after clicking
    });
});

