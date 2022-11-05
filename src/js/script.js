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


//Checkboxes
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const checkboxesArr = [uppercase, lowercase, numbers, symbols];

const passwordArray = [
    {
        name: 'uppercase',
        status: 1,
        characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
    {
        name: 'lowercase',
        status: 1,
        characters: 'abcdefghijklmnopqrstuvwxyz',
    },
    {
        name: 'numbers',
        status: 1,
        characters: '0123456789',
    },
    {
        name: 'symbols',
        status: 0,
        characters: '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/',
    }
];

const handleCheckbox = (e) => {
    if (e.target.checked) {
        passwordArray.filter(x => x.name === e.target.id)[0].status = 1;

    } else {
        passwordArray.filter(x => x.name === e.target.id)[0].status = 0;
    }
}

checkboxesArr.forEach(el => el.addEventListener('change', handleCheckbox))
