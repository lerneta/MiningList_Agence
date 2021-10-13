/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // selecciona los elementos aquí

  var boton = document.getElementById('envio');
  boton.onclick = function () {
    sendMail();
  }

  var boton2 = document.getElementById('envio2');
  boton2.onclick = function () {
    sendMail2();
  }
});

function sendMail() {
  var tempParams = {
    from_name: document.getElementById('user_email').value,
    to_name: "Mining Lists",
    message: document.getElementById('message').value,
    tel: document.getElementById('tel').value
  };

  emailjs.send('service_nzcv2lf', 'template_co1yp9o', tempParams)
    .then(function (res) {
      console.log("success", res.status);
    })

}


function sendMail2() {
  var tempParams = {
    from_name: document.getElementById('user_email2').value,
    to_name: "Mining Lists",
    message: document.getElementById('message2').value,
    tel: document.getElementById('tel2').value
  };

  emailjs.send('service_nzcv2lf', 'template_co1yp9o', tempParams)
    .then(function (res) {
      console.log("success", res.status);
    })

}