// JavaScript For index

$(document).ready(function(){

    $("#B1").click(function(){
        $("p").hide();
    });
    $("#B2").click(function(){
        $("p").show();
    });


    $("#B3").click(function(){
        $(".h2").hide();
    });

    $("#H3").on("mouseenter", function(){
        $(this).css("background-color", "lightgray");
    });
    $("#H3").on("mouseleave", function(){
        $(this).css("border", "2px solid red");
    });
































  });