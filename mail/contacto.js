

// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 7
            },
            email: {
                required: true,
                email: true
            },
            tema: {
                required: true
            },
            mensaje: {
                required: true
            },
		 },
        messages: {
            name: {
                required: "Oh vamos, Nescesitamos tu nombre.",
                minlength: "Tu nombre debe ser más de 2 caracteres."
            },
            lastname: {
                required: "Requerimos conocerte.",
                minlength: "El nombre de tu empresa debe ser más de 2 caracteres."
            },
            phone: {
                required: "Necesitamos tus teléfonos para contactarte.",
                minlength: "Tu número de contacto debe ser más de 6."
            },
            email: {
                required: "Envíanos tu correo para contactarte."
            },
            tema: {
                required: "Escribir el tema a tratar."
            },
            mensaje: {
                required: "mmm... Escribe un mensaje para tus consultas.",
                minlength: "¿Eso es todo de verdad?"
            },
        },
        submitHandler: function(form) {
			$('#loding_form').fadeIn();
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail/form.php",
                success: function() {
					console.log('A2');
                    $('#contact :input').attr('disabled', 'disabled');
					$(this).find(':input').attr('disabled', 'disabled');
					$(this).find(':textarea').attr('disabled', 'disabled');
					$(this).find('label').css('cursor','default');
					$('#success').fadeIn();
					$('#loding_form').fadeOut();
                },
                error: function() {
					console.log('A3');
					$('#error').fadeIn();
					$('#loding_form').fadeOut();
                }
            });
        }
    });
});
	













