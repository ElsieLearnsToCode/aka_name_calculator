//prevent page from reloading when user submits info
function formSubmit(){
    let date = document.getElementById("date").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let gender = document.getElementById("gender").value
    let CC = parseInt(year.slice(0,2));
    let YY = parseInt(year.substr(2,4));
    let MM = parseInt(month);
    let DD = parseInt(date);
    let dayOfWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    let femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]
    let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

// validating user input
if (date < 1 || date > 31) {
    alert("Enter a valid date");
}
 else {
   alert ("Date Accepted");
}

//validating month
if (month < 1 || month > 31) {
    alert("Enter a valid month");
}
 else {
 alert ("Month Accepted");
}


if (d === 0 && gender === "male") {
  alert("Your name is" + "" + maleNames[0] + "" + "because you were born on a" + "dayOfWeek[0]")
}
else if (d ===0 && gender === "male") {
    alert("Your name is" + "" + femaleNames[0] + "" + "because you were born on a" + "dayOfWeek[0]")
}

else {
    alert ("enter valid details")
}

}














