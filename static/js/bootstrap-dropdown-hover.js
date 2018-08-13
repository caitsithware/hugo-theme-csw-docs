$(function(){
    $('body').on('mouseenter mouseleave',".dropdown.dropdown-hover",function(e) {
        var target = $(e.target);
        var dropdown=target.closest('.dropdown');
        var isHover = dropdown.is(':hover');

        var dropdown_menu = dropdown.children(".dropdown-menu");
        var toggle = $('.dropdown-hover-toggle', dropdown);
        if( isHover ) {
            dropdown_menu.addClass('show');
            toggle.attr('aria-expanded',isHover);
        }
        else {
            setTimeout(function(){
                // console.log("isHover : " + isHover);
                dropdown_menu.removeClass('show');
                toggle.attr('aria-expanded',isHover);
            },50);
        }
    });
});