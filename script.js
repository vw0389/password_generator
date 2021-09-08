// Assignment code here


function getInput() {
    var length = parseInt(prompt("Please enter a password length between 8 and 128 characters.", "16"));
    var lowercase = confirm("Would you like lowercase alphabet characters?");
    var uppercase = confirm("Would you like uppercase alphabet characters?");;
    var numeric = confirm("Would you like numeric characters");
    var special = confirm("Would you like special characters");
    if (!validateInput(length, lowercase, uppercase, numeric, special)) {
        alert("Error occured. Aborting");
        throw new Error("Something went badly wrong!");
    } else {
        var returning = [];
        returning.push(length);
        returning.push(lowercase);
        returning.push(uppercase);
        returning.push(numeric);
        returning.push(special);
        return returning;
    }
}

function validateInput(length, lowercase, uppercase, numeric, special) {
    if (length === null || isNaN(length)) {
        alert("Please enter a password length");
        return false;
    }
    if (length < 8) {
        alert("Length of the password is too short");
        return false;
    }
    if (length > 128) {
        alert("Length of the password is too long");
        return false;
    }

    if (!lowercase && !uppercase && !numeric && !special) {
        alert("There is no characterset to work with!");
        return false;
    }
    return true;
}

function generatePassword() {
    var arrayInputs = getInput();
    let canidates = [];
    if (lowercase || uppercase) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        if (lowercase) {
            for (let i = 0; i < alphabet.length; i++) {
                canidates.push(alphabet[i]);
            }
        }
        if (uppercase) {
            for (let i = 0; i < alphabet.length; i++) {
                canidates.push(alphabet[i].toUpperCase());
            }

        }
    }
    if (numeric) {
        for (let i = 0; i < 10; i++) {
            canidates.push(i);
        }
    }
    if (special) {
        let specialCharacters = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~".split('');
        for (let i = 0; i < specialCharacters.length; i++) {
            canidates.push(specialCharacters[i]);
        }
    }
    var password = ""
    for (let i = 0; i < length; i++) {
        let newChar = canidates[Math.floor(Math.random() * canidates.length)];
        password = password + newChar;
    }
    return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);