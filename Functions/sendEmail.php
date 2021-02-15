<?php

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;    
use PHPMailer\PHPMailer\Exception;

echo $_POST['name'];

if(isset($_POST['name']) && isset($_POST[['email']])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "Quote Inquiry";
    $desc = $_POST['description'];

    require_once "../PHPMailer/PHPMailer.php";
    require_once "../PHPMailer/SMTP.php";
    require_once "../PHPMailer/Exception.php";
    
    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "nyetestingsoftware@gmail.com";
    $mail->Password = "123456789abcdef";
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("nyetestingsoftware@gmail.com");
    $mail->Subject = $subject;
    $mail->Body = $desc;
    $mail->send();
}