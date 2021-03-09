<?php
header("Access-Control-Allow-Origin: *");
session_start();
include 'sendEmail.php';
?>

<?php 
    require_once('./header.php');
?>

<body>
    <main class="contact-main">
        <div class="contact-div">
        <h1 id="contact-heading">Contact Me</h1>
            <form id="contact-form" method="POST">
                    <input id="name-input" name="name" type="text" placeholder="Name">
                    <input id="email-input" class="form-item" name="email" type="email" placeholder="Email">
                    <select name="subject" class="form-item" id="subject-input">
                        <option value="Custom Artwork">Custom Artwork</option>
                        <option value="Customer Service Question">Questions about my order</option>
                        <option value="Other Questions">Other Questions</option>
                    </select>
                    <textarea id="desc-input" class="form-item" name="description" placeholder="Your Message..."></textarea>
                    <button id="send-btn" class="form-item" type="submit" name="submit">Send Email</button> 
            </form>
            <?php echo $alert; ?>
        </div>
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
    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>

<script type="text/javascript">
    if(window.history.replaceState){
        window.history.replaceState(null, null, window.location.href);
    }
</script>
</body>
<script id="main-js" src="../JS/siteLG.js"></script>
<script src="../JS/contact-onload.js"></script>
</html>