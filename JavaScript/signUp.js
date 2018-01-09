var signUpDetails = Array();

function signUp(){
  var firstName = document.getElementById('firstNameInput').value;
  var lastName = document.getElementById('surnameInput').value;
  var dateOfBirth = document.getElementById('dateOfBirthInput').value;
  var usernameInput = document.getElementById('usernameInput').value;
  var passwordInput = document.getElementById('passwordSignUpInput').value;

  signUpDetails[0] = firstName;
  signUpDetails[1] = lastName;
  signUpDetails[2] = dateOfBirth;
  signUpDetails[3] = usernameInput;
  signUpDetails[4] = passwordInput;

  if(signUpDetails[0] == "" || signUpDetails[1] == "" || signUpDetails[2] == "" || signUpDetails[3] == "" || signUpDetails[4] == ""){
    alert("Please make sure all fields are completed")
  }
  else if (signUpDetails[0] == "Tyler" || signUpDetails[1] == "Haskins" || signUpDetails[2] == "20-05-1997" || signUpDetails[3] == "TheHaskins21" || signUpDetails[4] == "Password1"){
    alert("Account Successfully Created")
    window.location.replace("../HTML/optionSelection.html")
  }

}

function returnToLogin(){
  window.location.replace("../index.html")
}
