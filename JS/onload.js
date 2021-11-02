$(document).ready(function(){
var backgroundLG = [
    "../Images/Peacock.jpg",
    "../Images/Koi.jpg",
    "../Images/Giraffe.jpg"
];

var backgroundSM = [
    "../Images/Cherry_Blossom.jpg",
    "../Images/KoiVertical.jpg",
    "../Images/Goldfishopt.jpg"
]

if($(window).width() >= 1230){
    var random = Math.floor(Math.random()*backgroundLG.length);
    var imageSelected = backgroundLG[random].toString();

    if(random == 0){
        $("#contact-btn").css("background-color", "rgb(250,182,45)");
        $("#subscribe-btn").css("background-color", "rgb(250,182,45)");
        $("#name").css("color", "rgb(250,182,45)");
        $("#logo-link").css("color", "rgb(250,182,45)");
        $("#contact-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(250,182,45)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(250,182,45)");});
        $(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(250,182,45)");}, function(){$(".hamburger").css("background-color", "white");});
        $("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(250,182,45)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(250,182,45)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(250,182,45)");}, function(){$(this).css("color", "white");});
    } else if(random == 1){
        $("#contact-btn").css("background-color", "rgb(252,77,24)");
        $("#subscribe-btn").css("background-color", "rgb(252,77,24)");
        $("#name").css("color", "rgb(252,77,24)");
        $("#logo-link").css("color", "rgb(252,77,24)");
        $("#contact-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(252,77,24)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(252,77,24)");});
        $(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(252,77,24)");}, function(){$(".hamburger").css("background-color", "white")});
        $("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(252,77,24)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(252,77,24)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(252,77,24)");}, function(){$(this).css("color", "white");});
    } else if(random == 2){
        $("#contact-btn").css("background-color", "rgb(172,196,198)");
        $("#subscribe-btn").css("background-color", "rgb(172,196,198)");
        $("#name").css("color", "rgb(172,196,198)");
        $("#logo-link").css("color", "rgb(172,196,198)");
        $("#contact-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(172,196,198)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(172,196,198)");});
        $(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(172,196,198)");}, function(){$(".hamburger").css("background-color", "white")});
        $("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(172,196,198)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(172,196,198)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(172,196,198)");}, function(){$(this).css("color", "white");});
    }
} else{
    var random = Math.floor(Math.random()*backgroundSM.length);
    var imageSelected = backgroundSM[random].toString();

    if(random == 0){
        $("#contact-btn").css("background-color", "rgb(196,36,48)");
        $("#contact-btn").css("color", "white");
        $("#subscribe-btn").css("background-color", "rgb(196,36,48)");
        $("#name").css("color", "rgb(196,36,48)");
        $("#logo-link").css("color", "rgb(196,36,48)");
        $("#contact-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(196,36,48)");});
        $("#contact-btn").hover(function(){$(this).css("color","rgb(196,36,48");}, function(){$(this).css("color","white");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(196,36,48)");});
        //$(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(196,36,48)");}, function(){$(".hamburger").css("background-color", "white")});
        //$("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(196,36,48)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(196,36,48)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(196,36,48)");}, function(){$(this).css("color", "white");});
    } 
    else if(random == 1){
        $("#contact-btn").css("background-color", "rgb(252,77,24)");
        $("#subscribe-btn").css("background-color", "rgb(252,77,24)");
        $("#name").css("color", "rgb(252,77,24)");
        $("#logo-link").css("color", "rgb(252,77,24)");
        $("#contact-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(252,77,24)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(252,77,24)");});
        //$(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(252,77,24)");}, function(){$(".hamburger").css("background-color", "white")});
        //$("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(252,77,24)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(252,77,24)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(252,77,24)");}, function(){$(this).css("color", "white");});
    } else if(random == 2){
        $("#contact-btn").css("background-color", "rgb(253,125,0)");
        $("#subscribe-btn").css("background-color", "rgb(253,125,0)");
        $("#name").css("color", "rgb(253,125,0)");
        $("#logo-link").css("color", "rgb(253,125,0)");
        $("#contact-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(253,125,0)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(253,125,0)");});
        //$(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(253,125,0)");}, function(){$(".hamburger").css("background-color", "white")});
        //$("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(253,125,0)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(253,125,0)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(253,125,0)");}, function(){$(this).css("color", "white");});
    }
}


$('body').css("background-image", "url(" + imageSelected + ")");


$("#contact-link").click(function(){
    var queryString = "?bg=" + random;
    window.location.href = "contact.php" + queryString; 
});

$("#contact-btn").click(function(){
    var queryString = "?bg=" + random;
    window.location.href = "contact.php" + queryString;
})

$("#gallery-link").click(function(){
    var queryString = "?bg=" + random;
    window.location.href = "gallery.php" + queryString; 
});

$("#page-link").click(function(){
    if($(window).width() <= 1230){
        $("#main-nav").animate({
            height: "125px"
        },0);
        $("#main-nav").css("height", "125px");
        $("#name").hide();
         $("#logo").show(); 
         $(".options-circle").show(); 
         $("#social").hide(); 
         $("#nav-items").css("display","none"); 
        $("#options").css("display", "flex");
    } else{
        $("#main-nav").animate({
            width: "75px"
        },1100);
        setTimeout(function(){$("#name").hide(); $(".options-circle").show(); $("#social").hide(); $("#logo").show(); $("#nav-items").css("display","none"); $("#options").css("display", "flex")}, 600);
    }
});




});
