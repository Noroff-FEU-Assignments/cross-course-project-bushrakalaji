// import { productArray } from "./contants/product.js";
// console.log(productArray);
let cartArray = [];
const productContainer = document.querySelector(".best-product");
const cartNumberLength = document.querySelector(".cart-number");
const url = "https://rainydays.bushrakalaji.com/wp-json/wc/store/products?per_page=50";

async function getapi() {
  try {
    const responce = await fetch(url);
    const result = await responce.json();
    const filterResults = result.filter((item) => item.categories[0].id === 21);
    console.log({ filterResults });

    filterResults.forEach(function (prdcts) {
      productContainer.innerHTML += `
        <div class="items"> 
        <a href="womenDetails.html?id=${prdcts.id}" class="item-grid"><img src=${prdcts.images[0].src} alt="woman wearing a raincoat"></a>
          <h2>${prdcts.name}</h2>
          <h3>${prdcts.tags[0].name}</h3>
          <p>${prdcts.prices.price}$</p>
          <button type="button" class= "blue-botton cta_blue-big" data-product="${prdcts.id}">Add to cart</button>
        </div>`;
    });
  } catch (error) {
    console.log("error: ", error);
  }
}
getapi();

// productContainer.innerHTML += "";
// productArray.forEach((product) => {
//   productContainer.innerHTML += `
 
//         <div class="items">
//         <div class="item-grid"><a href="${product.Url}"><img src=${product.image} alt="woman wearing a raincoat"/></a></div>
//         <h2>${product.name}</h2>
//         <h3>${product.catagory}</h3>
//         <p>${product.price}$</p>
//        <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>
//        </div>
     
//       `;
// });

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
  cartNumberLength.innerHTML += cartStorge;
}
