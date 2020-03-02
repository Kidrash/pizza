$(Document).ready(function(){
  $('.Crustp').click(function(){
    $('.crustp').hide();
    $('#crust').toogle();
    $('#crust').show();
  })

  $("#crust").click(function(){
    $("#crust").hide();
    $(".crustp").toggle();
    $(".crustp").show();
  })

  $(".topsp").click(function(){
    $("#tops").toggle();
    $(".topsp").hide();
    $("#tops").show();
  })

 $("#tops").click(function(){
    $("#tops").hide();
    $(".topsp").toggle();
    $(".topsp").show();
  })

  $('.hov').hover(function () {
    $(this).animate({opacity:'0.3'});
    },
    function () {
    $(this).animate({opacity:'0'});
});

})