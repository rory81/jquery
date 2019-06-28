$(document).ready(function() {
    // $('p').click(function() {
    //     $('p').children('a').css('background-color', 'yellow');
    // });

    // $('button').click(function(){
    //     $(this).prev().slideToggle('slow')
    // });

    // $('.card_image').click(function() {
    //     $(this).next().children("p").slideDown('slow');
    // });
    $('.card').click(function() {
        $(this).removeClass('card_white').toggleClass('highlight');
    });

    $('#select_btn').click(function(){
       $('.card:not(.highlight)').hide(); 
    });
    //select all cards
    $('#all_btn').click(function() {
        $('.card').show();
    });
});
