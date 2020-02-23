function validateForm(event) {
	event.preventDefault();
	var firstName = document.getElementById('#firstName');
	var lastName = document.getElementById('#lastName');

	if (firstName.value === null || firstName.value === '') {
		alert('Please enter your first name');
		return false;
	}
	else if (lastName.value == null || lastName == '') {
		alert('Please enter your last name');
		return false;
	}
}

const form = document.querySelector('#contactForm');

form.addEventListener('submit', validationForm);

function validateForm(event) {
	event.preventDefault();

	const firstName = document.querySelector('#firstname');
	const firstNameError = document.querySelector('#firstNameError');
	const firstNameValue = firstName.value;

	if (checkinputlength(firstNameValue) === true) {
		alert('Please enter your first name');
	}

	const lastName = document.querySelector('#lastname');
	const lastNameError = document.querySelector('#lastNameError');
	const lastNameValue = lastName.value;

	if (checkinputlength(lasttNameValue) === true) {
		lastNameError.message('Submitted');
	}

	function checkinputlength(value) {
		const trimmedValue = value.trim();

		if (trimmedValue.length > 0) {
			return true;
		}
		else {
			return false;
		}
	}

	const email = document.querySelector('email');
	const emailError = document.querySelector('emailError');
	const invalidEmailError = document.querySelector('#invalidEmailError');

	const emailValue = email.value;

	if (checkinputlength(emailValue) === true) {
	}
	else {
		alert('Please enter your emaile adresse.');
	}

	if (validateEmail(emailValue) === true) {
	}
	else {
		alert('Please enter a valid email adresse.');
	}
}

function checkInputLength(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length > 0) {
		return true;
	}
	else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	return regEx.test(email);
}
