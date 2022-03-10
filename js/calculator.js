// declare variables used in the day formula
function calculate() {
    let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    alert (d)
}


//create arrays to hold relevant data
var day = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var Gender = ["Female", "Male"]

// get date of birth and convert it into an integer
function birthDate(){
    var day=document.getElementById("DD").value;
     var DD=parseInt(DD);
}

// get birth month and convert it into an integer
function birthMonth(){
    var day=document.getElementById("MM").value;
     var DD=parseInt(DD);
}

// get year and convert it into an integer
function birthYear(){
    var day=document.getElementById("YYYY").value;
     var DD=parseInt(YYYY);
}

