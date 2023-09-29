// Get the form element by its Id
const form = document.getElementById('form');

// Get the form inputs by their Ids
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const queryTextarea = document.getElementById('query');

// Get the small element for error message
const emailError = document.querySelector('#form-control-email small');
const nameError = document.querySelector('#form-control-name small');
const queryError = document.querySelector('#textarea small');

const errorTexts = ['Please enter a valid email address','Name cannot be blank','Please enter your query'];

// Add an event listener to the form on submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate the email Input
    if (!isValidEmail(emailInput.value)) {
       invalid(emailError,emailInput,errorTexts[0]);
    } else {
        valid(emailError,emailInput);
    }

     // Validate the name Input
     if (nameInput.value.trim() === '') {
        invalid(nameError,nameInput,errorTexts[1]);
       
    } else {
        valid(nameError,nameInput);
       
    }

    // Validate the query textarea
    if (queryTextarea.value.trim() === '') {
        invalid(queryError,queryTextarea,errorTexts[2]);

    } else {
        valid(queryError,queryTextarea);
       
    }
});

// function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// function to show error
function invalid(inputError, input, message) {
    inputError.textContent = message;
    inputError.style.display = 'block';
    input.classList.add('error');
}

// function to show success
function valid(inputError, input) {
    inputError.textContent = '';
    inputError.style.display = 'none';
    input.classList.remove('error');
    input.classList.add('success');
}