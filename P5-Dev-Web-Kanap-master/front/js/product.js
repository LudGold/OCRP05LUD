/* liste elements à ajouter sur page produit */

let elementImg = document.querySelector(".item__img");
let elementdescription = document.querySelector("#description");
let elementPrice = document.querySelector("#price");
let elementTitle = document.querySelector("#title");
let elementColors = document.querySelector("#colors");
let elementButton = document.getElementById("#addToCart");
let elementQuantity = document.getElementById("#quantity");

/* cherche l'id correspondant au produit présent sur la page accueil */
const pageString = window.location.search;
const idProduct = new URLSearchParams(pageString);
const id = idProduct.get("id");
/* appel produits via API */
function getProduct(){
  fetch(`http://localhost:3000/api/products/${id}`)

  .then(response => {if (response.ok){return response.json();}})
    .then(product => {listProduct(product)})
    /* en cas d'erreur renvoit à page accueil
    .catch(error =>window.location.href = "/html/") */
    .catch(error => alert("une erreur est survenue")); 
  
    };



  getProduct();

/* AFFICHE LA LISTE DE TOUS LES ELEMENTS DE L'API */
    function listProduct(product) {

  elementImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}"><img/>`;
  elementTitle.innerHTML = `<h1 id="title">${product.name}</h1>`;
  elementPrice.innerHTML = `<span id ="price">${product.price}</span>`;

  elementdescription.innerHTML = `<p id="description">${product.description}</p>`; 
  for (let i=0; i<product.colors.length;i++){
    elementColors.innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>`;
  }
}
/* intègre les quantités et couleurs en cliquant sur le panier */
elementButton.addEventListener("click", function(event){
  console.log(elementColors.value)
  console.log(elementQuantity.value)
  localStorage.setItem("cart",JSON.stringify({id:id,colorSelected:elementColors.value, quantitySelected:elementQuantity.value}))
})

      
/* gestion quantité de canapés */
/* let elementQuantity = document.querySelector("#quantity");
function element()
{
  document */
  /* .addEventListener("input", function(e) {
  if  */
  

          
    
    
          
           


  
  
  