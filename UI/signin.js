
const validate = () => {
  let el = document.getElementsByClassName("finput");
  let email = document.getElementById("email");
 
  let passWord = document.getElementById("pword");
  
  checkEmpty(el);
  emailValidation(email);

  
  
  return false;
};
 
// validation rule all fields, to check for empty inputs  and produce user feeback if seat is empty
const checkEmpty = (el) => {
  for (let i = 0; i < el.length; i++) {
  el[i].value !== ''
  ? document.getElementById("head").innerHTML = "<div style='display:none;'></div>"
  : document.getElementById("head").innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*All fields are mandatory</div>";
}
}

// validation rule for email.

const emailValidation = (email) => {
  var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   email.value.match(emailExp)
  ? document.getElementById('r3').innerHTML = "<div style='display:none;'></div>"
  : document.getElementById('r3').innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*Sorry, email is not valid</div>";
} 
