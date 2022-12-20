//console.log("Hello, Kanishka this side. Hope you are doing well...");
//Validation Functions
function NameValidation() {
  var name = document.myForm.name.value;
  var nameLength = name.length;
  var name_ch = name.charAt(0);
  var regex = /^[a-zA-Z\s]+$/;
  // console.log(nameLength);
  if (name == "") {
    Error("nameErr", "Please Enter the name");
    return false;
  } else if (nameLength < 3) {
    Error("nameErr", "Please Enter min 3 characters ");
    return false;
  } else if (name_ch != name_ch.toUpperCase()) {
    Error("nameErr", "Please Enter first character capital");
    return false;
  } else {
    if (regex.test(name) === false) {
      Error("nameErr", "Please Enter characters only");
      return false;
    } else {
      console.log("Name is fine");
    }
  }
}

function NumberValidation() {
  var number = document.myForm.number.value;
  var numlen = number.length;
  if (number == "") {
    Error("numberErr", "Please Enter your Contact number");
    return false;
  } else if (numlen < 10) {
    Error("nameErr", "Please Enter min 3 characters ");
    return false;
  } else {
    var regex = /^[6-9]\d{9}$/;
    if (regex.test(number) === false) {
      Error("numberErr", "Please Enter valid Indian Number");
      return false;
    } else {
      console.log("Number is fine");
    }
  }
}

function DateValidation() {
  var dob = document.myForm.DOB.value;
  console.log("DOB is:" + dob);
  if (dob == "") {
    Error("DOBErr", "Please Enter your DOB");
    return false;
  } else if (dob != "") {
    var record = dob.trim();
    var currentdate = new Date();
    var day1 = currentdate.getDate();
    var month1 = currentdate.getMonth();
    month1++;
    var year1 = currentdate.getFullYear() - 18;
    var record_day1 = record.split("-");
    var sum = record_day1[2] + "/" + record_day1[1] + "/" + record_day1[0];
    var year2 = record_day1[0];
    console.log("Entered Year:" + record_day1[0]);
    if (year1 < year2) {
      Error("DOBErr", "Please Enter the correct DOB");
      return false;
    } else {
      console.log("DOB is fine");
      return false;
    }
  }
}

function GenderValidation() {
  if (document.getElementById("male").checked) {
    var gender = document.getElementById("male").value;
    console.log(gender);
    return false;
  } else if (document.getElementById("female").checked) {
    var gender = document.getElementById("female").value;
    console.log(gender);
    return false;
  } else {
    Error("genderErr", "Please select your gender");
    return false;
  }
}

function validateForm() {
  console.log("Form validation");
  NameValidation();
  NumberValidation();
  DateValidation();
  GenderValidation();
  storeData();
  return false;
}

function Error(elementId, message) {
  document.getElementById(elementId).innerHTML = message;
}

function storeData() {}
