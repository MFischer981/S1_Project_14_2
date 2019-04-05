"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: 
   Date:   

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
var sandwhichCart;
var btns = document.querySelectorAll('.addButton');
var sandwhichQty = [];
for (var i = 0; i < btns.length; i++) {
      sandwhichQty.push(0);
      btns[i].outerHTML = "<input class='addButton' type='button' value='Add to Order' onclick='addItem(" + i + ")'/>"
      btns[i].addEventListener('click', function (event) {
            var sandwhichCart = event.target.parentNode.childNodes[3].innerHTML;
            document.getElementById("cart").innerHTML += "<div><span>" + 0 + "</span>" + sandwhichCart + "</div>";
      }, false);
}

function addItem(i) {
      var sandwhichCart = event.target.parentNode.childNodes[3].innerHTML;
      sandwhichQty[i]++;
      document.getElementById("cart").innerHTML += "<div><span>" + sandwhichQty[i] + "</span>" + sandwhichCart + "</div>";
}