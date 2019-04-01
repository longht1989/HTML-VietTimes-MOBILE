/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // toggle header search
    $('.btn-menu').click(function() {
        $(this).toggleClass('is-active');
        $('.btn-search').removeClass('is-active');
        $('.mobile-search').slideUp('fast');
        $(".mobile-menu").slideToggle('fast');
    });
    // toggle header search
    $('.btn-search').click(function() {
        $(this).toggleClass('is-active');
        $('.btn-menu').removeClass('is-active');
        $('.mobile-menu').slideUp('fast');
        $(".mobile-search").slideToggle('fast');
    });
    // index slider
    $('.zone--highlight .slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        auto: 1,
        pause: '5000'
    });
    // video slider
    $('.zone--video .slider').bxSlider({
        nextText: '>',
        prevText: '<',
        adaptiveHeight: 1,
        auto: 1
    });
    // author slider
    $('.author_slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        auto: 1
    });
    // affix navigator
    $('.site-header__content').affix({
        offset: {
            top: $(".site-header__content").height()
        }
    })

    // toggle sub category menu listing
    $(".mobile-menu .menu .sprite-more ").on('click', function() {
        $(this).toggleClass('is-active');
        $(this).siblings(".menu__sub").slideToggle('fast');
    });

    // go top 
    $(".sprite-gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });
    // toggle floating social
    if ($(".article__summary").length > 0) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > $(".article__summary").offset().top) {
                $('.social-floating').show();
            } else {
                $('.social-floating').hide();
            }
        });
    }
    // add class for story has gif image
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
});