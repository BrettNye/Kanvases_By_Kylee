<?php
header("Access-Control-Allow-Origin: *");
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="utf-8">
	<title>Kanvases By Kylee - Home</title>
	<meta name="author" content="Brett Nye">
	<meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/fontawesome-free-5.15.1-web/fontawesome-free-5.15.1-web/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="../CSS/homestyles.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href=""/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>   
        $('html, body').animate({scrollTop: $elem.scrollTop()}, 222200000);
    </script>
</head>

<body>
    <div id="home"></div>
	<header id="Home">
        <nav id="main-nav">
            <div id="menus">
                <div class="menu-enter">
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                </div>
            </div>
            <div id="name">
                <h4>Kanvases<br>by<br>Kylee</h4>
            </div>
            <div id="nav-body">
                <div id="logo">
                    <a id="logo-link" href="index.php"><p id="logo-info">K<br id="break">K</p></a>
                </div>
                <div id="nav-items">
                    <ul>

                        <?php if(basename(__FILE__) == "index.php"){ ?>
                            <li><a class="item" href="#home">Home</a></li>    
                        <?php } else { ?>
                            <li><a class="item" href="index.php">Home</a></li>
                        <?php } ?>

                        <li><a class="item">Shop</a></li>
                        <li id="gallery-link"><a class="item">Gallery</a></li>
                        <li id="contact-link"><a class="item">Contact Me</a></li>

                        <?php if(basename(__FILE__) == "index.php"){ ?>
                            <li><a id="page-link" class="item about" href="#about-me">About Me</a></li>   
                        <?php } else { ?>
                            <li><a id="page-link" class="item about" href="index.php#about-me">About Me</a></li>
                        <?php } ?>
                    </ul>
                </div>
                <div id="footer-items">
                        <div id="subscribe">
                            <p id="offer">Subscribe for offers and product updates.</p>
                            <form method="POST">
                                <input id="email" placeholder="Enter your email address..." name="email" type="email"/>
                                <button id="subscribe-btn" type="submit">Subscribe</button>
                            <form>
                        </div>
                        <div id="other">
                            <ul>
                                <li><a class="footer-item">Accessibility</a></li>
                                <li><a class="footer-item">Terms and Conditions</a></li>
                                <li><a class="footer-item">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <p>&#169; 2021 Kanvases by Kylee. Built by BDS Software</p>
                    </div>
            </div>
            <div id="nav-footer">
                <div id="options">
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>  
                </div>
            </div>
            <div id="social">
                <a><i class="fab fa-facebook-f"></i></a>
                <a><i class="fab fa-instagram"></i></a>
                <a><i class="fab fa-etsy"></i></a>
                <a><i class="fab fa-youtube"></i></a>
                <a><i class="fab fa-pinterest"></i></a>
            </div>
        </nav>
    </header>
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