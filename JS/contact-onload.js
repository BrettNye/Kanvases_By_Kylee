$(document).ready(function(){
var queryString = decodeURIComponent(window.location.search);
var queries = queryString.split("=");
var background = parseInt(queries[1]);

if($(window).width() >= 1230){
    if(background == 0){
        $("#subscribe-btn").css("background-color", "rgb(250,182,45)");
        $("#send-btn").css("background-color", "rgb(55,109,156)");
        $("#name").css("color", "rgb(250,182,45)");
        $("h1").css("color", "rgb(250,182,45)");
        $("#logo-link").css("color", "rgb(250,182,45)");
        //$("#send-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(250,182,45)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(250,182,45)");});
        $(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(250,182,45)");}, function(){$(".hamburger").css("background-color", "white");});
        $("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(250,182,45)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(250,182,45)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(250,182,45)");}, function(){$(this).css("color", "white");});
    } else if(background == 1){
        $("#subscribe-btn").css("background-color", "rgb(252,77,24)");
        $("#send-btn").css("background-color", "rgb(252,77,24)");
        $("#name").css("color", "rgb(252,77,24)");
        $("#logo-link").css("color", "rgb(252,77,24)");
        $("#send-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(252,77,24)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","white");}, function(){$(this).css("background-color","rgb(252,77,24)");});
        $(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(252,77,24)");}, function(){$(".hamburger").css("background-color", "white")});
        $("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(252,77,24)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(252,77,24)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(252,77,24)");}, function(){$(this).css("color", "white");});
    } else if(background == 2){
        $("#subscribe-btn").css("background-color", "rgb(172,196,198)");
        $("#send-btn").css("background-color", "rgb(172,196,198)");
        $("#name").css("color", "rgb(172,196,198)");
        $("#logo-link").css("color", "rgb(172,196,198)");
        $("#send-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(172,196,198)");});
        $("#subscribe-btn").hover(function(){$(this).css("background-color","rgb(241,214,102)");}, function(){$(this).css("background-color","rgb(172,196,198)");});
        $(".menu-enter").hover(function(){$(".hamburger").css("background-color", "rgb(172,196,198)");}, function(){$(".hamburger").css("background-color", "white")});
        $("#nav-footer").hover(function(){$(".options-circle").css("background-color", "rgb(172,196,198)");}, function(){$(".options-circle").css("background-color", "white");});
        $(".item").hover(function(){$(this).css("color", "rgb(172,196,198)");}, function(){$(this).css("color", "white");});
        $(".footer-item").hover(function(){$(this).css("color", "rgb(172,196,198)");}, function(){$(this).css("color", "white");});
    }
} else{
    if(background == 0){
        $("#subscribe-btn").css("background-color", "rgb(250,182,45)");
        $("#send-btn").css("background-color", "rgb(55,109,156)");
        $("#name").css("color", "rgb(250,182,45)");
        $("h1").css("color", "rgb(250,182,45)");
        $("#logo-link").css("color", "rgb(250,182,45)");
    } else if(background == 1){
        $("#subscribe-btn").css("background-color", "rgb(252,77,24)");
        $("#send-btn").css("background-color", "rgb(252,77,24)");
        $("#name").css("color", "rgb(252,77,24)");
        $("#logo-link").css("color", "rgb(252,77,24)");
    } else if(background == 2){
        $("#subscribe-btn").css("background-color", "rgb(172,196,198)");
        $("#send-btn").css("background-color", "rgb(172,196,198)");
        $("#name").css("color", "rgb(172,196,198)");
        $("#logo-link").css("color", "rgb(172,196,198)");
    }
}
}); 