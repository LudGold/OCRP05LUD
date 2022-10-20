/* liste elements à ajouter sur page produit */

let elementImg = document.querySelector(".item__img");
let elementdescription = document.querySelector("#description");
let elementPrice = document.querySelector("#price");
let elementTitle = document.querySelector("#title");
let elementColors = document.querySelector("#colors");
let elementButton = document.getElementById("addToCart");
let elementQuantity = document.getElementById("quantity");

/* cherche l'id correspondant au produit présent sur la page accueil */
const pageString = window.location.search;
const idProduct = new URLSearchParams(pageString);
const id = idProduct.get("id");
/* appel produits via API */
function getProduct() {
  fetch(`http://localhost:3000/api/products/${id}`)

    .then(response => { if (response.ok) { return response.json(); } })
    .then(product => { listProduct(product) })
    /* en cas d'erreur renvoit à page accueil
    .catch(error =>window.location.href = "/html/") */
    .catch(error => alert("une erreur est survenue", error));
};

getProduct();

/* AFFICHE LA LISTE DE TOUS LES ELEMENTS DE L'API */
function listProduct(product) {

  elementImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}"><img/>`;
  elementTitle.innerHTML = `<h1 id="title">${product.name}</h1>`;
  elementPrice.innerHTML = `<span id ="price">${product.price}</span>`;
  elementdescription.innerHTML = `<p id="description">${product.description}</p>`;
  for (let i = 0; i < product.colors.length; i++) {
    //affiche les différentes couleurs du produit via l'api
    elementColors.innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>`;
  }
}

/* intègre et enregistre dans le localstorage les quantités et couleurs en cliquant sur le panier */
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}


// écoute les quantites et couleurs quand on click sur le panier
elementButton.addEventListener("click", function (event) {
  console.log(elementColors.value)
  console.log(elementQuantity.value)

  if (elementColors.value != "" && elementQuantity.value > 0 && elementQuantity.value <= 100) {
    addCart(elementQuantity.value, elementColors.value)
  }
  else {
    alert("Merci de choisir une couleur et une quantité comprise entre 1 et 100");
  }
}

);
//fonction qui récupère du localstorage les données ajoutées au panier 
function getCart() {
  if (localStorage.getItem("cart") == null) {
    return [];
  }
  else {
    return JSON.parse(localStorage.getItem("cart"));
  }
}
/* ajouter un produit avec quantité calculée dans le panier */
function addCart(elementQuantity, elementColors) {
  let cart = getCart();
  let product = cart.find((p) => p.id == id && p.colorSelected == elementColors)
  if (product != null) {
    product.quantitySelected += parseInt(elementQuantity);
    let index = cart.findIndex((p) => p.id == id && p.colorSelected == elementColors);
    cart[index] = product;
  } else {
    product = {}
    product.quantitySelected = parseInt(elementQuantity);
    product.colorSelected = elementColors;
    product.id = id;
    cart.push(product);
  }
  saveCart(cart);
}













