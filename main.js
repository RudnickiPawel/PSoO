$(document).ready(function () {
  //slick
  $('.slick__images-container').slick({
    variableWidth: false,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    dots: false,
    arrows: true,
    infinite: true,
    centerPadding: '0px',
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slide: '.slick__item',
    appendArrows: '.slick__images-container',
    prevArrow: '<span class="slick__prev"><svg xmlns="http://www.w3.org/2000/svg" width="34.139" height="55.918" viewBox="0 0 34.139 55.918"><path d="M273.32,2465.373c-.061-.074-.113-.152-.17-.227s-.129-.169-.189-.257-.112-.182-.167-.274-.1-.159-.142-.241-.092-.189-.137-.285-.084-.172-.121-.261-.069-.187-.1-.281-.071-.19-.1-.288-.049-.189-.073-.284-.053-.2-.073-.3-.035-.22-.05-.329c-.013-.089-.029-.176-.039-.265a6.2,6.2,0,0,1,0-1.214c.009-.094.026-.184.04-.276.015-.107.028-.213.049-.319s.05-.208.076-.312.043-.182.07-.271.069-.2.1-.3.062-.18.1-.268.084-.183.128-.274.082-.182.13-.271.1-.173.154-.259.1-.173.156-.257.137-.188.206-.281c.051-.067.1-.136.152-.2a6.143,6.143,0,0,1,.441-.482c.009-.009.017-.02.027-.03l21.777-21.778a6.151,6.151,0,0,1,8.7,8.7l-17.178,17.458L304.2,2478.9a6.151,6.151,0,0,1-8.7,8.7l-21.778-21.778-.014-.015Q273.506,2465.6,273.32,2465.373Z" transform="translate(-271.926 -2433.484)" /></svg></span>',
    nextArrow: '<span class="slick__next"><svg xmlns="http://www.w3.org/2000/svg" width="34.139" height="55.918" viewBox="0 0 34.139 55.918"><path d="M1682.672,2465.373c.06-.074.113-.152.169-.227s.129-.169.189-.257.112-.182.167-.274.1-.159.142-.241.093-.189.137-.285.084-.172.121-.261.069-.187.1-.281.071-.19.1-.288.049-.189.073-.284.053-.2.073-.3.035-.22.05-.329c.013-.089.029-.176.039-.265a6.2,6.2,0,0,0,0-1.214c-.009-.094-.026-.184-.04-.276-.015-.107-.027-.213-.049-.319s-.05-.208-.076-.312-.043-.182-.07-.271-.069-.2-.1-.3-.061-.18-.1-.268-.084-.183-.128-.274-.082-.182-.13-.271-.1-.173-.153-.259-.1-.173-.156-.257-.137-.188-.206-.281c-.051-.067-.1-.136-.151-.2a6.167,6.167,0,0,0-.441-.482c-.009-.009-.017-.02-.027-.03l-21.777-21.778a6.151,6.151,0,1,0-8.7,8.7l17.178,17.458-17.119,17.459a6.151,6.151,0,0,0,8.7,8.7l21.778-21.778.014-.015Q1682.486,2465.6,1682.672,2465.373Z" transform="translate(-1649.926 -2433.484)" /></svg></span>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: true
        }
      },
    ]
  });

  //setting divs to be slick arrows
  $('.slick__prev').click(function () {
    $('.slick__images-container').slick('slickPrev');
  });
  $('.slick__next').click(function () {
    $('.slick__images-container').slick('slickNext');
  })

  //in video, hiding arrow button when video is playing
  var video_containers = [".video__wrapper", ".video__wrapper--treatment--big-video"];
  for (var i = 0; i < video_containers.length; i++) {
    $(video_containers[i]).on('click', function () {
      var video = $(this).find(".video__player--treatment").get(0);
      if (video.paused) {
        $(this).find(".video__button").hide();
      }
    });
  }


  //smoothly scrolling to next section
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  //header, radio buttons
  $(".header__radio-button").on("click", function () {
    $(".header__radio-button circle").removeClass("header__radio-button--active");
    $(this).find("circle:last").addClass("header__radio-button--active");
  });

  //when button to calculate bmi pressed
  $(".header__calculator__button-bmi").on("click", function () {
    var weight = parseFloat($('.header__user-weight').val()),
      height = parseFloat($('.header__user-height').val() / 100);
    output = (weight / (Math.pow(height, 2))).toFixed(2);
    if (!isNaN(weight) && !isNaN(height) && output != Infinity) {
      output = output.replace(".", ",");
      $('.header__calculator__output').append(output);
      $('.header__calculator__output-block').css('display', 'flex');
      $('.header__calculator__wrapper3').hide()
    }
    else
      alert("Wystąpił problem. Upewnij się, że pola są wypełnione poprawnie.")
  });
  $(".header__calculator__button-output").on("click", function () {
    $('.header__calculator__output').text("")
    $('.header__calculator__output-block').hide()
    $('.header__calculator__wrapper3').show()
  });
});