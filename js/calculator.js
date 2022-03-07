// declare variables used in the day formula
var CC, YY, MM, DD, d, dayValue;
var d = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

// create a function that validates user gender
function validateForm() {
    let x = document.forms["myForm"]["gender"].value;
    if (x == "") {
    alert("Gender must be filled");
          return false;
        }
      }
      