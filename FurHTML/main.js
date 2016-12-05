// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#episode-one-link").click(function(){
        $('#episode-one').slideDown(5000)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-two').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();
   
    });

     $("#episode-two-link").click(function(){
        $('#episode-two').slideDown(500)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-one').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();

     });

      $("#episode-three-link").click(function(){
        $('#episode-three').fadeIn(3500)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-two').hide();
        $('#episode-one').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();
   
    });

     $("#episode-four-link").click(function(){
        $('#episode-four').fadeIn(3500)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-two').hide();
        $('#episode-one').hide();
        $('#episode-three').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();
   
    });

     $("#episode-five-link").click(function(){
        $('#episode-five').show(500)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-two').hide();
        $('#episode-one').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-six').hide();
        $('#episode-seven').hide();
   
    });

     $("#episode-six-link").click(function(){
        $('#episode-six').slideToggle(4000)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-two').hide();
        $('#episode-one').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-seven').hide();
   
    });

     $("#episode-seven-link").click(function(){
        $('#episode-seven').toggle(2000)
            .css("background-color", "black")
            .css("color", "yellow");
        $('#episode-two').hide();
        $('#episode-one').hide();
        $('#episode-three').hide();
        $('#episode-four').hide();
        $('#episode-five').hide();
        $('#episode-six').hide();
   
    });


});