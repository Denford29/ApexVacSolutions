function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf("msie") !== -1) ? parseInt(myNav.split("msie")[1]) : false;
};

/* cookie.JS
 ========================================================*/
//include('/Scripts/jquery.cookie.js');

/* Easing library
 ========================================================*/
//include("/Scripts/jquery.easing.1.3.js");


/* Stick up menus
 ========================================================*/
(function ($) {
    var o = $("html");
    if (o.hasClass("desktop")) {
        //include("/Scripts/tmstickup.js");

        $(document).ready(function () {
            $("#stuck_container").TMStickUp({});
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
(function ($) {
    var o = $("html");
    if (o.hasClass("desktop")) {
        //include("/Scripts/jquery.ui.totop.js");

        $(document).ready(function () {
            $().UItoTop({easingType: "easeOutQuart"});
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/

//(function ($) {
//    var o = $("[data-equal-group]");
//    if (o.length > 0) {
//        include("/Scripts/jquery.equalheights.js");
//    }
//})(jQuery);



/* Copyright Year
 ========================================================*/

//(function ($) {
//    var currentYear = (new Date).getFullYear();
//    $(document).ready(function () {
//        $("#copyright-year").text((new Date).getFullYear());
//    });
//})(jQuery);


//(function ($) {
//    function include(url) {
//	document.write('<script src="/scripts/' + url + '"></script>');
//	return false;
//}
//	//include("superfish.js");
//	jQuery(function () {
//});
//})(jQuery);

/* Responsive Tabs
 ========================================================*/
//(function ($) {
//    var o = $(".resp-tabs");
//    if (o.length > 0) {
//        include("/Scripts/jquery.responsive.tabs.js");

//        $(document).ready(function () {
//            o.easyResponsiveTabs();
//        });
//    }
//})(jQuery);

/* Navbar
 ========================================================*/
//(function () {
//    include("/Scripts/jquery.rd-navbar.js");
//})(jQuery);

/* JQuery UI Accordion
 ========================================================*/
//(function ($) {
//    var o = $(".accordion");
//    if (o.length > 0) {
//        include("/Scripts/jquery.ui.accordion.min.js");

//        $(document).ready(function () {
//            o.accordion({
//                active: false,
//                header: ".accordion_header",
//                heightStyle: "content",
//                collapsible: true
//            });
//        });
//    }
//})(jQuery);


/* Google Map
 ========================================================*/
//(function ($) {
//    var o = document.getElementById("google-map");
//    if (o) {
//        include("//maps.google.com/maps/api/js?sensor=false");
//        include("/Scripts/jquery.rd-google-map.js");

//        $(document).ready(function () {
//            var o = $("#google-map");
//            if (o.length > 0) {
//                o.googleMap({styles:[{
//                    "featureType": "all",
//                    "elementType": "all",
//                    "stylers": [
//                        {
//                            "hue": "#ffbb00"
//                        }
//                    ]
//                },
//                    {
//                        "featureType": "all",
//                        "elementType": "geometry.fill",
//                        "stylers": [
//                            {
//                                "hue": "#ffbb00"
//                            }
//                        ]
//                    },
//                    {
//                        "featureType": "all",
//                        "elementType": "labels.text.fill",
//                        "stylers": [
//                            {
//                                "hue": "#ffbb00"
//                            }
//                        ]
//                    }]});
//            }
//        });
//    }
//})
//(jQuery);

/* Owl Carousel
========================================================*/
//(function ($) {
//    var o = $(".owl-carousel");
//    if (o.length > 0) {
//        include("/Scripts/owl.carousel.min.js");
//        $(document).ready(function () {
//            o.owlCarousel({
//                margin: 30,
//                smartSpeed: 450,
//                loop: true,
//                dots: false,
//                dotsEach: 1,
//                nav: true,
//                navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
//                responsive: {
//                    0: { items: 1 },
//                    768: { items: 1},
//                    980: { items: 1}
//                }
//            });
//        });
//    }
//})(jQuery);


/* WOW
 ========================================================*/
//(function ($) {
//    var o = $("html");

//    if ((navigator.userAgent.toLowerCase().indexOf("msie") === -1 ) || (isIE() && isIE() > 9)) {
//        if (o.hasClass("desktop")) {
//            include("/Scripts/wow.js");

//            $(document).ready(function () {
//                new WOW().init();
//            });
//        }
//    }
//})(jQuery);

/* Orientation tablet fix
 ========================================================*/
//$(function () {
//    // IPad/IPhone
//    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
//        ua = navigator.userAgent,

//        gestureStart = function () {
//            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
//        },

//        scaleFix = function () {
//            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
//                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
//                document.addEventListener('gesturestart', gestureStart, false);
//            }
//        };

//    scaleFix();
//    // Menu Android
//    if (window.orientation != undefined) {
//        var regM = /ipod|ipad|iphone/gi,
//            result = ua.match(regM);
//        if (!result) {
//            $(".sf-menus li").each(function () {
//                if ($(">ul", this)[0]) {
//                    $(">a", this).toggle(
//                        function () {
//                            return false;
//                        },
//                        function () {
//                            window.location.href = $(this).attr("href");
//                        }
//                    );
//                }
//            });
//        }
//    }
//});
//var ua = navigator.userAgent.toLocaleLowerCase(),
//    regV = /ipod|ipad|iphone/gi,
//    result = ua.match(regV),
//    userScale = "";
//if (!result) {
//    userScale = ",user-scalable=0";
//}
//document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Camera
========================================================*/
//(function ($) {
//var o = $("#camera");
//    if (o.length > 0) {
//        if (!(isIE() && (isIE() > 9))) {
//            include("/Scripts/jquery.mobile.customized.min.js");
//        }

//        include("/Scripts/camera.js");

//        $(document).ready(function () {
//            o.camera({
//                autoAdvance: true,
//                height: "42.23170731707317%",
//                minHeight: "350px",
//                pagination: true,
//                thumbnails: false,
//                playPause: false,
//                hover: false,
//                loader: "none",
//                navigation: false,
//                navigationHover: true,
//                mobileNavHover: false,
//                fx: "simpleFade"
//            });
//        });
//    }
//})(jQuery);


/**
 * @module     RD Input Label
 * @description Enables RD Input Label Plugin
 */

//(function ($) {
//    var o = $(".form-label");
//    if (o.length) {
//        include("/Scripts/mailform-1/jquery.rd-input-label.js");

//        $(document).ready(function () {
//            o.RDInputLabel();
//        });
//    }
//})(jQuery);

//
///**
// * @module     RD Input Label
// * @description Enables RD Input Label Plugin
// */
//;
//(function ($) {
//    var o = $('.form-label');
//    if (o.length) {
//        include('/Scripts/mailform/jquery.rd-input-label.js');
//
//        $(document).ready(function () {
//            o.RDInputLabel();
//        });
//    }
//})(jQuery);

/* Mailform
 =============================================*/

//(function ($) {
//    var o = $(".rd-mailform");
//    if (o.length > 0) {
//        include("/Scripts/mailform-1/jquery.form.min.js");
//        include("/Scripts/mailform-1/jquery.rd-mailform.min.js");

//        $(document).ready(function () {
//            var o = $(".rd-mailform");

//            if (o.length) {
//                o.rdMailForm({
//                    validator: {
//                        'constraints': {
//                            '@LettersOnly': {
//                                message: "Please use letters only!"
//                            },
//                            '@NumbersOnly': {
//                                message: "Please use numbers only!"
//                            },
//                            '@NotEmpty': {
//                                message: "Field should not be empty!"
//                            },
//                            '@Email': {
//                                message: "Enter valid e-mail address!"
//                            },
//                            '@Phone': {
//                                message: "Enter valid phone number!"
//                            },
//                            '@Date': {
//                                message: "Use MM/DD/YYYY format!"
//                            },
//                            '@SelectRequired': {
//                                message: "Please choose an option!"
//                            }
//                        }
//                    }
//                }, {
//                    'MF000': "Sent",
//                    'MF001': "Recipients are not set!",
//                    'MF002': "Form will not work locally!",
//                    'MF003': "Please, define email field in your form!",
//                    'MF004': "Please, define type of your form!",
//                    'MF254': "Something went wrong with PHPMailer!",
//                    'MF255': "There was an error submitting the form!"
//                });
//            }
//        });
//    }
//})(jQuery);


/* Mailform
 =============================================*/
//(function ($) {
//    if($(".mailform-sub").hasClass("mailform-sub")) {
//        include("/Scripts/mailform/jquery.form.min.js");
//        include("/Scripts/mailform/jquery.rd-mailform.js");
//    }
//})(jQuery);

/* Search.js
 ========================================================*/

//(function ($) {
//    var o = $(".search-form");
//    if (o.length > 0) {
//        include("/Scripts/TMSearch.js");
//    }
//})(jQuery);



/* Facebook
========================================================*/

//(function(d, s, id) {
//var js, fjs = d.getElementsByTagName(s)[0];
//if (d.getElementById(id)) return;
//js = d.createElement(s); js.id = id;
//js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3";
//fjs.parentNode.insertBefore(js, fjs);
//}(document, "script", "facebook-jssdk"));

//;(function ($) {
//var o = $(".fb-page");

//$(window).load(function () {
//o.css({'display': "block"})
//.find("span").css({
//'width': "100%",
//'display': "block",
//'text-align': "inherit"
//})
//.find("iframe").css({
//'display': "inline-block",
//'position': "static"
//});
//});

//$(window).on("load resize", function () {
//if (o.parent().width() < o.find("iframe").width()) {
//o.find("iframe").css({
//'transform': "scale(" + (o.width() / o.find("iframe").width()) + ")",
//'transform-origin': "0% 0%"
//})
//.parent().css({
//'height': (o.find("iframe").height() * (o.width() / o.find("iframe").width())) + "px"
//});
//} else {
//o
//.find("span").css({
//'height': "auto"
//})
//.find("iframe").css({
//'transform': "none"
//});
//}
//});
//})(jQuery);


/* FancyBox
========================================================*/
//;(function ($) {
//    var o = $(".thumb");
//    if (o.length > 0) {
//        include("/Scripts/jquery.fancybox.js");
//        include("/Scripts/jquery.fancybox-media.js");
//        include("/Scripts/jquery.fancybox-buttons.js");
//        $(document).ready(function () {
//            o.fancybox();
//        });
//    }
//})(jQuery);

///* Scroll To
// =============================================*/
//;(function ($) {
//    if($("header").hasClass("scrollto")) {
//        include("/Scripts/scrollTo.js");
//    }
//})(jQuery);


/**
 * @module       Swiper Slider
 * @description  Enables Swiper Plugin
 */

//(function ($, undefined) {
//    var o = $(".swiper-slider");
//    if (o.length) {
//        include("/Scripts/jquery.swiper.min.js");
//        function getSwiperHeight(object, attr) {
//            var val = object.attr("data-" + attr);

//            if (!val) {
//                return undefined;
//            }

//            var dim = val.match(/(px)|(%)|(vh)$/i);

//            if (dim.length) {
//                switch (dim[0]) {
//                    case "px":
//                        return parseFloat(val);
//                    case "vh":
//                        return $(window).height() * (parseFloat(val) / 100);
//                    case "%":
//                        return object.width() * (parseFloat(val) / 100);
//                }
//            } else {
//                return undefined;
//            }
//        }

//        function toggleSwiperInnerVideos(swiper) {
//            var videos;

//            $.grep(swiper.slides, function (element, index) {
//                var $slide = $(element),
//                    video;

//                if (index === swiper.activeIndex) {
//                    videos = $slide.find("video");
//                    if (videos.length) {
//                        videos.get(0).play();
//                    }
//                } else {
//                    $slide.find("video").each(function () {
//                        this.pause();
//                    });
//                }
//            });
//        }

//        function toggleSwiperCaptionAnimation(swiper) {
//            if (isIE() && isIE() < 10) {
//                return;
//            }

//            var prevSlide = $(swiper.container),
//                nextSlide = $(swiper.slides[swiper.activeIndex]);

//            prevSlide
//                .find("[data-caption-animate]")
//                .each(function () {
//                    var $this = $(this);
//                    $this
//                        .removeClass("animated")
//                        .removeClass($this.attr("data-caption-animate"))
//                        .addClass("not-animated");
//                });

//            nextSlide
//                .find("[data-caption-animate]")
//                .each(function () {
//                    var $this = $(this),
//                        delay = $this.attr("data-caption-delay");

//                    setTimeout(function () {
//                        $this
//                            .removeClass("not-animated")
//                            .addClass($this.attr("data-caption-animate"))
//                            .addClass("animated");
//                    }, delay ? parseInt(delay) : 0);
//                });
//        }

//        $(document).ready(function () {
//            o.each(function () {
//                var s = $(this);

//                var pag = s.find(".swiper-pagination"),
//                    next = s.find(".swiper-button-next"),
//                    prev = s.find(".swiper-button-prev"),
//                    bar = s.find(".swiper-scrollbar"),
//                    h = getSwiperHeight(o, "height"), mh = getSwiperHeight(o, "min-height");
//                s.find(".swiper-slide")
//                    .each(function () {
//                        var $this = $(this),
//                            url;
//                        if (url = $this.attr("data-slide-bg")) {
//                            $this.css({
//                                "background-image": "url(" + url + ")",
//                                "background-size": "cover"
//                            });
//                        }
//                    })
//                    .end()
//                    .find("[data-caption-animate]")
//                    .addClass("not-animated")
//                    .end()
//                    .swiper({
//                        autoplay: s.attr("data-autoplay") ? s.attr("data-autoplay") === "false" ? undefined : s.attr("data-autoplay") : 5000,
//                        direction: s.attr("data-direction") ? s.attr("data-direction") : "horizontal",
//                        effect: s.attr("data-slide-effect") ? s.attr("data-slide-effect") : "slide",
//                        speed: s.attr("data-slide-speed") ? s.attr("data-slide-speed") : 600,
//                        keyboardControl: s.attr("data-keyboard") === "true",
//                        mousewheelControl: s.attr("data-mousewheel") === "true",
//                        mousewheelReleaseOnEdges: s.attr("data-mousewheel-release") === "true",
//                        nextButton: next.length ? next.get(0) : null,
//                        prevButton: prev.length ? prev.get(0) : null,
//                        pagination: pag.length ? pag.get(0) : null,
//                        paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
//                        paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
//                            return '<span class="' + className + '">' + (index + 1) + "</span>";
//                        } : null : null,
//                        scrollbar: bar.length ? bar.get(0) : null,
//                        scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
//                        scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
//                        loop: s.attr("data-loop") !== "false",
//                        onTransitionStart: function (swiper) {
//                            toggleSwiperInnerVideos(swiper);
//                        },
//                        onTransitionEnd: function (swiper) {
//                            toggleSwiperCaptionAnimation(swiper);
//                        },
//                        onInit: function (swiper) {
//                            toggleSwiperInnerVideos(swiper);
//                            toggleSwiperCaptionAnimation(swiper);

//                            var o = $(swiper.container).find(".rd-parallax");
//                            if (o.length && window.RDParallax) {
//                                o.RDParallax({
//                                    layerDirection: ($("html").hasClass("smoothscroll") || $("html").hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"
//                                });
//                            }
//                        }
//                    });

//                $(window)
//                    .on("resize", function () {
//                        var mh = getSwiperHeight(s, "min-height"),
//                            h = getSwiperHeight(s, "height");
//                        if (h) {
//                            s.css("height", mh ? mh > h ? mh : h : h);
//                        }
//                    })
//                    .load(function () {
//                        s.find("video").each(function () {
//                            if (!$(this).parents(".swiper-slide-active").length) {
//                                this.pause();
//                            }
//                        });
//                    })
//                    .trigger("resize");
//            });
//        });
//    }
//})(jQuery);


/**
 * @module       Countdown
 * @description  Enables Countdown Plugin
 */

//(function ($) {
//    include("/Scripts/countdown.js");
//    var o = $(".countdown"),
//        type = o.attr("data-type"),
//        time = o.attr("data-time"),
//        format = o.attr("data-format");

//    if (o.length) {

//        var d = new Date();
//        d.setTime(Date.parse(time)).toLocaleString();

//        $(document).ready(function () {
//            var settings = [];

//            settings[type] = d;
//            settings["format"] = format;

//            o.countdown(settings);
//        });
//    }
//})(jQuery);

/* Parallax
=============================================*/
//(function () {
//    include("/Scripts/jquery.rd-parallax.js");
//})(jQuery);
