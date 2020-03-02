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
      total += 3
  } else if (selectedCrust === "Thin Crust") {
      total = total
  } else if (selectedCrust === "Thick Crust") {
      total = total
  };
  totalSauce(receipt,total);

function totalSauce(receipt,total) {
  var sauceArray = document.getElementsByClassName("sauce_choice");
  for (var i = 0; i < sauceArray.length; i++) { // declare counter variable set to 0, increment countery until it is no longer less than the size of the array
      if (sauceArray[i].checked) {
          var selectedSauce = sauceArray[i].value;
          receipt = receipt + "+ " + selectedSauce + "<br>";
      };
  };
  // there is no cost change for different sauces, but this code is here for quickly updating costs in the future
  // if (selectedSauce === "Marinara Sauce") {
  //     total = total
  // } else if (selectedSauce === "White Sauce") {
  //     total = total
  // } else if (selectedSauce === "Barbeque Sauce") {
  //     total = total
  // } else if (selectedSauce === "No Sauce") {
  //     total = total
  // };
  totalVeggies(receipt,total);
};
function totalVeggies(receipt,total) {
  var veggiesArray = document.getElementsByClassName("veggies_type");
  var mySelectedVeggies = []
  var veggiesTotal = 0
  for (var i = 0; i < veggiesArray.length; i++) {
      if (veggiesArray[i].checked) {
          mySelectedVeggies.push(veggiesArray[i].value);
          receipt = receipt + "+ " + veggiesArray[i].value + "<br>";
      };
  };
  var veggiesCount = mySelectedVeggies.length;
  if (veggiesCount > 1) {
      veggiesTotal = (veggiesCount - 1);
  } else {
      veggiesTotal = 0;
  };
  total = total + veggiesTotal;
  printInvoice(receipt,total);
};
function printInvoice(receipt,total) {
  document.getElementById("your_order").innerHTML = receipt + "<hr>" + "<strong>Your total will be:</strong> $" + total;
};
function clearForm() {
  document.getElementById("your_order").innerHTML = "Place your order today!";
  document.getElementById("size_form").reset();
  document.getElementById("meat_form").reset();
  document.getElementById("cheese_form").reset();
  document.getElementById("crust_form").reset();
  document.getElementById("sause_form").reset();
  document.getElementById("veggies_form").reset();
};


