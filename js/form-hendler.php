<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_form = 'info@marufahmed.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "Email ID: $visitor_email.\n".
                "Phone Number: $phone.\n".
                "Email Subject: $subject.\n".
                "Message: $message.\n";

$to = 'modelcomputer.net@gmail.com';

$headers = "From: $email_form \r\n";

$headers = "Reply-To: $visitor_email \r\n";


mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

?>