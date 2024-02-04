const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyIcon = document.getElementById("copy");

const lenght_of_password = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacter = "~!@#$%^&*?<>-_()[]{}/=";

const allChars = upperCase + lowerCase + number + specialCharacter;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password +=
    specialCharacter[Math.floor(Math.random() * specialCharacter.length)];

  while (lenght_of_password > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

button.addEventListener("click", () => {
  createPassword();
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

copyIcon.addEventListener("click", () => {
  copyPassword();
  alert("Copied Password Successfully!");
});
