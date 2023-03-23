// function login
function logIn(){
    var userName = document.getElementById("userName").value
    let value = document.getElementById("email").value
    let password = document.getElementById("password").value
    
    if(!value && !password){
      alert("please enter your information")
    }
    else if(value !== "admin@user.com"){
      return alert("Email is incorrect!")
    }
    else if(!password){
      return alert("Please Enter Your Password")
    }
    else if(password != 123456){ 
       alert("Password is incorrect")
       return
      
    }
    else{
      return window.location.href = "home.html"
      
    }
    
    
    
    
    
  }

  // Forgot Password function

  function forgotPass(){
    alert("Password is '123456'")
  }





//   //Home Page

// function storeInputValue(){
//   var inputValue = document.getElementById("userName").value;
//   localStorage.setItem("theValue", inputValue);

// } 
// let myValue = localStorage.getItem("theValue");

//   document.getElementById("nameHeading").innerText = "Hello " + myValue
  

 