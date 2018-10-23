(function($) {
  'use strict'

  $('.grid').imagesLoaded(function() {
    // filter items on button click
    $('.gallery-menu').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter')
      $grid.isotope({
        filter: filterValue,
      })
    })
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      },
    })
  })

  $('.gallery-menu button').on('click', function(event) {
    $(this)
      .siblings('.active')
      .removeClass('active')
    $(this).addClass('active')
    event.preventDefault()
  })

  /*--
    Magnific Popup
    ------------------------*/
  $('.img-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  })

  /*--------------------------
        ScrollUp
    ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
  })

  /*--
       Testimonial Slick Carousel
       -----------------------------------*/
  $('.testimonial-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.slider-nav',
  })

  /*--
        Testimonial Slick Carousel as Nav
    -----------------------------------*/
  $('.testimonial-image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-text-slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  })

  /*--
    Smooth Scroll
    -----------------------------------*/
  $('.scroll-up').on('click', function(e) {
    e.preventDefault()
    var link = this
    $.smoothScroll({
      scrollTarget: link.hash,
    })
  })

  /* jQuery MeanMenu */
  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu-area .mobile-menu',
  })

  /*----------------------------
        youtube video
        ------------------------------ */
  $('.youtube-bg').YTPlayer({
    containment: '.youtube-bg',
    autoPlay: true,
    loop: true,
  })

  /*---------------------
        Countdown
    --------------------- */
  $('[data-countdown]').each(function() {
    var $this = $(this),
      finalDate = $(this).data('countdown')
    $this.countdown(finalDate, function(event) {
      $this.html(
        event.strftime(
          '<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'
        )
      )
    })
  })

  /* counterUp */
  $('.count').counterUp({
    delay: 10,
    time: 1000,
  })
})(jQuery)
