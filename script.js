// Sticky Navbar
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#full-screen-image form");
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      clearErrors();

      let isValid = true;
      const nameInput = form.querySelector('input[type="text"]');
      const phoneInput = form.querySelector('input[type="number"]');
      const emailInput = form.querySelector('input[type="email"]');
      const additionalNotesInput = form.querySelector('input[type="text"]:nth-child(4)');

      if (!nameInput.value.trim()) {
          isValid = false;
          showError(nameInput, "Name is required.");
      }

      if (!phoneInput.value.trim() || !/^\d+$/.test(phoneInput.value.trim())) {
          isValid = false;
          showError(phoneInput, "Valid phone number is required.");
      }

      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
          isValid = false;
          showError(emailInput, "Valid email is required.");
      }

      if (!additionalNotesInput.value.trim()) {
          isValid = false;
          showError(additionalNotesInput, "Additional notes are required.");
      }

      if (isValid) {
          form.submit();
      }
  });

  function showError(input, message) {
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.innerText = message;
      input.parentElement.insertBefore(errorElement, input.nextSibling);
  }

  function clearErrors() {
      const errors = document.querySelectorAll(".error-message");
      errors.forEach(error => error.remove());
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});

