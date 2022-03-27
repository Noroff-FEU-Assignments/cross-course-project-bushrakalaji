
const cartItems = JSON.parse(localStorage.getItem("cartList"));

console.log(cartItems);
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const emptyCart = document.querySelector(".cartSections")
if (cartItems === null ) {
    emptyCart.innerHTML = `
    <section class="embtyCart">
    <div><h2> There is no items yet </h2></div>
    <div class="cartPage_img" > <img src="../images/add-to-cart.png" alt=""></div>
   </section>`
    console.log("hello")
}
else{
let total = 0 ; 
cartItems.forEach(cartElement => {
    total += cartElement.price;
    cartContainer.innerHTML += `
    <div class="items cart-items">
    <div class="item-grid cart-item_img"><a href="${cartElement.Url}"><img src=${cartElement.image} alt="woman wearing a raincoat" /></a></div>
    <div class=item-des> <h2>${cartElement.name}</h2>
    <h3>${cartElement.catagory}</h3></div>
    <p>${cartElement.price}$</p>
    <button type="button" class= "blue-botton cta_blue-big" data-product="${cartElement.id}">Remove</button>
  </div>
</div>`

});

totalContainer.innerHTML+= `Total : ${total}$`;

 }