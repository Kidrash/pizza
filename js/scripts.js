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

  $('.hov').hover(function () {
    $(this).animate({opacity:'0.3'});
    },
    function () {
    $(this).animate({opacity:'0'});
  })

  function orderPizza(){
    let typeOfPizza = ["Jalapenos", "Hawaaian", "Pepperoni", "BBQ Steak", "BBQ Chicken", "Italian Sausage", "Black Olives", "Green Olives",]
    let pizzaSize = documentGetElementById("Slice-size");
    for (let i = 0; i < pizzaSize.length; i++)
      if(pizzaSize[i].checked) {
        let selectedSize = pizzaSize[i].value;
        receipt =receipt + "<strong>Size: </strong>" + selectedSize + "<br>";
      };
  };
  if(selectedSize === "Small"){
    total +=500;
  } else if (selectedSize === "Medium") {
    total += 700;
} else if (selectedSize === "Large") {
    total += 1000;
} else if (selectedSize === "Mega") {
    total += 1250;
};

function totalFlavor(receipt,total) {
  var selectedFlavor = document.getElementsByClassName("flavor");
  for (var i = 0; i < selectedFlavor.length; i++) 
      if (cheeseArray[i].checked) {
          var selectedFlavor = selectedFlavor[i].value;
          receipt = receipt + "+ " + selectedFlavor + "<br>";
      };
  };
  
    if (selectedFlavor === "Jalapenos") {
      total = total
  } else if (selectedCheese === "Hawaaian") {
      total = total
  } else if (selectedCheese === "BBQ Steak") {
      total = total
  } else if (selectedCheese === "BBQ Chicken") {
      total = total
  } else if (selectedCheese === "Italian Sausage") {
      total = total
  } else if (selectedCheese === "Black Olives") {
      total = total   
  } else if (selectedCheese === "Green Olives") {
      total = total
  } else if (selectedCheese === "Pepperoni") {
      total = total
  };
  totalCrust(receipt,total);
});
function totalCrust(receipt,total) {
  var selectedCrust = document.getElementsByClassName("crustp");
  for (var i = 0; i < selectedCrust.length; i++) 
      if (selectedCrust[i].checked) {
          var selectedCrust = selectedCrust[i].value;
          receipt = receipt + "+ " + selectedCrust + "<br>";
      };
  };
  
  if (selectedCrust === "Crispy") {
      total = total
  } else if (selectedCrust === "Stuffed") {
      total = total
  } else if (selectedCrust === "Gluten-free") {
      total += 150
  } else if (selectedCrust === "Thin Crust") {
      total = total
  } else if (selectedCrust === "Thick Crust") {
      total = total
  };
function printInvoice(receipt,total) {
  document.getElementById("Order-Now").innerHTML = receipt + "<hr>" + "<strong>Your total will be:</strong> KSH" + total;
};
function clearForm() {
  document.getElementById("Order Now").innerHTML = "Order Now!";
  document.getElementById("Slice-size").reset();
  document.getElementById("flavor").reset();
  document.getElementById("crust").reset();
};


