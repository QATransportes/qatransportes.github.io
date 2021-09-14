<?php

	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$formok = true;
		$errors = array();
		$name = $_POST['name'];
		$lastname = $_POST['lastname'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$tema = $_POST['tema'];
		$mensaje = $_POST['mensaje'];
		$from = 'Transportes Q&A - Página Web';
		//$to = 'igastelu@factoriamedia.com';
		$to = 'info@transportesqa.com, gustavoqa@live.com, gastelu.n.ivan@gmail.com, cotizaciones@transportesqa.com';
		$subject = 'Correo electrónico enviado desde la web';
		$body = " De: $name\n Apellidos: $lastname\n Telefonos: $phone\n E-Mail: $email\n Tema: $tema\n Mensaje:\n $mensaje";
		echo "$to, $subject, $body, $from";
		mail ($to, $subject, $body, $from);
		echo "fin";
	}

?>



