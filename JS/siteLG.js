    window.addEventListener("resize", onResize());

    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', '${vh}px');
    document.documentElement.style.setProperty('--vW', '${vW}px');
        
        var navExpanded = false;
        var optionExpanded = false;
        var targetWidth = 1230;
        var currentWidth = $(window).width();

        if(currentWidth <= targetWidth){
            $("#break").hide();
        } else{
            $("#break").show();
        }

        $("#menus").click(function(){
            currentWidth = $(window).width();
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
            } else if(currentWidth < targetWidth){
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
            currentWidth = $(window).width();
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
            } else if(currentWidth < targetWidth){
                switch (optionExpanded)
                {
                    case false:
                        optionExpandSM();
                        break;
                    case true:
                        optionCondenseSM();
                        break;
                }
            }
        });

        function onResize(){
            currentWidth = $(window).width();
            if(currentWidth < targetWidth){
                $("#break").hide();
            } else{
                $("#break").show();
            }
            $("main-js").removeAttr('src');
            $("main-js").attr("src", "../JS/siteLG.js");
        };
        

        $(window).resize(function(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                let vw = window.innerWidth * 0.01;
                let vH = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vw', '${vw}px');
                document.documentElement.style.setProperty('--vh', '${vh}px');   
            } else{
                location.reload();
            }
        });

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
                height: "100vh"
            },0);  
            setTimeout(function(){$("#logo").hide(); $("#name").show(); $(".options-circle").hide(); $("#nav-items").css("display","flex"); $("#social").css("display", "flex");},0);
            navExpanded = true;
        }
        
        function navCondenseSM(){
            $("#main-nav").animate({
                height: "125px"
            },0);
            $("#name").hide(); 
            $("#logo").show(); 
            $(".options-circle").show(); 
            $("#social").hide(); 
            $("#nav-items").css("display","none"); 
            $("#options").css("display", "flex");
            //setTimeout(function(){ $("#name").hide(); $("#logo").show(); $(".options-circle").show(); $("#social").hide(); $("#nav-items").css("display","none"); $("#options").css("display", "flex");}, 0);
            navExpanded = false;
        }
        
        function optionExpandSM(){
            $("#main-nav").animate({
                height: "100vh"
            },0);
            setTimeout(function(){$("#logo").hide(); $("#name").show(); $(".menu-enter").hide(); $("#footer-items").css("display","flex");},0);
            optionExpanded = true;
        }
        
        function optionCondenseSM(){
            $("#main-nav").animate({
                height: "125px"
            },0);
            $("#name").hide(); 
            $(".menu-enter").show(); 
            $("#logo").show(); 
            $("#footer-items").hide();
            //setTimeout(function(){$("#name").hide(); $(".menu-enter").show(); $("#logo").show(); $("#footer-items").hide();}, 0);
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