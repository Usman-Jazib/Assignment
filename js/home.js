//home Page Cities function:
var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland";
var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

//Print Cities:

function printCities() {
    document.getElementById("output").innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ")" + " " + cities[i] + "<br>"
    }
  }
  
  //Add City
  function addCity() {
    let city = document.getElementById("inPut").value;
    if (city.length < 3) {
        showToast("Enter Your City Name");
        return;
    }
    let cityFirstLetters = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase()
  
    let capitalLetters = cityFirstLetters + cityAllLetters
  
    let cityFound = false;
    for (let i = 0; i <cities.length; i++)  {
        if (cities[i] === capitalLetters) {
            cityFound = true;
            Toastify({
                text: "This city is already in the list.",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
            let html = '<span style="color: #e63946;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is already in the List"
            document.getElementById("output").innerHTML = html;
        }
    }
    if (cityFound === false) {
        cities.push(capitalLetters)
        let html = '<span style="color: #00b4d8;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is successfully added into the List"
        document.getElementById("output").innerHTML = html;
    }
  }
  


  //Clear button
  // input clear
  function clearA(){
    document.getElementById("inPut").value = ""
  }
  //output clear
  function clearOutput(){
    document.getElementById("output").innerHTML = ""
  }
  