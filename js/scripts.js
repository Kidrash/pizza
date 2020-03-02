$(Document).ready(function(){
  $('.crust').click(function(){
    $('.crustp').hide();
    $('#crust').toogle();
    $('#crust').show();
  })

  $("#crust").click(function(){
    $("#crust").hide();
    $(".crustp").toggle();
    $(".crustp").show();
  })

 $("#top").click(function(){
    $("#top").hide();
    $(".topsp").toggle();
    $(".topsp").show();
  })
  function orderPizza(){
    let typeOfPizza = ["Jalapenos", "Hawaaian", "Pepperoni", "BBQ Steak", "BBQ Chicken", "Italian Sausage", "Black Olives", "Green Olives",]
  }

  $('.hov').hover(function () {
    $(this).animate({opacity:'0.3'});
    },
    function () {
    $(this).animate({opacity:'0'});
});


})