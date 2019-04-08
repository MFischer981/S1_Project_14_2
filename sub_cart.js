"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Micah Fischer
   Date:   4-7-19

   Filename: sub_cart.js

   Functions List:
   addItem(i)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
// Create global array for sandwhich added to cart.
var sandwhichCart;
// Assign buttons to NodeList
var btns = document.querySelectorAll('.addButton');
// Create empty arraywhich array.
var sandwhichQty = [];
// Run for loop for the number of add to cart buttons.
for (var i = 0; i < btns.length; i++) {
      // Push a 0 to the sandwhichQty array, which will store the quantity of each sandwhich.
      sandwhichQty.push(0);
      // Assign new HTML to each button with onclick function.
      btns[i].outerHTML = "<input class='addButton' type='button' value='Add to Order' onclick='addItem(" + i + ")'/>"
}

// Add items function
function addItem(i) {
      // Get content of sandwhich item.
      var sandwhichCart = event.target.parentNode.childNodes[3].innerHTML;
      // Get last four character in string of price and convert them to a floating value.
      var sandwhichPrice = parseFloat(event.target.parentNode.childNodes[3].childNodes[7].innerHTML.slice(-4));
      // Increase sandwhichQty array value based on parameter.
      sandwhichQty[i]++;
      // Calculate the total based on the quantity and price.
      var itemTotal = sandwhichQty[i] * sandwhichPrice;
      // If statement based on sandwhichQty, if Qty is less than 1 add item div into the element with the id of cart, otherwise only change the span with the sandwhich quantity and recalculate the total price.
      if (sandwhichQty[i] <= 1) {
            document.getElementById("cart").innerHTML += "<div id='item" + i + "'><span>" + sandwhichQty[i] + "</span>" + sandwhichCart + "</div>";
            document.querySelector("aside>div#item" + i + ">p:last-of-type").innerHTML = "$" + sandwhichPrice + " x " + sandwhichQty[i] + " = <b>$" + itemTotal.toFixed(2) + "</b>";
      } else {
            document.querySelector("aside>div#item" + i + " span").innerHTML = sandwhichQty[i];
            document.querySelector("aside>div#item" + i + ">p:last-of-type").innerHTML = "$" + sandwhichPrice + " x " + sandwhichQty[i] + " = <b>$" + itemTotal.toFixed(2) + "</b>";
      }
}