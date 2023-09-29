// To fetch and populate the select input with countries
const countrySelect = document.getElementById('country-select');

// function to fetch list of countries
function fetchCountries() {
    const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Australia',
        'Canada',
        'Nigeria',
        'New Zealand',
        'Singapore',
        'United States',
    ]

    return countries;
}

// function to populate the select input
function populateCountries () {
    const countries = fetchCountries();
    const select = countrySelect;

    countries.forEach((country) => {
        const option = document.createElement('option');
        option.text = country;
        option.value = country.toLowerCase();
        select.appendChild(option)
    })
}

populateCountries();

// Get the elements for form validation
// Get the form element by its Id
const form = document.getElementById('form');

// Get the form inputs by their Ids
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const zipCode = document.getElementById('zip');
const cardFirstName = document.getElementById('card-first-name');
const cardLastName = document.getElementById('card-last-name');
const cardNum = document.getElementById('card-number');
const secCode = document.getElementById('sec-code');
const expiry = document.getElementById('expiry');

// Get the small element for error message
const firstNameError = document.querySelector('#first-name-formControl small');
const lastNameError = document.querySelector('#last-name-formControl small');
const emailError = document.querySelector('#email-formControl small');
const streetError = document.querySelector('#street-formControl small');
const cityError = document.querySelector('#city-formControl small');
const zipError = document.querySelector('#zip-formControl small');
const cardFirstError = document.querySelector('#card-first-name-formControl small');
const cardLastError = document.querySelector('#card-last-name-formControl small');
const cardNumError = document.querySelector('#card-num-formControl small');
const secCodeError = document.querySelector('#sec-code-formControl small');
const expiryError = document.querySelector('#expiry-formControl small');



// Add Eventlistener to form
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();

    UltTotalPriceQty();
})

// function to validate inputs
function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const streetValue = street.value.trim();
    const cityValue = city.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const cardFirstNameValue = cardFirstName.value.trim();
    const cardLastNameValue = cardLastName.value.trim();
    const cardNumValue = cardNum.value.trim();
    const secCodeValue = secCode.value.trim();
    const expiryValue = expiry.value.trim();

    // Error texts inner html
    const errorArrayMsg = ['Enter your first name','Enter your last name', 'Email can not be blank', 'Enter your street', 'Enter your city', 'Enter your zip code', 'Enter the card first name', 'Enter the card last name', 'Enter the number on the card', 'Enter the 3 digit security code', 'Enter the expiry date: MM/YY']

    if (firstNameValue === '') {
        // show error message
        invalidInput(firstNameError,firstName,errorArrayMsg[0]);
    } else{
        // show success class
        validInput(firstNameError,firstName);
    }
    if (lastNameValue === '') {
        // show error message
        invalidInput(lastNameError,lastName,errorArrayMsg[1]);
    } else{
        // show success class
        validInput(lastNameError,lastName);
    }   
    if (!isValidEmail(email.value)) {
        // show error message
        invalidInput(emailError,email,errorArrayMsg[2]);
    } else{
        // show success class
        validInput(emailError,email);
    }  
     if (streetValue === '') {
        // show error message
        invalidInput(streetError,street,errorArrayMsg[3]);
    } else{
        // show success class
        validInput(streetError,street);
    }  
     if (cityValue === '') {
        // show error message
        invalidInput(cityError,city,errorArrayMsg[4]);
    } else{
        // show success class
        validInput(cityError,city);
    }  
     if (zipCodeValue === '') {
        // show error message
        invalidInput(zipError,zipCode,errorArrayMsg[5]);
    } else{
        // show success class
        validInput(zipError,zipCode);
    }  
     if (cardFirstNameValue === '') {
        // show error message
        invalidInput(cardFirstError,cardFirstName,errorArrayMsg[6]);
    } else{
        // show success class
        validInput(cardFirstError,cardFirstName);
    }  
     if (cardLastNameValue === '') {
        // show error message
        invalidInput(cardLastError,cardLastName,errorArrayMsg[7]);
    } else{
        // show success class
        validInput(cardLastError,cardLastName);
    } 
     if (cardNumValue === '') {
        // show error message
        invalidInput(cardNumError,cardNum,errorArrayMsg[8]);
    } else{
        // show success class
        validInput(cardNumError,cardNum);
    }
    if (!isValidsecCode(secCode.value)) {
        // show error message
        invalidInput(secCodeError,secCode,errorArrayMsg[9]);
    } else{
        // show success class
        validInput(secCodeError,secCode);
    }
    if (!isValidexpiry(expiry.value)) {
        // show error message
        invalidInput(expiryError,expiry,errorArrayMsg[10]);
    } else{
        // show success class
        validInput(expiryError,expiry);
    }

}

// function to show error
function invalidInput(inputError, input, message) {
    inputError.textContent = message;
    inputError.style.display = 'block';
    input.classList.add('error');
}

// function to show success
function validInput(inputError, input) {
    inputError.textContent = '';
    inputError.style.display = 'none';
    input.classList.remove('error');
    input.classList.add('success');
}

// function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// function to validate security code format
function isValidsecCode(secCode) {
    const secCodeRegex = /^[0-9]{3}$/;
    return secCodeRegex.test(secCode);
}

// function to validate card expiry date
function isValidexpiry(expiry) {
    const expiryRegex =/^(0[1-9]|1[0-2])\/\d{2}$/;
    return expiryRegex.test(expiry);
}
  
  // Get the elements to calculate the price and total price for ultimate edition
  const ultQtyInput = document.getElementById('ult-qty');
  const ultPriceOutput = document.getElementById('ult-price');
  const ultTotalpriceOutput = document.getElementById('ult-tt-price');


  function UltTotalPriceQty() {
    const total = ultQtyInput.value * 25.99;
    
    ultPriceOutput.innerHTML = total;
    ultTotalpriceOutput.innerHTML = total;

  }

  




