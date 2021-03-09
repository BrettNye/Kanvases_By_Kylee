$(document).ready(function(){
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("=");
    var background = parseInt(queries[1]);

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
    }
});