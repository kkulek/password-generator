// Copy password
const btnCopyPassword = document.getElementById('copy');
const password = document.getElementById('password');

//starting password value:
password.innerText = 'PTx1f5DaFX';

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
};

checkboxesArr.forEach(el => el.addEventListener('change', handleCheckbox));


//Generate password
const generate = document.getElementById('generate');

const passwordValidation = () => {
    let final = 0;
    passwordArray.filter(x => x.status).map(x => final += x.status);
    printStrength(final);

    return final < 1 ? console.log('error') : handleGeneratePassword();
}

const handleGeneratePassword = () => {
    let passwordCharacters = [];
    const charTypes = passwordArray.filter(x => x.status === 1);

    let i = 0;

    while (i < (passwordRange.value)) {
        charTypes.forEach(type => {
            const randomNum = Math.floor(Math.random() * type.characters.length);
            const randomChar = type.characters.charAt(randomNum);
            passwordCharacters.push(randomChar);
            i++;
        });
    }

    if (passwordCharacters.length > passwordRange.value) {
        const toCut = passwordCharacters.length - passwordRange.value;
        passwordCharacters.splice(toCut * -1);
    }

    return shuffleArray(passwordCharacters);
}

// The Fisher-Yates algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    const passwordString = array.join('');
    return printPassword(passwordString);
}

const printPassword = (string) => password.innerText = string;

generate.addEventListener('click', passwordValidation);


//Password strength cases:

//Strong:
// 1. >2 char types && >12 characters
// 2. >3 char types && >9 characters

//Medium:
// 1. >2 char types && >7 characters
// 2. >1 char types && >12 characters

//Weak:
//else

//Too weak:
//1. <6 characters
//2. <2 char type
//3. <8 characters && <3 char types

const strength = document.getElementById('strength');

const printStrength = (statusSum) => {
    let length = passwordRange.value;

    if (statusSum < 2 || length < 6 || (statusSum < 3 && length < 8)) {
        strength.innerText = 'too weak'
    } else if ((statusSum > 2 && length > 12) || (statusSum > 3 && length > 9)) {
        strength.innerText = 'strong'
    } else if ((statusSum > 2 && length > 7) || (statusSum > 1 && length > 12)) {
        strength.innerText = 'medium'
    } else {
        strength.innerText = 'weak'
    }
}