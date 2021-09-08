// Assignment code here
var length = prompt("Please enter a password length between 8 and 128 characters.", "16");
var lowercase = confirm("Would you like lowercase alphabet characters?");
var uppercase = confirm("Would you like uppercase alphabet characters?");;
var numeric = confirm("Would you like numeric characters");
var special = confirm("Would you like special characters");
if (!validateInput()) {
    alert("Error occured. Aborting");
    throw new Error("Something went badly wrong!");
}

function validateInput() {
    if (length < 8) {
        alert("Length of the password is too short");
        return false;
    } else if (length > 128) {
        alert("Length of the password is too long");
        return false;
    }
    if (!lowercase && !uppercase && !numeric && !special) {
        alert("There is no characterset to work with!");
        return false;
    }
    return true;
}

function generate() {
    let canidates = [];
    if (lowercase || uppercase) {
        let alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
        if (lowercase) {
            canidates = [...alphabetLower, ...canidates];
        }
        if (uppercase) {

        }
    }
    if (numeric) {

    }
    if (special) {

    }

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