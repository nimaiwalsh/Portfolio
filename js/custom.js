$(document).ready(function() {
    
    $('#portfolio').hover(function () {
        $(this).attr('src', 'img/portfolio-project.jpg');
    }, function () {
        $(this).attr('src', 'img/portfolio-project-bw.jpg');
    });
    
    $('#tribute').hover(function () {
        $(this).attr('src', 'img/tribute-project.jpg');
    }, function () {
        $(this).attr('src', 'img/tribute-project-bw.jpg');
    });
    
    /* Smooth Scrolling */
    
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
});

