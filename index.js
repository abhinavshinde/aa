var password = "12345";

function passcheck() {

if(document.getElementById('abhikanksha').value != password) {
alert('Wrong Password, Try Again.');
return false;
}
  
if(document.getElementById('abhikanksha').value == password) {
alert('Correct Password. Cleck OK to enter Webpage.'); 
}
}
