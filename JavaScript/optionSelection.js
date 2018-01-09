function workoutOption(){
window.location.replace("../HTML/workoutDays.html")
}

function foodOption(){
window.location.replace("../HTML/foodDays.html")
}

function signOut(){
  if (confirm("Are you sure you wish to log off?") == true){
    window.location.replace("../index.html")
  }
  else{
    window.location.replace("../HTML/optionSelection.html")
  }
}
