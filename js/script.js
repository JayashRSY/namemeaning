
var body_ = document.getElementById("body1");



$("#form1").submit(function(e){

e.preventDefault();
var name1 = document.getElementById("input1").value;
var name2 = name1.toLowerCase();
var len_ = name1.length;
var name4 = "";

if (len_ < 2){return false}
    
for (i = 0; i < len_; i++){
name3 = name2.charAt(i);

switch(name3) {
case "a":
name4 = "Amazing"
break;
case "b":
name4 = "Brilliant"
break;
case "c":
name4 = "Cute"
break;
case "d":
name4 = "Dazzling"
break;
case "e":
name4 = "Elegant"
break;
case "f":
name4 = "Fabulous"
break;
case "g":
name4 = "Gorgeous"
break;
case "h":
name4 = "Healthy"
break;
case "i":
name4 = "Impressive"
break;
case "j":
name4 = "Joyful"
break;
case "k":
name4 = "Kind"
break;
case "l":
name4 = "Lucky"
break;
case "m":
name4 = "Marvelous"
break; 
case "n": 
name4 = "Nice" 
break; 
case "o": 
name4 = "Open-Minded" 
break; 
case "p": 
name4 = "Pleasant" 
break; 
case "q": 
name4 = "Quality Person" 
break; 
case "r": 
name4 = "Respectful" 
break; 
case "s": 
name4 = "Splendid" 
break; 
case "t": 
name4 = "Trustworthy" 
break; 
case "u": 
name4 = "Uncompromising " 
break; 
case "v": 
name4 = "Valuable" 
break; 
case "w": 
name4 = "Wonderful" 
break; 
case "x": 
name4 = "Xenial" 
break; 
case "y": 
name4 = "Youthful" 
break; 
case "z": 
name4 = "Zealous" 
break; 
default:
name3 = "";
name1 = "";
name4 = ""
}

document.getElementById("div22").innerHTML += "<span class='name3'>"+name3+"</span><span class='name4'> - "+name4+"</span><br>";
}

var letters = /^[A-Za-z]+$/;
if(name1.match(letters))
{
document.getElementById("alert_").style.display = "none";
document.getElementById("div1").style.display = "none";
document.getElementById("div2").style.display = "block";
document.getElementById("div2").innerHTML += "<br>Thank you "+name1+" for Entering your Amazing Name 🤗";
} else {
document.getElementById("div22").innerHTML = "";
document.getElementById("alert_").style.display = "block";
return false;
}

});

