//Defining function
function formValidation() {
  var uid = document.loanform.firstid;
  var tel = document.loanform.tele;
  var job = document.loanform.job;
  var telecode = document.loanform.code;
var origin = document.loanform.origin;
  if (firstid_validation(uid, 3, 20)) {
  }
  if (allnumeric(tel)) {
  }
  if (allLetter(job)){
  }
  if (numeric(telecode)){
  }
  if (countryselect(origin)){
  }
  return false;
}

//Defining method firstid_valiadtion with parameters
function firstid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert("Firstname has issues" + " " + mx + " to " + my);
    uid.style.border = '3px solid red';
    uid.focus();
    return false;
  }
  return true;
}

//Defining method allnumeric with parameter
function allnumeric(tele) {
  var numbers = /^[0-9]+$/;
  if (tele.value.match(numbers)) {
    return true;
  } else {
    alert("Telephone code must be numeric");
    return false;
  }
}

//Defining method allLetter with parameter job
function allLetter(job){
    var letters = /^[A-Za-z]+$/;
    if (job.value.match(letters)){
return true;
    } else {
        alert('Occupation must be alphabet characters');
        return false;
    }
}

//Defining method numeric with parameter code
function numeric(code){
var num = /^\d{10}$/;
if (code.value.match(num)){
    return true;
} else {
    alert('Digits must be 10 digits only');
    return false;
}

}

//Defining method countryselect with parameter origin
function countryselect(origin){
    if (origin.value == 'Default'){
        alert('Please select your nationality');
        return false;
    } else {
      return true;
    }
   
}