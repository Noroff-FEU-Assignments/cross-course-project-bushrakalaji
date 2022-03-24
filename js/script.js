import {productArray} from "./contants/product.js";
console.log(productArray);
const addToCart = document.querySelectorAll("button");

addToCart.forEach(function(button) {
    button.onclick = function(event){
        console.log(event.target);
    }

})
