import {saleProductList} from "./contants/saleProductList.js";
console.log(saleProductList);
let cartArray = [];

const productContainer = document.querySelector(".sale-page");
const cartNumberLength = document.querySelector(".cart-number");
saleProductList.forEach((product) => {
  productContainer.innerHTML += `
  <div class="items  item4">
        <div class="item-grid"><a href="${product.Url}"><img src=${product.image} alt="woman wearing a raincoat"/></a></div>
        <h2>${product.name}</h2>
        <h3>${product.catagory}</h3>
        <p class="after-sale">${product.price}$</p>
        <h4 class="before-sale">${product.oldPrice}$</h4>
        <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>
      </div>
  </div>
    `;
});

const addToCart = document.querySelectorAll("button");
addToCart.forEach((button) => {
  button.addEventListener("click", handleclick);



});

function handleclick(event){
    // const id = this.dataset.product;
    // cartArray.push(event.target.dataset.product);
    const itemToAdd = saleProductList.find(item => item.id == event.target.dataset.product);
    cartArray.push(itemToAdd);
    console.log(cartArray);
    localStorage.setItem("cartNumber", JSON.stringify(cartArray.length))
    localStorage.setItem("cartList", JSON.stringify(cartArray));
    showNumber()
   ;
}

function showNumber(){   
     let cartStorge = JSON.parse(localStorage.getItem("cartNumber"))
    cartNumberLength.innerHTML ="";
    cartNumberLength.innerHTML = cartStorge;
  
    
}