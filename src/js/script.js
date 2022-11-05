// Copy password
const btnCopyPassword = document.getElementById('copy');
const password = document.getElementById('password');

const handleCopy = () => {
    navigator.clipboard.writeText(password.innerText);
}

btnCopyPassword.addEventListener('click', handleCopy);


// Display password length
const passwordRange = document.getElementById('length-range');
const passwordLength = document.getElementById('password-length');

passwordLength.innerText = passwordRange.value;

const handleRange = () => {
    passwordLength.innerText = passwordRange.value;
}

passwordRange.addEventListener('input', handleRange);