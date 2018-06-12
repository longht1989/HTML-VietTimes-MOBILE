/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // toggle header search
    $('.btn-menu').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile-search').slideUp('fast');
        $(".mobile-menu").slideToggle('fast');
    });
    // toggle header search
    $('.btn-search').click(function() {
        $(this).toggleClass('is-active');
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
    // author slider
    $('.zone--special .author_slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        touchEnabled: 0,
        auto: 1,
        pagerSelector: ".slider_pager",
        pause: '5500'
    });
    // affix navigator
    $('.navigator').affix({
        offset: {
            top: $("#site-content").offset().top
        }
    })
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