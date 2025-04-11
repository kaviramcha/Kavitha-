document.addEventListener("DOMContentLoaded", function() {
    // Mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');

    mobileNavToggle.addEventListener('click', function() {
      navbar.classList.toggle('navbar-mobile');
      this.classList.toggle('bi-x');
    });
  });

var word = "Full Stack Engineer";
        var currentIndex = 0;
        var isBlinking = false;

        function animateWord() {
            if (currentIndex < word.length) {
                document.getElementById("role").innerHTML = word.substring(0, currentIndex + 1);
                currentIndex++;
            } else {
                clearInterval(animationInterval);
                document.getElementById("role").classList.add("blinking");
                setTimeout(function() {
                    document.getElementById("role").classList.remove("blinking");
                    currentIndex = 0;
                    animationInterval = setInterval(animateWord, 100);
                }, 2000); // Adjust blinking duration here
            }
        }

        var animationInterval = setInterval(animateWord, 100)

// Preloader
setTimeout(function() {
    $('.preloader').fadeOut();
    $('body').removeClass('preloader');
}, 1000); 


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const formData = new FormData(this); // Gather form data

  // Perform AJAX request
  fetch('send.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    if (data.status === 'success') {
      // Show success message
      document.querySelector('.sent-message').style.display = 'block';
      document.querySelector('.error-message').style.display = 'none';

      // Clear form fields
      document.getElementById('contactForm').reset();
    } else {
      // Show error message
      document.querySelector('.error-message').innerHTML = data.message;
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.sent-message').style.display = 'none';
    }
  })
  .catch(error => {
    // Show error message for any AJAX error
    document.querySelector('.error-message').innerHTML = 'An error occurred. Please try again.';
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.sent-message').style.display = 'none';
  });
});

