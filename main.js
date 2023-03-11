
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
  
  function Ave() {
    var firstNumber = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
    var secondNumber = 10;
    var total = firstNumber / secondNumber;
    console.log(total);
  }
  Ave();

  function show() {
    document.getElementById("section").style.width = "100%";
  }
  function hide() {
    document.getElementById("section").style.width = "0";
  }

