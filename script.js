const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const dob = document.querySelector('#dob');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const msg = document.querySelector('.msg');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //  lastName.value === '' email.value === '' dob.value === ''
    if (firstName.value === '' || lastName.value === '' || email.value === '' || dob.value === '') {
        if (password.value === !confirmPassword.value) {
            msg.innerHTML = 'incorrect Password';
            window.alert('incorrect Password')
        }
        else {
            msg.innerHTML = 'please enter all field';
            window.alert('please enter all field')
        }

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('form submitted successfully')
        window.alert('Form Submitted Successfully')
        firstName.value && lastName.value && email.value && dob.value === '';
    }


}