<?php
header("Access-Control-Allow-Origin: *");
session_start();
?>

<?php 
    require_once('./header.php');
?>

<body>
    <main class="contact-main">
        <div class="contact-div">
        <h1 id="contact-heading">Contact Me</h1>
            <form action="../Functions/sendEmail.php" id="contact-form" method="POST">
                    <input id="name-input" name="name" type="text" placeholder="Name">
                    <input id="email-input" name="email" type="email" placeholder="Email">
                    <textarea id="desc-input" name="description" placeholder="Your Message..."></textarea>
                    <button id="send-btn" type="submit"  name="send_email">Send Email</button> 
            </form>
        </div>
        <?php
            $to = "nyetestingsoftware@gmail.com";
            $subject = "Question Inquiry";
            $message = $_POST['name'] . " " . $_POST['description'];
            $headers = "From: " . $_POST['email'];
            mail($to, $subject, $message, $headers);
        ?>
        <div id="rotating-images">
            <h1>Pieces from the Past</h1>
            <div class="images">
                <div class="carousel" data-flickity='{ "fade":true, "imagesLoaded": true, "autoPlay": 3000, "wrapAround": true }'>
                    <div class="carousel-cell"><img class="carousel-cell-image" src="../Images/Koi.jpg"/></div>
                    <div class="carousel-cell"><img class="carousel-cell-image" src="../Images/Peacock.jpg"/></div>
                    <div class="carousel-cell"><img class="carousel-cell-image" src="../Images/Giraffe.jpg"/></div>
                    <div class="carousel-cell"><img class="carousel-cell-image" src="../Images/Goldfish.jpg"/></div>
                    <div class="carousel-cell"><img class="carousel-cell-image" src="../Images/Cherry_Blossom.jpg"/></div>
                </div>
            </div>
        </div>
    </main>
</body>
<script id="main-js" src="../JS/siteLG.js"></script>
<script src="../JS/contact-onload.js"></script>
</html>