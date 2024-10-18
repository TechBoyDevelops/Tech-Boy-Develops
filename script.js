

  function submit(){
localStorage.setItem("name",localStorage.getItem("name"))
localStorage.setItem("email",localStorage.getItem("email"))
localStorage.setItem("password" ,localStorage.getItem("password"))
// Setting up info 


if (localStorage.getItem("name") == "null") {
  const arr = new Array;
  localStorage.setItem("name", JSON.stringify(arr))
} else {}

if (localStorage.getItem("email") == "null") {
  const brr = new Array;
  localStorage.setItem("email", JSON.stringify(brr))
} else {}  

if(localStorage.getItem("password") == "null"){
  const crr = new Array;
  localStorage.setItem("password",JSON.stringify(crr))
} else {}

if(document.getElementById("name"== "name" || "email" == "email" || "password" =="password")) {
  document.getElementById("soundnoti").src = "sounds/Windows Logon.wav"
  document.getElementById("soundnoti").play()
  document.getElementById("savedprompt").style.backgroundColor = "red"
  document.getElementById("savedprompt").innerHTML ="Can't be left empty"
  document.getElementById("savedprompt").style.top = "20px"
  document.getElementById("savedpromt").style.display = "block"
  setTimeout(function(){
    document.getElementById("savedprompt").style.top = ""
  }, 4000)
} else {
  document.getElementById("soundnoti").src = "sounds/Windows Logon.wav"
  document.getElementById("soundnoti").play()
  document.getElementById("savedprompt").style.backgroundColor = "red"
  document.getElementById("savedprompt").innerHTML ="Can't be left empty"
  document.getElementById("savedprompt").style.top = "20px"
  document.getElementById("savedpromt").style.display = "block"
  window.location.href ="desktop.html"

}
    
}


// Saving logins

localStorage.setItem("name",localStorage.getItem("name"))
localStorage.setItem("passowrd",localStorage.getItem("password"))

   // '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


   document.getElementById("namevalue").innerHTML = localStorage.getItem("name")

   var passvlue = document.getElementById("password")

   document.getElementById("passwordvalue").innerHTML = passvlue.charAt(0)+passvlue.charAt(1)+"****"

    function login(){
   var_name = document.getElementById("name")
   var_password = document.getElementById("password")

   if (_name == "" || _password == "") { // when empty
    document.getElementById("soundnoti").src = "sounds/Windows Logon.wav"
    document.getElementById("soundnoti").play()
    document.getElementById("savedprompt").style.backgroundColor = "red"
    document.getElementById("savedprompt").innerHTML = "Can't be left empty"
    document.getElementById("savedprompt").style.top = "20px"
    setTimeout(function(){
    document.getElementById("savedprompt").style.top = ""
 
    }, 5000)
 } else {
  if (_name === localStorage.getItem("name") , _password === localStorage.getItem("password")) {  // When security byepassed     
    window.location.href = "Desktop.html"
    localStorage.setItem("login","yes")
 
 
    } else {  // Error or wrong pass
       document.getElementById("soundnoti").src = "sounds/Windows Logon.wav"
       document.getElementById("soundnoti").play()
       document.getElementById("savedprompt").style.backgroundColor = "red"
       document.getElementById("savedprompt").innerHTML = "incorrect Id or Password"
       document.getElementById("savedprompt").style.top = "20px"
       setTimeout(function(){
       document.getElementById("savedprompt").style.top = ""
    
       }, 5000)
    }
 
    }}



    function logout() {
      localStorage.setItem("login", "null")
      window.location.href = "login.html"
   }
   
