/*global $,jQuery,alert*/
$(document).ready(function () {
    
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 6000
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $(".check").click(function () {
        
        $(".box").fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".box ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#E60024").end()
    
           .eq(1).css("backgroundColor", "#E426D5").end()
    
           .eq(2).css("backgroundColor", "#009AFF").end()
    
           .eq(3).css("backgroundColor", "#FFD500");
        
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
        
        var scroll=$("#scroll");
    $(window).scroll (function (){
        console.log($(this).scrollTop());
        if ($(this).scrollTop()>=700){
            scroll.show();

            
            }else{
                scroll.hide();
                
            }
        scroll.click(function (){

        $("html,body").animate({scroll:0},600);
        });
        
   
        
    });
    // loading screen
    $(window).load (function(){
         $("body").css("overflow","auto");
$(".overlay .sk-cube-grid").fadeOut(1000,function (){
$(this).parent().fadeOut(2000,function (){
    
   
    
$(this).remove();
});
});
    });
    