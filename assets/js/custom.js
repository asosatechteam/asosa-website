define(["jquery", "cookie"], function () {
    function a() {
        var a = $(this).scrollTop();
        a > 70 && a < 360
            ? $(".header").removeClass("header--scrolled")
            : a > 360
            ? $(".header").addClass("header--scrolled")
            : a > 70 && a < 360 && ($(".header").removeClass("header-hide header--scrolled"), $(".header").removeClass("header--scrolled"));
    }
    function b() {
        var a = $(this).scrollTop();
        a > 70 && a < 360
            ? ($(".header").addClass("header-hide"), $(".header").removeClass("header--scrolled"))
            : a > 360
            ? ($(".header").addClass("header--scrolled"), $(".header").removeClass("header-hide"))
            : a > 70 && a < 360
            ? ($(".header").removeClass("header--scrolled"), $(".header").addClass("header-hide"), $(".header").removeClass("header--scrolled"))
            : a < 70 && $(".header").removeClass("header-hide header--scrolled");
    }
    var c = "";
    void 0 === getCookie("theapp") && ((c = window.location.search), document.referrer.length > 0 && (c += "&referrer=" + document.referrer), c.length > 0 && setCookie("theapp", c, { domain: "theappsolutions.com", expires: 10368e3 })),
        $(window).load(function () {
            a();
        }),
        "/industry/" !== window.location.pathname.substr(0, 10) &&
        "/services/testing/" !== window.location.pathname.substr(0, 18) &&
        "/services/business-analysis/" !== window.location.pathname.substr(0, 28) &&
        "/services/cloud-engineering/" !== window.location.pathname.substr(0, 28) &&
        "/services/ml-engineering/" !== window.location.pathname.substr(0, 25) &&
        "/services/data-engineering/" !== window.location.pathname.substr(0, 27) &&
        "/services/google-cloud-partner/" !== window.location.pathname.substr(0, 33)
            ? $(window).scroll(function () {
                  b();
              })
            : $(".header").addClass("header--scrolled"),
        $(document).ready(function () {
            $(".wrap-body").append(
                $("<div/>")
                    .addClass("menu-overlay")
                    .append($("<span/>").addClass("close-menu-btn pointer"))
                    .append($("<ul/>").append($(".main-menu li").clone()))
            ),
                $(".menu-overlay #showmore-menu").hide(),
                $("#showmore-menu").on("click", function () {
                    $(".menu-overlay").fadeIn();
                }),
                $(".close-menu-btn").on("click", function () {
                    $(".menu-overlay").fadeOut();
                }),
                $(".js-calc-menu-btn").on("click", function () {
                    $(".menu-calc-overlay").fadeIn();
                }),
                $(".close-calc-btn").on("click", function () {
                    $(".menu-calc-overlay").fadeOut();
                });
        });
});
