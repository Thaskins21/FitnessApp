function appLogin(){
var loginInput = document.getElementById("loginInput").value;
var passwordInput = document.getElementById("passwordInput").value;

if(loginInput =="TestUser" && passwordInput == "Password1"){
  window.location.replace("HTML/optionSelection.html")
}
else if(loginInput == "" && passwordInput == ""){
  window.alert("Please input your username and password")
}
else if(loginInput =="TestUser" && passwordInput !== "Password1" || loginInput =="TestUser" && passwordInput !== ""){
  window.alert("Please input a valid password")
}
else if(loginInput !=="TestUser" && passwordInput == "Password1" || loginInput =="" && passwordInput == "Password1"){
  window.alert("Please input a valid username")
}
}

function signUp(){
  window.location.replace("HTML/signUp.html")
}
