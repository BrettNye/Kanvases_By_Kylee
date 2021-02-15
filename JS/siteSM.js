var navExpanded = false;
var optionExpanded = false;
var targetWidth = 1230;
var currentWidth = $(window).width();

if(targetWidth > currentWidth){
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

    $("#nav-footer").click(function(){
        switch (optionExpanded)
        {
            case false:
                optionExpandSM();
                break;
            case true:
                optionCondenseSM();
                break;
        }
    });
};

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