
  // variable déclarée hors de la fonction afin d'éviter l'effet asynchrone (prix sinon calculé qté par qté)
  let cart = getCart()
    // 0 Correspond à la notion de nombre de cette variable
  let totalPrice = 0   
  //Calcul automatique du prix global du panier
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
            <input onchange="updateQuantityCart(event,'${cart[i].id}')"  type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantitySelected}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem" onclick = "deleteCart('${cart[i].id}')" >Supprimer</p>
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

//déclaration des valeurs du champ de formulaire / regex
const formOrder = document.getElementById("order");

// ECOUTER CHAQUE IMPUT Des Champs du formulaire




 

//fonction pour l'obligation de remplir le champs et son message d'erreur


  //MARCHE POUR LE PRENOM PAS POUR LES AUTRES!!
    
  let inputFirstName= document.getElementById('firstName');
   inputFirstName.addEventListener("keyup",function(event){ 
      
  checkFirstName(event.target.value);
  return ; 
   
}); 

    //utilise un évenement "keyup" car la fonction utilisée est légere
  let inputLastName= document.getElementById('lastName');
    inputLastName.addEventListener("keyup",function(event){ 
    event.preventDefault();
  checkLastName(event.target.value);
  return ; 
});
let inputAddress= document.getElementById('address');
inputAddress.addEventListener("keyup",function(event){ 
  event.preventDefault();
  checkAddress(event.target.value);
  return ;
});
let inputCity= document.getElementById('city');
inputCity.addEventListener("keyup",function(event){ 
  event.preventDefault();
  checkCity(event.target.value);
  return ;
});
let inputEmail= document.getElementById('email');
inputEmail.addEventListener("change", function(event)
{ 
  event.preventDefault();
  checkEmail(event.target.value);
  return ;
});  

  

//on teste les expressions régulières des noms et prénoms
// pas de chiffres autorisés
 function checkFirstName(){
formFirstName = inputFirstName.value; 
/*  console.log(formFirstName) */ 
   let errorMSG = document.getElementById("firstNameErrorMsg");
var trueFirstName = (/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,20}$/);

if (!formFirstName) {
    errorMSG.innerText = "ce champs est obligatoire ";
    return true
  }
  else if (!trueFirstName.test(formFirstName)) {
    errorMSG.innerText = "doit etre compris entre 1 et 20 caractères - chiffres non autorisés"
    return false
  }
  errorMSG.innerText ="" ;
  return true 
}; 
 function checkLastName(){
  formLastName = inputLastName.value; 
    /* console.log(formLastName);  */
      let errorMSG = document.getElementById("lastNameErrorMsg");
    var validateLastName = (/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,30}$/);
  
    if (!formLastName) {
      errorMSG.innerText = " ce champs est obligatoire";
      return true
    }
    else if (!validateLastName.test(formLastName)) {
      errorMSG.innerText = "doit etre compris entre 1 et 30 caractères - chiffres non autorisés"
      return false
    }
    errorMSG.innerText ="" ;
    return true 
  };
   
  //Empêcher juste les caractères spéciaux pour adresse postale
  function checkAddress() {
     formAddress = inputAddress.value;
    /* console.log(formAddress);  */
    let errorMSG = document.getElementById("addressErrorMsg");
    const validateAddress = (/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{5,60}$/);
    if (!formAddress) {
      errorMSG.innerText = "ce champs est obligatoire"
      return true
    }
    else if (!validateAddress.test(formAddress)) {
       
      errorMSG.innerText = "adresse non conforme"
      return false
    }
    errorMSG.innerText ="" ;
    return true 
  };
  
  function checkCity() {
    formCity = inputCity.value;
     /* console.log(formCity);  */
    let errorMSG = document.getElementById("cityErrorMsg");
    const validateCity =( /^[A-Za-z]{3,30}$/); 
   
    if (!formCity) {
      errorMSG.innerText = "ce champs est obligatoire"
      return true
    }
    else if (!validateCity.test(formCity)) {
      
      errorMSG.innerText = "ville non conforme"
  
      return false
    }
    errorMSG.innerText ="" ;
  return true 
  };
  
  //ON TESTE L'EXPRESSION REGULIERE DE LA VALIDATION EMAIL
  function checkEmail() {
    formEmail = inputEmail.value;
      /* console.log(formEmail);  */ 
    let errorMSG = document.getElementById("emailErrorMsg");
    var mailFormat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  
    if (!formEmail) {
      errorMSG.innerText = "ce champs est obligatoire"
      return true
    }
    else if (!mailFormat.test(formEmail)) {
      
      errorMSG.innerText = "email non conforme"
      return false
    }
    errorMSG.innerText ="" ;
  return true 
  };
  

//comment verifier le vrai ou faux de cette fonction?


