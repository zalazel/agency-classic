/*Global $, alert, console*/

$(function(){

    "use strict";

    var myHeader = $(".header"),

        mySlider = $(".slider")

    //Adjust Header Height

    $(".header").height($(window).height());

    $(window).resize(function(){
        $(".header").height($(window).height());

        //Adjust Slider List Center

        $(".slider").each(function(){
            $(this).css("paddingTop",($(window).height()-$(".slider li").height()) /2)
        })
    })

    

    //Links Add Active Class

    $(".links li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    })

    //Trigger the BxSlider

    $('.slider').bxSlider({
        pager:false,
        keyboardEnabled:true,

        
    });

    //Adjust Slider List Center

    $(".slider").each(function(){
        $(this).css("paddingTop",($(window).height()-$(".slider li").height()) /2)
    })
    
    //Smooth Scroll To Div

    $(".links li a").click(function(){
        $("html,body").animate({
          scrollTop: $("#" + $(this).data("value")).offset().top 
        },1000);
    })

    //Auto Slider Code

    $(function autoSlider() {
        $(".slider-temp .active").each(function(){
            if(!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                    autoSlider();
                });

            }
            else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active");
                    $(".slider-temp div").eq(0).addClass("active").fadeIn(1000);
                    autoSlider();
                });


            };
        });


    }());

    //Trigger MixitUp

    var mixer = mixitup('.gallery');

    //Trigger Nice Scroll

    $("body").niceScroll({

        bouncescroll:true
    });


    

})

