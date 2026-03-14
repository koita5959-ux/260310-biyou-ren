$(function () {
    $(".slick_fv").slick({
        autoplay: true,
        dots: true,
        fade: true,
        speed: 1500,
        autoplaySpeed: 4000,
        prevArrow: '<img src="https://miyazaki-ren.com/beauty/images/arrow01-right.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="https://miyazaki-ren.com/beauty/images/arrow01-right.png" class="slide-arrow next-arrow">'
    });
});

$(window).on('scroll load', function() {
    // スクロールアニメーション
    var box = $('.fade');
    var animated = 'fade-active';
    box.each(function(){
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
        if(scrollPos > boxOffset - wh + 10 ){
            $(this).addClass(animated);
        }
    });
});


$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) { 
    // 100px 以上スクロールしたら
    $("#header_in, #header_in a").addClass("is_active");
  } else {
    $("#header_in, #header_in a").removeClass("is_active");
  }
});
