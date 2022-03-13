/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

var mainColor = $("main").css("background-color");

$(document).ready(function() {
    // GET RANDOM NUMBER 
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // NAV BURGER
    //Menu Hamburger
    var menuBtn = $(".nav-btn"),
        menu = $("nav.responsive"),
        menuOpen = false;

    $(menuBtn).on('click', function() {
        if(!menuOpen) {
            menuBtn.addClass('open');
            menu.css('display', 'flex');
            $(".nav-btn").css("background-color", "rgba(253,247,233, 0)");
            menu.animate({ opacity: '1' }, 500);
            menuOpen = true;
        } else {
            menuBtn.removeClass('open');
        $(".nav-btn").css("background-color", mainColor);
            menu.animate({ opacity: '0' }, 500, function() {
                menu.css('display', 'none');
            });
            menuOpen = false;
        }
    });

    // DEFINE NAV COLOR ON ALL PAGES
    $("nav.desktop").css("background-color", mainColor);
    $(".nav-btn").css("background-color", mainColor);

    // DEFINE NAV COLOR ON INDEX PAGE
    if (window.location.pathname == "/") {
        var agenceColor = $("#row_agence").css("background-color"),
            agencePosY = $("#row_agence").offset().top,
            // actuPosY = $("#row_actualites").offset().top,
            posY,
            navHeight = $("nav.desktop").height();

        $(window).scroll(function() {
            posY = $(window).scrollTop();
            if (posY > (agencePosY - navHeight)) {
                $("nav.desktop").css("background-color", agenceColor);
            } else {
                $("nav.desktop").css("background-color", mainColor);
            }
        });
    }

    // BOXES ON AUTHOR & COLLABORATOR PAGES
    if ((window.location.pathname == "/les-auteurs") || (window.location.pathname == "/les-collaborateurs")) {
        var gallery = $(".gallery-link"),
            galleryID,
            galleryInfos = $(".gallery-infos"),
            galleryIDInfos,
            mask = $("#gallery-detail-mask"),
            galleryBox = $("#gallery-detail"),
            authors = $(".gallery-element"),
            random,
            bookshelf = '<div></div>';
        
        // Open box
        $(gallery).on("click", function(e) {
            galleryID = $(this).attr('id');
            galleryID = galleryID.replace("gallery-", "");
            galleryIDInfos = $("#gallery-infos-" + galleryID);
            $(galleryInfos).removeClass("visible");
            $(galleryIDInfos).addClass("visible");

            mask.css("display", "block");
            galleryBox.removeClass("closed");
            mask.animate({ opacity: '0.3' }, 300);
        });

        // Close box
        $(mask).on("click", function(e) {
            galleryBox.addClass("closed");
            mask.animate({ opacity: '0' }, 300, function() {
                mask.css("display", "none");
            });
        });

        // Close box
        $("#gallery-close").on("click", function(e) {
            galleryBox.addClass("closed");
            mask.animate({ opacity: '0' }, 300, function() {
                mask.css("display", "none");
            });
        });

        authors.each(function(i) {
            random = randomNumber(0, 100);
            
            if (random > 75) {
                $(authors[i]).after('<div class="gallery-element gallery-bookshelf col p-xxs">' + bookshelf + '</div>');
            }
        });
    }
});