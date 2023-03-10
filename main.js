
function openNavBar() {
  document.getElementById("mynavbar").style.width = "100%"

}

function closeNavBar() {
  document.getElementById("mynavbar").style.width = "0"
}

function validation() {
  var name = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var errorMessages = document.getElementById("error");

  if (name.length < 4 ) {
    errorMessages.innerHTML="Name must be at least 4 characters long";
    return false;
  }else if (password.length < 9) { 
    errorMessages.innerHTML="Password must be at least 9 characters long";
    return false;
  }else if (email.indexOf("@") == -1) {
    errorMessages.innerHTML="Email must contain @";
    return false;
  }else {
    errorMessages.innerHTML="You information has been submitted";
    return true;
  }
  }


