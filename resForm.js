var resForm = document.getElementById('resForm');


function nameValidate() {
  var date = document.getElementById("dob").value;
  var time = document.getElementById("time").value;
  date = date ," ", time;
  var enteredDate = new Date(date);
  var currentDate = new Date();
  console.log("user : ",enteredDate);
  console.log("now :",currentDate);

  if (enteredDate < currentDate) {
    failAlert("Reservations must be made at least one day before.");

  } else {
    passAlert('Reservation is successfully Completed!');
  }
}
function passAlert(msg)
{
  var alertBox = document.querySelector("#alert-box");
  alertBox.classList.replace('alert-warning','alert-success');
  alertBox.classList.replace('alert-danger','alert-success');
  alertBox.firstElementChild.innerHTML=msg;
  alertBox.classList.remove("d-none");
}
function failAlert(msg)
{
  var alertBox = document.querySelector("#alert-box");
  alertBox.classList.replace('alert-warning','alert-danger');
  alertBox.classList.replace('alert-success','alert-danger');
  alertBox.firstElementChild.innerHTML=msg;
  alertBox.classList.remove("d-none");
}
