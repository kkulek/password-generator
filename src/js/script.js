// Copy password
const btnCopyPassword = document.getElementById('copy');
const password = document.getElementById('password');

const handleCopy = () => {
    navigator.clipboard.writeText(password.innerText);
}

btnCopyPassword.addEventListener('click', handleCopy);

