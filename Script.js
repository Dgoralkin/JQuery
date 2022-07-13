// JavaScript For index

function afterText() {
    var txt1 = "<br><b>I </b>";                     // Create element with HTML
    console.log(txt1);

    var txt2 = $("<i></i>").text("love ");      // Create with jQuery
    console.log(txt2);

    var txt3 = document.createElement("b");     // Create with DOM
    txt3.innerHTML = "jQuery!";
    console.log(txt3);

    $("img").after(txt1, txt2, txt3);           // Insert new elements after img
}

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


    $("#B4").click(function() {
        $("#P3").toggle(1000, function() {
            $("#P4").text("Press Again!");
        });
    });


    $("#B5").click(function() {
        $("#box1").fadeToggle();
        $("#box2").fadeToggle("Slow");
        $("#box3").fadeToggle(1000);
    });


    $("#flipDown").click(function() {
        $("#panel").slideDown("slow");
    });

    $("#flipUp").click(function() {
        $("#panel").slideUp("slow");
    });


    $("#B6").click(function(){
        $("#P6").css("color", "red").slideUp(2000).slideDown(2000, function(){
            alert("The paragraph is now hidden");
        });
    });


    $("#B7").click(function(){
        alert("P7 text is: " + $("#P7").text());
    });
    $("#B8").click(function(){
        alert("P7 HTML is: " + $("#P7").html());
    });
    $("#B81").click(function(){
        alert("P7 Attribute is: " + $("#P7").attr("style"));
        $("#P7").attr("style", "color: blue").fadeTo(2000, 0.50);
    });
    $("#B9").click(function(){
        alert("Input Value is: " + $("#INP1").val());
    });

    $("#B11").click(function(){
        alert("Input Value is: ");
    });






























  });