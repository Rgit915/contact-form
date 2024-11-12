document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Track overall form validity
    let isValid = true;

    // Validation functions for each field
    function validateFirstName() {
      const firstName = document.getElementById("first-name");
      const firstNameError = document.getElementById("first-name-error");
      if (!firstName.value.trim()) {
        firstName.classList.add("error");
        firstNameError.style.display = "block";
        isValid = false;
      } else {
        firstName.classList.remove("error");
        firstNameError.style.display = "none";
      }
    }

    function validateLastName() {
      const lastName = document.getElementById("last-name");
      const lastNameError = document.getElementById("last-name-error");
      if (!lastName.value.trim()) {
        lastName.classList.add("error");
        lastNameError.style.display = "block";
        isValid = false;
      } else {
        lastName.classList.remove("error");
        lastNameError.style.display = "none";
      }
    }

    function validateEmail() {
      const email = document.getElementById("email-address");
      const emailError = document.getElementById("email-error");
      if (!email.value.trim() || !email.validity.valid) {
        email.classList.add("error");
        emailError.style.display = "block";
        isValid = false;
      } else {
        email.classList.remove("error");
        emailError.style.display = "none";
      }
    }

    function validateQueryType() {
      const queryOptions = document.getElementsByName("query-type");
      const queryError = document.getElementById("query-error");
      const querySelected = Array.from(queryOptions).some(option => option.checked);
      if (!querySelected) {
        queryError.style.display = "block";
        isValid = false;
      } else {
        queryError.style.display = "none";
      }
    }

    function validateMessage() {
      const message = document.getElementById("message");
      const messageError = document.getElementById("message-error");
      if (!message.value.trim()) {
        message.classList.add("error");
        messageError.style.display = "block";
        isValid = false;
      } else {
        message.classList.remove("error");
        messageError.style.display = "none";
      }
    }

    function validateConsent() {
      const consent = document.getElementById("terms-conditions");
      const consentError = document.getElementById("consent-error");
      if (!consent.checked) {
        consentError.style.display = "block";
        isValid = false;
      } else {
        consentError.style.display = "none";
      }
    }

    // Call each validation function
    validateFirstName();
    validateLastName();
    validateEmail();
    validateQueryType();
    validateMessage();
    validateConsent();

    // If all validations pass, submit the form
    if (isValid) {
      document.getElementById("success-message").style.display = "block";
      this.reset();
    }
  });
});
