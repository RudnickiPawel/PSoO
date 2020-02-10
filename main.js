$(document).ready(function () {

  //Header, radio buttons
  $(".header__radio-button").on("click", function(){
    $(".header__radio-button circle").removeClass("header__radio-button--active");
    $(this).find("circle:last").addClass("header__radio-button--active");
  });


});