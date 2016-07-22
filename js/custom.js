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
    
});

