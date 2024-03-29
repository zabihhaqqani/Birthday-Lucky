const date = document.querySelector(".date");
const luckyNumber = document.querySelector(".lucky-number");
const button = document.querySelector(".check");
const message = document.querySelector(".msg");

button.addEventListener("click", function () {
  if (luckyNumber.value === "" || date.value === "") {
    message.innerText = "Please enter all the fields";
  } else if (luckyNumber.value < 1) {
    message.innerText = "Please enter a proper value!!!!";
  } else {
    let dob = date.value.replaceAll("-", "");
    let sum = 0;

    for (let i = 0; i < dob.length; i++) {
      sum = sum + Number(dob.charAt(i));
    }

    if (sum % luckyNumber.value === 0) {
      message.innerText = "Yay your birthday is lucky 🎂";
    } else {
      message.innerText = "Sorry, your birthday is not lucky ☹️";
    }
  }
});
