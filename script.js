// const form = document.querySelector('form');
// const firstName = document.querySelector('#firstName');
// const lastName = document.querySelector('#lastName');
// const email = document.querySelector('#email');
// const dob = document.querySelector('#dob');
// const password = document.querySelector('#password');
// const confirmPassword = document.querySelector('#confirmPassword');
// const msg = document.querySelector('.msg');

// form.addEventListener('submit', submitForm);

// function submitForm(e) {
//     e.preventDefault();

//     //  lastName.value === '' email.value === '' dob.value === ''
//     if (firstName.value === '' || lastName.value === '' || email.value === '' || dob.value === '') {
//         if (password.value === confirmPassword.value) {
//             msg.innerHTML = 'incorrect Password';
//             window.alert('incorrect Password')
//         }
//         else {
//             msg.innerHTML = 'please enter all field';
//             window.alert('please enter all field')
//         }

//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         console.log('form submitted successfully')
//         window.alert('Form Submitted Successfully')
//         firstName.value && lastName.value && email.value && dob.value === '';
//     }


// }
const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const dob = document.querySelector('#dob');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const termsCheckbox = document.querySelector('#terms');
const RememberMe = document.querySelector('#rememberMe');
const msg = document.querySelector('.msg');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Check if all required fields are filled
    if (
        firstName.value === '' ||
        lastName.value === '' ||
        email.value === '' ||
        dob.value === '' ||
        password.value === '' ||
        confirmPassword.value === ''
    ) {
        msg.textContent = 'Please fill in all fields';
        msg.style.color = 'red';
        window.alert('Please fill in all fields');
    } else if (password.value !== confirmPassword.value) {
        // Check if passwords match
        msg.textContent = 'Passwords do not match';
        msg.style.color = 'red';
        window.alert('Passwords do not match');
    } else if (!termsCheckbox.checked) {
        // Check if the checkbox is checked
        msg.textContent = 'You must agree to the terms and conditions';
        msg.style.color = 'red';
        window.alert('You must agree to the terms and conditions');
    } else if (!RememberMe.checked) {
        // Check if the checkbox is checked
        msg.textContent = 'You must agree to the terms and conditions';
        msg.style.color = 'red';
        window.alert('You must agree to the terms and conditions');
    } else {
        // Success: Form submission
        msg.textContent = 'Form submitted successfully!';
        msg.style.color = 'green';
        window.alert('Form submitted successfully!');

        // Reset form fields
        form.reset();
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
        msg.textContent = '';
    }, 3000);
}
