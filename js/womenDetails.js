// import { womenProductList } from "./contants/womenProductList.js";

// console.log(womenProductList);
let cartArray = [];

const cartNumberLength = document.querySelector(".cart-number");

const detailsPage = document.querySelector(".all-item");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const singleUrl ="https://rainydays.bushrakalaji.com/wp-json/wc/store/products/" + id;

async function singleResult() {
  try {
    const responce = await fetch(singleUrl);
    const singelResult = await responce.json();
    console.log({ singelResult });
    
    detailsPage.innerHTML += `

    <div class="item-page_img">

    <img src=${singelResult.images[1].src} alt="men wearing RainyDays jacet" class="item3-img ">
    </div>
    
    <div class="item-page-informastion">
    
    <div class="item-info">
    <h1>${singelResult.name}</h1>
      <p>${singelResult.tags[0].name}</p>
      <h3>Item number : ${singelResult.sku}</h3>
    </div>
    
    <div>
    <h2>Color</h2>
    <p>${singelResult.short_description}</p>
    </div>
    
    <div>
    <h2>Size</h2>
    <p>One size</p>
    </div>
    
    <div class="item-price">
    <h2>${singelResult.prices.price} ${singelResult.prices.currency_symbol}</h2>
    <button type="button" class= "blue-botton cta_blue-big" data-product="${singelResult.id}">Add to cart</button>
    </div>
  `;
  } catch (error) {
    console.log("error: ", error)
  }
}
singleResult();
// function prdct(product) {
  
//     detailsPage.innerHTML += `
    
//     <div class="item-page_img">

//     <img src=${product.pageImg} alt="men wearing RainyDays jacet" class="item3-img ">
   

//   </div>

//   <div class="item-page-informastion">

//       <div class="item-info">
//       <h1>${product.name}</h1>
//       <p>${product.catagory}</p>
//       <h3>Item number : ${product.itemNumber}</h3>
//       </div>

//       <div>
//         <h2>Color</h2>
//         <p>${product.color}</p>
//       </div>

//       <div>
//         <h2>Size</h2>
//         <p>One size</p>
//       </div>

//       <div class="item-price">
//       <h2>${product.price}$</h2>
//       <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>
//       </div>
//     `

  
// }

// prdct(womenProductList[0]);


const addToCart = document.querySelectorAll("button");
addToCart.forEach((button) => {
  button.addEventListener("click", handleclick);
});

function handleclick(event) {
  // const id = this.dataset.product;
  // cartArray.push(event.target.dataset.product);
  const itemToAdd = womenProductList.find(
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