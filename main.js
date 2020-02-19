$(document).ready(function () {
  //in video, hiding arrow button when video is playing
  $('.video__wrapper').on('click', function(){
    var video = $(this).find(".video__player").get(0);

    if ( video.paused ) {
        $(this).find(".video__button").hide();
    }
  });

  //smoothly scrolling to next section
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
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
    if (!isNaN(weight) && !isNaN(height) && output!=Infinity) {
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