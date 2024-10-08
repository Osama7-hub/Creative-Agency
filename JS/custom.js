$(function () 
{

var windowH = $(window).height(),
    navbarH = $('.navbar').innerHeight(),
    contentH = $('.content-head').height();

$('.header').height(windowH);

// Center header
    $('.header .content-head').each(function () {
        $(this).css('paddingTop', ( windowH - contentH ) / 2 + 30);
    });

//=================================================================================//
// Loading Screen

$(window).load(function ()
{
    // Loading Elements
    $('.loading-overlay p, .loading-overlay .spinner').fadeOut(1000, 
        function()
        {
            // Show Scroll For Body
            $('body').css('overflow', 'auto');
            $(this).parent().fadeOut(1000,
                function()
                {
                    $(this).remove();
                });

        });
});


//=================================================================================//
// Add Class Active On Navbar Links and Remove From Siblings

$('.navbar-nav .nav-item').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

});

// Smoothly Scroll To Elements
    $('.navbar .nav-item .nav-link').click(function (e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

        }, 1000);
    });

//=================================================================================//
    $(window).scroll(function () { // Start Scroll Event
//=================================================================================// :( Not Work :(
        // Sync Navbar Links With Sections

        $('section').each(function () {

            if ($(window).scrollTop > $(this).offset().top) {

                var sectionID = $(this).attr('id');

                $('.navbar .nav-item').removeClass('active');

                $('.navbar .nav-item .nav-link[data-scroll="' + sectionID + '"]').parent().addClass('active');

            }
        });
//=================================================================================//
        // Navbar Fixed Change Color White
        var nav = $('.navbar'),
            navBrand = $('.navbar-brand'),
            navLink = $('.navbar-nav .nav-link');

        if ($(window).scrollTop() >= nav.height())
        {
            if (nav.hasClass('scrolled')) {
                // No Thing
            } else {
                nav.addClass('scrolled');
            }
            navBrand.css('color', '#6195ff');
            navLink.css('color', '#6195ff');
        } else {
            nav.removeClass('scrolled');
            navBrand.css('color', '#FFF');
            navLink.css('color', '#FFF');
        }
//=================================================================================//
    }); // End Scroll Event
//=================================================================================//
// Show & Hide Button Scroll
var scrollButton = $('.scroll-top');

$(window).scroll(function()
{
    if ($(this).scrollTop() >= 700) {

    if (scrollButton.is(':hidden')) { // Chicking [if] scrollButton is Hidden

        scrollButton.fadeIn(400);
    }

    } else {
        scrollButton.fadeOut(400);
    } 
});

// Click On Button To Scroll Top
scrollButton.click(function(e) {

    e.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 600);
});
//=================================================================================//

// // Trigger Nice Scroll Plugin
//     $('html').niceScroll({
//         cursorcolor: '#6195ff',
//         cursorwidth: '10px',
//         cursorborder: 'none',
//         cursorborderradius: 0
//     });

//=================================================================================//
// Our Auto Slider Code
(function autoSlider()
{
    $('.slider .active').each(function () 
    {
       if( !$(this).is(':last-child') ){

           $(this).delay(3000).slideUp(1000, function (){
               $(this).removeClass('active').next().addClass('active').slideDown(1000);
               autoSlider();
           });

        } else {

            $(this).delay(3000).slideUp(1000, function (){
                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').slideDown(1000);
                autoSlider();
            });
        }
    });

}()); // Self invock استدعاع زاتي

}); // End Ready Funtion