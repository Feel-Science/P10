//Edit password Variable To Change The Password
const password = "P10"; 

//Give website's link in this variable

const websiteLink = "https://sites.google.com/view/phys1st-sayem-sir/home";

//Confidential----Don't Change Anything or Responses will not be Recorded

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwLszDnr-keyCGTUuvGs3p4RQIoCyneG7_ilX0r4vXCC2gai9yrJ-KlqEC2n3Rrm4i1AQ/exec";
const form = document.forms["login"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const passValue = document.querySelector(".pass").value;
  if (passValue == password) {
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });
    document.querySelector(".btn").innerHTML = "Checking...";
    setTimeout(function () {
      window.location = websiteLink;
    }, 3000);
  } else {
    alert("Password Incorrect.");
  }
});
