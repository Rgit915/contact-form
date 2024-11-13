# Frontend Mentor - Contact form
This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

![Desktop design](./design/desktop-preview.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow


### What I learned

In this challenge, I developed and implemented a fully functional form with validation for each input field.

### Key Learnings

### 1. DOM Manipulation and Event Handling
   - **DOMContentLoaded**: Learned to initialize code once the DOM is fully loaded, ensuring all elements are available for manipulation.
   - **Event Listeners**: Used `input`, `change`, and `submit` event listeners to handle user interactions dynamically.
     - **Clearing Errors on Input**: Attached event listeners to each form field to remove error messages and styles as soon as the user starts typing or makes changes, improving usability.
   - **Preventing Default Actions**: Used `event.preventDefault()` in the `submit` event to control the form submission flow manually.

### 2. Form Validation
   - **Field-Level Validation**: Created individual validation functions for each field, checking for required inputs, email format, and checkbox selection.
   - **Centralized Error Handling**: Created reusable validation and error handling functions to improve code maintainability and reduce repetition.
   - **Radio Button Validation**: Used `.some()` to check if at least one radio button is selected, which is crucial when working with multiple choice options.
   - **Checkbox Validation**: Ensured a checkbox was checked before form submission, handling required user agreements.

### 3. User Feedback and Error Display
   - **Dynamic Error Messages**: Displayed and hid error messages based on field validity, providing real-time feedback for users as they interact with the form.
   - **Success Message Display**: Implemented a success message that appears only when the form is valid and submitted, enhancing user experience.
   - **Resetting Success Message**: Ensured the success message box disappears if the user clicks submit again, adding to the form’s responsiveness and clarity.

## Challenges and Solutions

### Displaying and Hiding Error Messages
- **Challenge**: Making error messages disappear only when the user interacts with the specific field.
- **Solution**: Added `input` and `change` event listeners for each field to clear errors as soon as users begin typing, enhancing UX.

### Success Message Visibility
- **Challenge**: Ensuring that the success message hides on subsequent submissions if the form is not valid.
- **Solution**: Added a line to hide the success message box at the start of the `submit` event listener, ensuring it only reappears when validations are successful.

### Useful Resources
- [MDN Web Docs Form Validation ](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Covers form validation basics, including HTML5 built-in validation and custom validation with JavaScript.


## Author

- GitHub - [Rgit915](https://github.com/Rgit915)
- Frontend Mentor - [@Rgit915](https://www.frontendmentor.io/profile/Rgit915)
