$(document).ready(function() {
    // Scroll to active
    var activeItem = $('.bd-sidebar .active');
    if(activeItem.length > 0){
        var sidebar = $('.bd-sidebar');
        var height = sidebar.innerHeight();
        var base = sidebar.offset().top;
        var currentPos = activeItem.offset().top - base - height/2;
        $('.bd-sidebar').scrollTop(currentPos);
    }
});