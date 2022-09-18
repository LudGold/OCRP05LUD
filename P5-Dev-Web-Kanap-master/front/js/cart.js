function getCart() {
  if (localStorage.getItem("cart") == null) {
    return [];
  }
  else {
    return JSON.parse(localStorage.getItem("cart"));

  }
}

let cart = getCart()
let totalPrice = 0

function getNumberProduct() {

  let number = 0;
  for (let quantityProduct of cart) {
    number += parseInt(quantityProduct.quantitySelected);
  }
  return number;
}
//modifier quantité panier
//ESSAI du 26 aout A REPRENDRE!!! changement de qte et supression panier
/* function changesNumberProduct (){
  let changeQuantity = new elementQuantity()
  let changeColors = new elementColors()
  let changeElementButton = new elementButton()
  console.log(changesNumberProduct)
elementButton.addEventListener("click", function (event) {
  console.log(new changeQuantity.value)
  console.log(new changeColors.value)
  changeCart(new changeQuantity.value, new changeColors.value);
 
}
)
} */

//retirer une quantité du panier
/* function removeFromCart(elementButton){
  let elementButton = getCart();
  cart = cart.filter(p => p.id != idProduct);
saveCart(elementButton)}
 */
//}
//function changeCart(elementButton,quantitySelected){
  //let elementButton = getCart();
  //let quantityProduct = cart.find(p==p.id ==idProduct)
 // if (quantityProduct != undefined){
    //quantityProduct.quantitySelected += elementQuantity
   // if(quantityProduct <= 0){
     // removeFromCart(quantityProduct);

   // }else{
    
  //saveCart(elementButton);
   // }}
 // }
//  
//const deleteItem = document.querySelector(".deleteItem");
//  deleteItem.forEach((getNumberProduct) => {
//   getNumberProduct.addEventListener('click', e => {
//   deleteItemSelect(e, itemsDom);
//  })});

// // Dans LocalStorage : suppression de l'article sélectionné //
// function deleteItemSelect(e, getCart) {
// let index = e.target.classList[1].slice();
// items.splice(index, 1);
// localStorage.setItem('cart__items', JSON.stringify(itemsDom));

// if (items.length === 0) {
// localStorage.removeItem('cart__items');
// }
// updateNumberArticles();
// }



let itemsDom = document.getElementById("cart__items")
for (let i = 0; i < cart.length; i++) {
  fetch(`http://localhost:3000/api/products/${cart[i].id}`)

    .then(response => { if (response.ok) { return response.json(); } })
    .then(product => {
      //fonction à passer ici afin que le prix monte direct et ne sois pas asyncrone avec le fetch à l'api
      totalPrice += parseInt(cart[i].quantitySelected) * parseInt(product.price);
      let totalPriceDom = document.getElementById("totalPrice")
      totalPriceDom.innerHTML = totalPrice;
      
      itemsDom.innerHTML += `<article class="cart__item" data-id="${cart[i].id}" data-color="${cart[i].colorSelected}}">
      <div class="cart__item__img">
        <img src="${product.imageUrl}" alt="${product.altTxt}é">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${product.name}</h2>
          <p>${cart[i].colorSelected}</p>
          <p>${product.price}</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantitySelected}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`
    })



    /* en cas d'erreur,renvoie à page accueil
    .catch(error =>window.location.href = "/html/") */
    .catch(error => alert("une erreur est survenue" + error));

}
let totalQuantity = document.getElementById("totalQuantity")
totalQuantity.innerHTML = getNumberProduct();



