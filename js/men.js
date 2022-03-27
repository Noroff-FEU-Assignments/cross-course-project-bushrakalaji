import { menProductList } from "./contants/menProductList.js";
console.log(menProductList);
let cartArray = [];

const productContainer = document.querySelector(".man-page");
const cartNumberLength = document.querySelector(".cart-number");
menProductList.forEach((product) => {
  productContainer.innerHTML += `
  
 
  <div class="items"> 
  
<a href="menDetails.html?id=${product.id} class="item-grid"" ><img src=${product.image} alt="woman wearing a raincoat"></a>
  <h2>${product.name}</h2>
  <h3>${product.catagory}</h3>
  <p>${product.price}$</p>
  
  <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>
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
  const itemToAdd = menProductList.find(
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