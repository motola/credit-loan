
const validate = () => {
  let el = document.getElementsByClassName("finput");
  let firstName = document.getElementById("firstname");
  let lastName = document.getElementById("lastname");
  let email = document.getElementById("email");
  let passWord = document.getElementById("pword");
  
  // make function call
  checkEmpty(el);
  checkAlphabet(firstName);
  checkAlphabet1(lastName);
  emailValidation(email);
  alphaNumericPassword(passWord);
  
  
  return false;
};
 
  
  
  // check for empty fields and send user feedback to input fields and cancel feed back display if response is acknowledge

      const checkEmpty = (el) => {
      for (let i = 0; i < el.length; i++) {
      el[i].value !== ''
      ? document.getElementById("head").innerHTML = "<div style='display:none;'></div>"
      : document.getElementById("head").innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*All fields are mandatory</div>";
    }
    }
  
   // send user feeback to ensure inputed text contains only alphabet on the firstname input field
 const checkAlphabet = (firstName) => {
    let alphabet = /^[a-zA-Z]+$/;
     firstName.value.match(alphabet) 
    ? document.getElementById("r1").innerHTML = "<div style='display:none;'></div>"
    : document.getElementById("r1").innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*Sorry, alphabets only</div>";
  }
  
    

// same as above but for lastname input field
const checkAlphabet1 = (lastname) => {
  let alphabet = /^[a-zA-Z]+$/;
  lastname.value.match(alphabet) 
  ? document.getElementById("r2").innerHTML = "<div style='display:none;'></div>"
  : document.getElementById("r2").innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*Sorry, alphabets only</div>";
}

// validation rule for email.

const emailValidation = (email) => {
  let emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   email.value.match(emailExp)
  ? document.getElementById('r3').innerHTML = "<div style='display:none;'></div>"
  : document.getElementById('r3').innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*Sorry, email is not valid</div>";
} 

const alphaNumericPassword = (passWord) => {
  let alphaNumeric = /^(?=.{8,})/;
  passWord.value.match(alphaNumeric)
  ? document.getElementById('r4').innerHTML = "<div style='display:none;'></div>"
  : document.getElementById('r4').innerHTML = "<div style='padding:8px; border: 2px solid red; border-radius: 6px;'>*Password must contain 8 characters</div>"


}