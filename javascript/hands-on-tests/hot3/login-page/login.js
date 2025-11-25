// Get references to the input fields and the submit button
let emailAddress = document.getElementById('emailAddress');
let password = document.getElementById('password');
let form = document.getElementById('form');

// Create error message element
let errorMessage = document.createElement('p');
errorMessage.className = 'text-danger text-center'; 
errorMessage.style.display = 'none'; 

// Create success message element
let successMessage = document.createElement('p');
successMessage.className = 'text-success text-center';
successMessage.style.display = 'none'; 

//  Event listener to the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (emailAddress.value === '' || password.value === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'You seem to have forgotten your email and password.';
        document.body.appendChild(errorMessage); 
        successMessage.style.display = 'none';
    } else if (emailAddress.value === 'admin@example.com' && password.value === 'password') {
        successMessage.style.display = 'block';
        successMessage.textContent = 'Welcome back Admin!';
        document.body.appendChild(successMessage); 
        errorMessage.style.display = 'none';
    } else if (emailAddress.value !== 'admin@example.com' || password.value !== 'password') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "That email and password doesn't seem to be correct. Try again.";
        document.body.appendChild(errorMessage); 
        successMessage.style.display = 'none';
    }
})