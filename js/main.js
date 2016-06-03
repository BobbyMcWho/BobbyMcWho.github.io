$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var h = $('.hero').height() + 50;
        $('.hero').height(h);
        var m = 0.4 * h - 40;
        $('.title').css('margin-top', m + 'px');
    }
    $('.navbar').affix({
        offset: {
            top: function() {
                return $('.hero').height() ;
            }
        }
    });
    var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  nav.find('a').blur();
});

$('.downArrow, .nav a,.navbar-brand').on('click', function () {
  var $el = $(this), id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  $el.blur();

  return false;
});
$('[data-toggle="tooltip"]').tooltip();
//protect my address
$('.email').attr('href','mailto:bobby@rmcd.io');
});
