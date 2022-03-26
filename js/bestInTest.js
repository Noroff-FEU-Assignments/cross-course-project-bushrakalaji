import { productArray } from "./contants/bestInTestPrList.js";
console.log(productArray);
let cartArray = [];

const productContainer = document.querySelector(".best-product");
const cartNumberLength = document.querySelector(".cart-number");
productArray.forEach((product) => {
  productContainer.innerHTML += `
     
  <div class="items">
        <div class="item-grid"><a href="${product.Url}"><img src=${product.image} alt="woman wearing a raincoat" /></a></div>
        <h2>${product.name}</h2>
        <h3>${product.catagory}</h3>
        <p>${product.price} $</p>
        <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>
      </div>
  </div>
     
    
    `;
});

const addToCart = document.querySelectorAll("button");
addToCart.forEach((button) => {
  button.addEventListener("click", handleclick);
});

function handleclick(event) {
  // const id = this.dataset.product;
  // cartArray.push(event.target.dataset.product);
  const itemToAdd = productArray.find(
    (item) => item.id == event.target.dataset.product
  );
  cartArray.push(itemToAdd);
  console.log(cartArray);
  localStorage.setItem("cartNumber", JSON.stringify(cartArray.length));
  localStorage.setItem("cartList", JSON.stringify(cartArray));
  showNumber();
}

function showNumber() {
   
  let cartStorge = JSON.parse(localStorage.getItem("cartNumber"));
  cartNumberLength.innerHTML = "";
  cartNumberLength.innerHTML = cartStorge;
}
