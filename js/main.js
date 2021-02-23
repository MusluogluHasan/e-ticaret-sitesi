/* Search Open********************************************/
$(document).on('click', '.search', function () {
    $('.search-bar').addClass('search-bar-active');
});

/*Search Close*****************************************/
$(document).on('click', '.search-cancel', function () {
    $('.search-bar').removeClass('search-bar-active');
});

/* LOG IN --- SIGN UP***************************/
$(document).on('click', '.user', function () {
    $('.form').addClass('login-form-active');
});
$(document).on('click', '.sign-up-btn', function () {
    $('.form').removeClass('login-form-active');
});
$(document).on('click', '.sign-up-btn', function () {
    $('.form').addClass('sign-up-active');
});
$(document).on('click', '.form-cancel', function () {
    $('.form').removeClass('login-form-active');
});
$(document).on('click', '.form-cancel', function () {
    $('.form').removeClass('sign-up-active');
});
$(document).on('click', '.form-cancel', function () {
    $('.form').removeClass('password-form-active');
});
$(document).on('click', '.forget', function () {
    $('.form').removeClass('sign-up-active');
});
$(document).on('click', '.forget', function () {
    $('.form').addClass('login-form-active');
});
$(document).on('click', '.password', function () {
    $('.form').removeClass('login-form-active');
});
$(document).on('click', '.password', function () {
    $('.form').addClass('password-form-active');
});

/* SLİDER **************************************/
$(document).ready(function () {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

/* FEATURE SLİDER ***************************************/
$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        auto: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

/* SCROLL BUTTON ****************************************/
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$("#toTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

/* FİX-NAV SCROLL **************************************/
$(window).scroll(function () {
    if ($(document).scrollTop() > 1) {
        $('.navigation').addClass('nav-fix');
    } else {
        $('.navigation').removeClass('nav-fix')
    }
})

/*MENU RESPONSİVE TOGGLE********************************************************* */
$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active');
        $('.navigation').toggleClass('active');
    });
});