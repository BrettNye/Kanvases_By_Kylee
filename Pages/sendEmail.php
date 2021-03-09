<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once ("../PHPMailer/PHPMailer.php");
require_once ("../PHPMailer/SMTP.php");
require_once ("../PHPMailer/Exception.php");

$mail = new PHPMailer(true);
$alert = "";

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $desc = $_POST['description'];

    try{
        $mail->isSMTP();

        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'nyetestingsoftware@gmail.com';
        $mail->Password = '123456789ABCDEF';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = '587';

        $mail->setFrom("nyetestingsoftware@gmail.com", $name);
        $mail->addAddress("nyetestingsoftware@gmail.com", 'Brett Nye');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<table><tr><td>Name:</td><td> $name</td></tr>
                        <tr><td>Email: </td><td> $email </td></tr></table><hr style='width:50%; margin-left:0;'>
                        <p>$desc</p>";
        $alert = '<div class="alert-success">
                <span>Message Sent! Thank you for contacting us.</span>
                </div>';
    } catch (Exception $e){
        $alert = '<div class="alert-error">
                <span>' . $e->getMessage() . '</span>
                </div>';
    }

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    } else{
        $status = "failed";
        $response = "Something is wrong: <br> " . $mail->ErrorInfo;
    }
}