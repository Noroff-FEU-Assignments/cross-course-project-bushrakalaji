import { saleProductList } from "./contants/saleProductList.js";

console.log(saleProductList);
let cartArray = [];

const cartNumberLength = document.querySelector(".cart-number");

const detailsPage = document.querySelector(".all-item");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const prdctId = params.get("id");

const singleUrl = "https://elated-kepler-1f7dec.netlify.app/" + prdctId;


function prdct(product) {
  
    detailsPage.innerHTML += `
    
    <div class="item-page_img">

    <img src=${product.pageImg} alt="men wearing RainyDays jacet" class="item3-img ">
   

  </div>

  <div class="item-page-informastion">

      <div class="item-info">
      <h1>${product.name}</h1>
      <p>${product.catagory}</p>
      <h3>Item number : ${product.itemNumber}</h3>
      </div>

      <div>
        <h2>Color</h2>
        <p>${product.color}</p>
      </div>

      <div>
        <h2>Size</h2>
        <p>One size</p>
      </div>

      <div class="item-price">
               <div class="sale-price">
              <h2>${product.price}$</h2>
              <h4 class="before-sale bfr-sale">800$</h4>
           
              </div>
                <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>

                </div>
            
    `

  
}

prdct(saleProductList[0]);


const addToCart = document.querySelectorAll("button");
addToCart.forEach((button) => {
  button.addEventListener("click", handleclick);
});

function handleclick(event) {
  // const id = this.dataset.product;
  // cartArray.push(event.target.dataset.product);
  const itemToAdd = saleProductList.find(
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