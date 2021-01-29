$(function() {
    $("#mail").hover(
        function() {
            $(this).attr("src", "imgs/emailGif.gif");
        },
        function() {
            $(this).attr("src", "imgs/mail_000000.png");
        }                         
    );                  
});