formOrder.addEventListener("click", function (e) {
  e.preventDefault();
   /* VEUT MESSAGE SI PANIER VIDE AVANT APPUI BTN COMMANDER */
  //condition pour afficher un panier vide et empêcher l'action "commander"
       
var trueFirstName = (checkFirstName ());
  /* console.log(trueFirstName); */  
  var trueLastName = (checkLastName ());
  /* console.log(trueLastName); */
   var trueAddress = (checkAddress ())
 /* console.log(trueAddress); */
 var trueCity = (checkCity()); 
 /*  console.log (trueCity) */
 var trueEmail = (checkEmail()); 
let emptyCart = true

   /* console.log(trueEmail);  */
   if (cart.length === 0 ){
    emptyCart = false
    alert("votre panier est vide")};
       

 if(trueFirstName && trueLastName  && trueAddress  && trueCity  && trueEmail ){
  sendDatas()
  return true;
  }

   else   {
      alert("veuillez vérifier les champs du formulaire") } ;}
               
    );
   

      
      /* formOrder.addEventListener("click", function (e) {
        e.preventDefault(); 
      
      if (getNumberProduct()){
        sendDatas()
        return true;
      }
        else{
           alert("votre panier est vide")}});
 */
      
/*  enregistre le panier et conserve les données du localstorage */
function getCart() {
  if (localStorage.getItem("cart") == null) {
    return [];
  }
  else {
    return JSON.parse(localStorage.getItem("cart"));
  }
}

// Fonction qui enregistre dans le panier le nbr d'articles sélectionnés
//la boucle est un accumulateur de données grâce à une expression arithmétique
function getNumberProduct() {
  let number = 0; 
  for (let quantityProduct of cart) {
    number += parseInt(quantityProduct.quantitySelected);
  }
  return number;
  
}
//Fonction qui supprime les produits du panier 
function deleteCart(id) {
  console.log(id)
  let index = cart.findIndex((p) => p.id == id);
  if (index >= 0) {
    //retire un élément à partir de index
    cart.splice(index, 1);
    //recupere le panier dans le local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    //reactualise la page
    location.reload();
  }
}

//fonction permettant de changer les quantités des produits et recalcule le nbr
function updateQuantityCart(event, id) {
  /*  EMPECHER DE METTRE 200 EN QTE PAGE PANIER!
     */
   if (event.target.value >100)   return alert("Veuillez saisir une quantité inférieure à 100");
   /* COMMENT RETOURNER INPUT INITIAL QTE ?  */
  
   /* document.getElementsByName("itemQuantity");
   itemQuantity.innerHTML = valeur d'avant */ 
   
  console.log(id)
  console.log(event)
  /* let quantitySelected =  */
  let index = cart.findIndex((p) => p.id == id);
  if (index >= 0) {
    cart[index].quantitySelected = event.target.value;}
     
    localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
  }
;
//variable déclarée des valeurs du champ de formulaire
var formFirstName ;
var formLastName;
var formAddress;
var formCity;
var formEmail;


//function pour envoyer la commande et le formulaire via le btn commander
function sendDatas(){
var productId = [];
  for (let i = 0; i < cart.length; i++) {
    productId.push(cart[i].id);
    }
          // création d'un objet contact et du tableau des produits
      let order = {
    //création d'un objet contact reprenant les champs du formulaire
      contact: {
        firstName: formFirstName,
        lastName: formLastName,
        address: formAddress,
        city: formCity,
        email: formEmail,
        },
    products: productId,
    }

//On indique la méthode d'envoi des données
var method = { 
    method: 'POST',
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(order)
}; 
// on envoie les données Contact et l'id des produits à l'API qui retourne un N° d'orderID

fetch("http://localhost:3000/api/products/order", method) 
  
.then((response) => response.json())
.then((response) => {/* console.log(response); */ console.log(response["orderId"]);
// on redirige vers la page de confirmation de commande en passant l'orderId (numéro de commande) dans l'URL
location.replace('confirmation.html?orderId=' + response["orderId"])
.catch((error) => {alert ("Un problème a été rencontré lors de l'envoi du formulaire.", error);
  
})})};



  /* document.getElementById("order").addEventListener("submit",(e)); */
  /* document.location.href = `confirmation.html?orderId=${cart.orderId}`;  */
 
/* 

order.addEventListener("change", (e) => {
  e.preventDefault();
  fetch('http://localhost:3000/api/products/order', sendDatas)
  // indique la méthode d'envoi des données
  const sendDatas = {

    method: "POST",
    headers: {
      'accept': 'application/json',
      'content-Type': 'application/json'
    },

    body: JSON.stringify(order)
    
  };});
  
  console.log(orderId);}); */
  
  //création du tableau produits 

  /* if (function (response) {
    if (response.ok) { return response.json() }
  });
  else
    return Promise.reject(response);
}) */
  /* .then(function(sendDatas){
    console.log(sendDatas); */
  /* .catch(function(error){
    console.warn('quelque chose se passe mal',error);
   */
  

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */

/* const sentData = fetch(`http://localhost:3000/api/products/${sentCart}`)
.then((contact)=>contact.json()) */
/* fetch("http://localhost:3000/api/products/${sentCart}", {
  method: POST,
  headers: { 
 
'Content-Type': 'application/json' ,
},
  body: JSON.stringify(formOrder),
});
 */





