$(function() {
    $('.smooth').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('nav a').slideToggle(500);
    });
});