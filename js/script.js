$(document).ready(function() {
    // put your code here
    // $('.theButton').click(function() {
    //     $('#panel .container').hide();
    // });

    // $('.theButton').click(function() {
    //     $(this).hide();
    // });

    $('#panel .container').click(function() {
        $(this).siblings().fadeTo(1000, 0.2);
    });
    $('.superButton').click(function() {
        $('#panel .container').fadeTo(1000, 1);
    });
    $('.theButton').mouseenter(function() {
        $(this).addClass('makeBlack');
    });
    $('.theButton').mouseleave(function() {
        $(this).removeClass('makeBlack');
    });
});
