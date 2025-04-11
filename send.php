<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header('Content-Type: application/json'); // Set header for JSON response

$response = [];

$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 0; // Disable verbose debug output
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                       
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'kavikrish3@gmail.com'; // Your email
    $mail->Password   = 'cfuj pokx jphb ajzz'; // App password from Google                  
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;             
    $mail->Port       = 465;                                    
    $mail->setFrom('kavikrish3@gmail.com', 'Contact form');  // Your sender email and name
    $mail->addAddress('kavi_ramcha@yahoo.co.in', 'Kavitha');     // The recipient email and name

    // Set Reply-To as the sender's email and name from the form
    $mail->addReplyTo($_POST["email"], $_POST["name"]);

    // Content
    $mail->isHTML(true);                                       
    $mail->Subject = $_POST["subject"];
    
    // Construct the body including the sender's name and email
    $mail->Body = "<h3>New Contact Form Submission</h3>
                   <p><strong>Name:</strong> " . $_POST["name"] . "</p>
                   <p><strong>Email:</strong> " . $_POST["email"] . "</p>
                   <p><strong>Message:</strong><br>" . nl2br($_POST["message"]) . "</p>";

    // Send the email
    $mail->send();
    $response['status'] = 'success';
    $response['message'] = 'Message has been sent.';
} catch (Exception $e) {
    $response['status'] = 'error';
    $response['message'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

echo json_encode($response); // Return JSON response

?>
