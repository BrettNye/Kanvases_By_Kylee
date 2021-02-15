window.addEventListener("resize", onResize());

var navExpanded = false;
var optionExpanded = false;
var targetWidth = 1230;
var currentWidth = $(window).width();

$("#logo").text(currentWidth.toString());

    $("#menus").click(function(){
        if(currentWidth >= targetWidth){
        switch (navExpanded)
        {
            case false:
                navExpandLG();
                break;
            case true:
                navCondenseLG();
                break;
        }
    }
    });

    $("#menus").click(function(){
        if(currentWidth < targetWidth){
        switch (navExpanded)
        {
            case false:
                navExpandSM();
                break;
            case true:
                navCondenseSM();
                break;
        }
    }
    });



    $("#nav-footer").click(function(){
        if(currentWidth >= targetWidth){
        switch (optionExpanded)
        {
            case false:
                optionExpandLG();
                break;
            case true:
                optionCondenseLG();
                break;
        }
    }
    });

    $("#nav-footer").click(function(){
        if(currentWidth < targetWidth){
        switch (optionExpanded)
        {
            case false:
                optionExpandLG();
                break;
            case true:
                optionCondenseLG();
                break;
        }
    }
    });


function onResize(){
    currentWidth = $(window).width();
    $("#logo").text(currentWidth.toString());
    if(currentWidth >= targetWidth){
        $("#menus").click(function(){
            switch (navExpanded)
            {
                case false:
                    navExpandLG();
                    break;
                case true:
                    navCondenseLG();
                    break;
            }
        });
    } else{
        $("#menus").click(function(){
            switch (navExpanded)
            {
                case false:
                    navExpandSM();
                    break;
                case true:
                    navCondenseSM();
                    break;
            }
        });
    }
};





function navExpandLG(){
    $("#main-nav").animate({
        width: "25vw"
    },1500);
    $("#me-info").animate({
       'padding-left': "9%"
    },1500);
    $("#name").show();
    setTimeout(function(){$("#logo").hide(); $(".options-circle").hide(); $("#nav-items").css("display","flex"); $("#social").css("display", "flex");},600);
    navExpanded = true;
}

function navCondenseLG(){
    $("#main-nav").animate({
        width: "75px"
    },1100);
    $("#me-info").animate({
        'padding-left': "0%"
    },1100);
    setTimeout(function(){$("#name").hide(); $(".options-circle").show(); $("#social").hide(); $("#logo").show(); $("#nav-items").css("display","none"); $("#options").css("display", "flex")}, 600);
    navExpanded = false;
}

function optionExpandLG(){
    $("#main-nav").animate({
        width: "25vw"
    },1500);
    $("#me-info").animate({
       'padding-left': "9%"
    },1500);
    $("#name").show();
    setTimeout(function(){$("#logo").hide(); $(".menu-enter").hide(); $("#name").show(); $("#footer-items").css("display","flex");},1200);
    optionExpanded = true;
}

function optionCondenseLG(){
    $("#main-nav").animate({
        width: "75px"
    },1100);
    $("#me-info").animate({
        'padding-left': "0%"
    },1100);
    setTimeout(function(){$("#name").hide(); $(".menu-enter").show(); $("#logo").show(); $("#footer-items").hide();}, 400);
    optionExpanded = false;
}

function navExpandSM(){
    $("#main-nav").animate({
        height: "100VH"
    },1500);
    $("#me-info").animate({
       'padding-left': "9%"
    },1500);
    $("#name").show();
    setTimeout(function(){$("#logo").hide(); $(".options-circle").hide(); $("#nav-items").css("display","flex"); $("#social").css("display", "flex");},600);
    navExpanded = true;
}

function navCondenseSM(){
    $("#main-nav").animate({
        height: "100px"
    },1100);
    $("#me-info").animate({
        'padding-left': "0%"
    },1100);
    setTimeout(function(){$("#name").hide(); $(".options-circle").show(); $("#social").hide(); $("#logo").show(); $("#nav-items").css("display","none"); $("#options").css("display", "flex")}, 600);
    navExpanded = false;
}

function optionExpandSM(){
    $("#main-nav").animate({
        height: "100vh"
    },1500);
    $("#me-info").animate({
       'padding-left': "9%"
    },1500);
    $("#name").show();
    setTimeout(function(){$("#logo").hide(); $(".menu-enter").hide(); $("#name").show(); $("#footer-items").css("display","flex");},1200);
    optionExpanded = true;
}

function optionCondenseSM(){
    $("#main-nav").animate({
        height: "100px"
    },1100);
    $("#me-info").animate({
        'padding-left': "0%"
    },1100);
    setTimeout(function(){$("#name").hide(); $(".menu-enter").show(); $("#logo").show(); $("#footer-items").hide();}, 400);
    optionExpanded = false;
}

window.onscroll = function() {myFunction()};

var navbar = $("#main-nav");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
}
}