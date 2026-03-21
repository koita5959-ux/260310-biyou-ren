$(function () {
    var $heroSlider = $(".slick_fv");

    function activateHeroCurtain($slide) {
        var $curtains = $slide.find(".fade");
        $(".slick_fv .fade").removeClass("fade-active");

        if (!$curtains.length) {
            return;
        }

        window.requestAnimationFrame(function () {
            $curtains.addClass("fade-active");
        });
    }

    if ($heroSlider.length) {
        $heroSlider.on("init", function (event, slick) {
            activateHeroCurtain($(slick.$slides.get(slick.currentSlide)));
        });

        $heroSlider.on("afterChange", function (event, slick, currentSlide) {
            activateHeroCurtain($(slick.$slides.get(currentSlide)));
        });

        $heroSlider.slick({
            autoplay: true,
            dots: true,
            fade: true,
            speed: 1500,
            autoplaySpeed: 4000,
            prevArrow: '<img src="https://miyazaki-ren.com/beauty/images/arrow01-right.png" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="https://miyazaki-ren.com/beauty/images/arrow01-right.png" class="slide-arrow next-arrow">'
        });
    }
});


$(function () {
  var isSubpage = $("body").hasClass("page-subpage");

  function syncHeaderState() {
    if (isSubpage || $(window).scrollTop() > 100) {
      $("#header_in, #header_in a").addClass("is_active");
    } else {
      $("#header_in, #header_in a").removeClass("is_active");
    }
  }

  syncHeaderState();
  $(window).on("scroll", syncHeaderState);
});
