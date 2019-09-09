/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js
//= include ../lib/owl-slider/js/build.js


/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
    /**
     * STICKY-HEADER
     **/
    var scrolled;

    function addScrollClass() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 40) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    }

    addScrollClass();

    $(window).on('scroll', function () {
        addScrollClass();
    });

    /**
     *  TOGGLE ACTIVE CLASS
     * */
    var nav = $('.main__nav');

    $('.main__nav .decor').click(function (e) {
        $('.decor').removeClass('decor_active');
        $(this).addClass('decor_active');

        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

       /**
     * MOB MENU SCRIPT
     **/

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.close-nav, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    /**
     * OWL-CAROUSEL SCRIPT
     **/
    var owl = jQuery("#slider-carousel");
    owl.owlCarousel({
        items: 3,
        pagination: false,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8000,
        slideSpeed: 5000,
        stopOnHover: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            970: {
                items: 2,
                loop: false
            }
        }
    });

    /***
     * SMOOTH SCROLL TO ANCHOR
     **/

    function smoothScrollToAnchor (selector) {
        $(selector).on('click', function (event) {
            var anchor = $.attr(this, 'href');

            if(anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top -80
                }, 1000);
            }
        });
    }

    smoothScrollToAnchor('#requestDemo');
    smoothScrollToAnchor('.header .main-nav__link');


    /**
     * CUSTOM BTN YOUTUBE
     **/

    function onYouTubeIframeAPIReady() {
        var iStatus;

        oPlayer = new YT.Player('videoPlayer', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });

        var $playButton = $('#videoPlayBtn');
        $playButton.on("click", function() {
            if (iStatus === YT.PlayerState.PLAYING) {
                $playButton.show();
                oPlayer.pauseVideo();
                iStatus = YT.PlayerState.PAUSED;
            } else {
                oPlayer.playVideo();
                iStatus = YT.PlayerState.PLAYING;
                $playButton.hide();
            }
        });

        function onPlayerStateChange(event) {
            if (event.data === YT.PlayerState.PAUSED) {
                $playButton.show();
                iStatus = YT.PlayerState.PAUSED;
            } else if (event.data === YT.PlayerState.PLAYING) {
                iStatus = YT.PlayerState.PLAYING;
                $playButton.hide();
            }
        }
    }

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});