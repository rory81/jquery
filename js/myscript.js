$(document).ready(function() {
    $("tr:even").addClass("evenColor");
    $("tr:odd").addClass("oddColor");

    $("th").click(function() {
       $('tr').children().removeClass('highlight');
       $(this).siblings().addClass('highlight');
    });
});
