//prevent page from reloading when user submits info
function formSubmit(){

let date = document.getElementById("date").value
let month = document.getElementById("month").value
let year = document.getElementById("year").value
let gender = document.getElementById("gender").value
let CC = parseInt(year.slice(0,2));
let YY = parseInt(year.slice(-2));
let MM = parseInt(month);
let DD = parseInt(date);
let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]
}


//validating date input

// if (date < 1 || date > 31) {
//     alert("Enter a valid date");
// }
// else {
//     alert ("Date Accepted");
// }

// //validating month
// if (month < 1 || month > 31) {
//     alert("Enter a valid month");
// }
// else {
//     alert ("Month Accepted");
// }

function validateMonth () {
    if (month < 1 || month > 12) {
      return false;
    } else {
      return true;
    }
  }

function validateDay () {
     if (date < 1 || dayOfBirth > 30){
      return false;
    } else {
      return true;
    }
  }











