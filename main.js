$(document).ready(function () {

  //Header, radio buttons
  var $radio = $(".header__radio-button")
  
  $radio.on("click", function(){
    $radio.removeClass("header__radio-button--active");
    $(this).addClass("header__radio-button--active");
  });


});

  //TODO: Need to fix clickable area for radio buttons