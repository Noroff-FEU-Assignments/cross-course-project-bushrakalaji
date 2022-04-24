// import {saleProductList} from "./contants/saleProductList.js";
// console.log(saleProductList);
let cartArray = [];

const productContainer = document.querySelector(".sale-page");
const cartNumberLength = document.querySelector(".cart-number");


const url = "https://rainydays.bushrakalaji.com/wp-json/wc/store/products"

async function getapi(){

  try {
    const responce = await fetch(url);
    const result = await responce.json();
    const filterResults = result.filter(item => item.categories[0].id === 20)
    console.log({filterResults});

    filterResults.forEach(function(prdcts) {
  
        productContainer.innerHTML +=  `
        <div class="items"> 
        <a href="saleDetails.html?id=${prdcts.id}" class="item-grid"><img src=${prdcts.images[0].src} alt="woman wearing a raincoat"></a>
          <h2>${prdcts.name}</h2>
          <h3>${prdcts.categories[0].name}</h3>
          <p class="after-sale">${prdcts.prices.sale_price}$</p>
          <h4 class="before-sale">${prdcts.prices.regular_price}$</h4>
          <button type="button" class= "blue-botton cta_blue-big" data-product="${prdcts.id}">Add to cart</button>
        </div>`  
      });
  }
  catch(error){
    console.log("error: ", error)
  }
}
getapi()

// saleProductList.forEach((product) => {
//   productContainer.innerHTML += `
//   <div class="items  item4">
//   <a href="saleDetails.html?id=${product.id} class="item-grid"" ><img src=${product.image} alt="woman wearing a raincoat"></a>
//         <h2>${product.name}</h2>
//         <h3>${product.catagory}</h3>
//         <p class="after-sale">${product.price}$</p>
//         <h4 class="before-sale">${product.oldPrice}$</h4>
//         <button type="button" class= "blue-botton cta_blue-big" data-product="${product.id}">Add to cart</button>
//       </div>
//   </div>
//     `;
// });

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