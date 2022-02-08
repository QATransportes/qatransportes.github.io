// validate contact form
$(function () {
  $("#contact").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      lastname: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        minlength: 7,
      },
      email: {
        required: true,
        email: true,
      },
      tema: {
        required: true,
      },
      mensaje: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Oh vamos, Nescesitamos tu nombre.",
        minlength: "Tu nombre debe ser más de 2 caracteres.",
      },
      lastname: {
        required: "Requerimos conocerte.",
        minlength: "Tu apellido debe ser más de 2 caracteres.",
      },
      phone: {
        required: "Necesitamos tus teléfonos para contactarte.",
        minlength: "Tu número de contacto debe ser más de 6.",
      },
      email: {
        required: "Envíanos tu correo para contactarte.",
      },
      tema: {
        required: "Escribir el tema a tratar.",
      },
      mensaje: {
        required: "mmm... Escribe un mensaje para tus consultas.",
        minlength: "¿Eso es todo de verdad?",
      },
    },
    submitHandler: function (form) {
      $("#loding_form").fadeIn();
      Email.send({
        Host: "smtp.gmail.com",
        Username: "transportes.qa.of@gmail.com",
        Password: "grpmupotdxyiyzhf",
        To: ["transportes.qa.of@gmail.com", "transportfriocargoqa@gmail.com", "transportesqa.sac@hotmail.com"],
        From: "info@friofreshperu.com",
        Subject: "Formulario de contacto",
        Body:
          "Este correo fué enviado desde la pagina contactos: <br> Nombre del cliente: " +
          form.name.value +
          " " +
          form.lastname.value +
          "<br> Teléfono: " +
          form.phone.value +
          "<br> Correo electrónico: " +
          form.email.value +
          "<br> Téma: " +
          form.tema.value +
          "<br> Mensáje: " +
          form.mensaje.value,
      })
        .then((message) => {
          if (message === "OK") {
            $("#contact :input").attr("disabled", "disabled");
            $(this).find(":input").attr("disabled", "disabled");
            $(this).find(":textarea").attr("disabled", "disabled");
            $(this).find("label").css("cursor", "default");
            $("#success").fadeIn();
            $("#loding_form").fadeOut();
          } else {
            $("#error").fadeIn();
            $("#loding_form").fadeOut();
          }
        })
        .catch((err) => console.log(err));
    },
  });
});
