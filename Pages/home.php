<?php
header("Access-Control-Allow-Origin: *");
?>


<?php
    require_once('./header.php');
?>

<body>
	<main>
        <div id="info-strip">
            <div id="call-to-action">
                <p>Contact me for a quote!!</p>
                <a id="contact-btn" class="btn btn-default">Contact Me</a>
            </div>
        </div>
    </main>
    <a id="page-link" href="#about-me">
        <footer>
            <div>
                <i class="fas fa-angle-down"></i>
            </div>
        </footer>
    </a>
    <section class="main" id="about-me">
        <a id="page-link-two" href="#home">
            <div class="home-link">
                <i class="fas fa-angle-up"></i>
            </div>
        </a>
        <div class="main-box">
            <div id=me-info>
                <h2>About Me!!</h2>
                <hr>
                <p>
                    adasdfasdfadjlsk;fl;jasd;lfjkals;dkjf;aksdjf;lkasdjf;lkasdjf;akjsdf
                    asldkjf;lasdkjf;lasjkdf;lkjasd;lfja;sldkjf;lasdkjf;lalskdjf;jkasdf
                    asdl;'kf;asdlkjf;laksjd;lfjasd;ljf;lasdk j;lasdjf ;lasdkjf;laskjd'
                </p>
            </div>
        </div>
    <div class="img-box">
        <img id="profile-pic" src="../Images/profile.jpg" alt="Kylee's Face">
    </div>
    </section>
</body>
<script src="../JS/siteLG.js"></script>
<script src="../JS/onload.js"></script>
</html>