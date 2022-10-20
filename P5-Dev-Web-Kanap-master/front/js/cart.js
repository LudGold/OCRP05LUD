
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
            <input onchange="updateQuantityCart(event,'${cart[i].id}',${i})"  type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantitySelected}">
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

//fonction permettant de changer les quantités des produits et recalculer le nbr
function updateQuantityCart(event, id, i) {
  console.log(i)
  /*  EMPECHER DE METTRE 200 EN QTE PAGE PANIER!*/
  if (event.target.value > 100) {
    let inputQuantity = document.getElementsByClassName("itemQuantity");
    inputQuantity[i].value = 100;

    return alert("Veuillez saisir une quantité inférieure à 100");
  }
  console.log(id)
  console.log(event)

  let index = cart.findIndex((p) => p.id == id);
  if (index >= 0) {
    cart[index].quantitySelected = event.target.value;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
};

//Fonction qui supprime les produits du panier 
function deleteCart(id) {
  console.log(id)
  let index = cart.findIndex((p) => p.id == id);
  if (index >= 0) {
    //retire un élément à partir de index du tableau "cart"
    cart.splice(index, 1);
    //recupère le panier dans le localstorage
    localStorage.setItem("cart", JSON.stringify(cart));
    //reactualise la page
    location.reload();
  }
};

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

};

//fonction pour l'obligation de remplir le champs 

let inputFirstName = document.getElementById('firstName');
inputFirstName.addEventListener("keyup", function (event) {
  event.preventDefault();
  checkFirstName(event.target.value);
  return;
});

//utilise un évenement "keyup" car la fonction utilisée est légère
let inputLastName = document.getElementById('lastName');
inputLastName.addEventListener("keyup", function (event) {
  event.preventDefault();
  checkLastName(event.target.value);
  return;
});

let inputAddress = document.getElementById('address');
inputAddress.addEventListener("keyup", function (event) {
  event.preventDefault();
  checkAddress(event.target.value);
  return;
});

let inputCity = document.getElementById('city');
inputCity.addEventListener("keyup", function (event) {
  event.preventDefault();
  checkCity(event.target.value);
  return;
});

let inputEmail = document.getElementById('email');
inputEmail.addEventListener("change", function (event) {
  event.preventDefault();
  checkEmail(event.target.value);
  return;
});

//déclaration des messages d'erreur pour chaque champ du formulaire
let firstNameErrorMSG = document.getElementById("firstNameErrorMsg");
let lastNameErrorMSG = document.getElementById("lastNameErrorMsg");
let addressErrorMSG = document.getElementById("addressErrorMsg");
let cityErrorMSG = document.getElementById("cityErrorMsg");
let mailErrorMSG = document.getElementById("emailErrorMsg");

//on créee des fonctions pour tester les expressions régulières des noms et prénoms

function checkFirstName() {
  formFirstName = inputFirstName.value;
  /*  console.log(formFirstName) */
  // pas de chiffres autorisés
  const trueFirstName = (/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,20}$/);
  if (!formFirstName) {
    firstNameErrorMSG.innerText = "ce champs est obligatoire ";
    return false
  }
  else if (!trueFirstName.test(formFirstName)) {
    firstNameErrorMSG.innerText = "maximum 20 caractères - chiffres non autorisés"
    return false
  }
  firstNameErrorMSG.innerText = "";
  return true
};

function checkLastName() {
  formLastName = inputLastName.value;
  /* console.log(formLastName);  */
  const validateLastName = (/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,30}$/);
  if (!formLastName) {
    lastNameErrorMSG.innerText = " ce champs est obligatoire";
    return false
  }
  else if (!validateLastName.test(formLastName)) {
    lastNameErrorMSG.innerText = "maximum 30 caractères - chiffres non autorisés"
    return false
  }
  lastNameErrorMSG.innerText = "";
  return true
};

//Empêcher juste les caractères spéciaux pour adresse postale
function checkAddress() {
  formAddress = inputAddress.value;
  /* console.log(formAddress);  */
  const validateAddress = (/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{5,60}$/);
  if (!formAddress) {
    addressErrorMSG.innerText = "ce champs est obligatoire"
    return false
  }
  else if (!validateAddress.test(formAddress)) {

    addressErrorMSG.innerText = "adresse non conforme"
    return false
  }
  addressErrorMSG.innerText = "";
  return true
};

function checkCity() {
  formCity = inputCity.value;
  /* console.log(formCity);  */
  const validateCity = (/^[A-Za-z]{3,30}$/);
  if (!formCity) {
    cityErrorMSG.innerText = "ce champs est obligatoire"
    return false
  }
  else if (!validateCity.test(formCity)) {

    cityErrorMSG.innerText = "ville non conforme"

    return false
  }
  cityErrorMSG.innerText = "";
  return true
};


//ON TESTE L'EXPRESSION REGULIERE DE LA VALIDATION EMAIL

function checkEmail() {
  formEmail = inputEmail.value;
  /* console.log(formEmail);  */
  const mailFormat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (!formEmail) {
    mailErrorMSG.innerText = "ce champs est obligatoire"
    return false
  }
  else if (!mailFormat.test(formEmail)) {

    mailErrorMSG.innerText = "email non conforme"
    return false
  }
  mailErrorMSG.innerText = "";
  return true
};

const formOrder = document.getElementById("order");
// écoute la validité du formulaire et le panier rempli au moment du submit
formOrder.addEventListener("click", function (e) {
  e.preventDefault();
  const trueFirstName = (checkFirstName());
  /* console.log(trueFirstName); */
  const trueLastName = (checkLastName());
  /* console.log(trueLastName); */
  const trueAddress = (checkAddress())
  /* console.log(trueAddress); */
  const trueCity = (checkCity());
  /*  console.log (trueCity) */
  const trueEmail = (checkEmail());
  /* console.log(trueEmail);  */
  //condition pour afficher un panier vide et empêcher l'action "commander"

  if (cart.length === 0) {
    alert("votre panier est vide")
    return false;
  };
  //condition pour envoyer le formulaire correctement rempli
  if (trueFirstName && trueLastName && trueAddress && trueCity && trueEmail) {
    sendDatas()
    return true;
  }
  else {
    alert("veuillez vérifier les champs du formulaire");
  };
});


//variable déclarée des valeurs du champ de formulaire

let formFirstName;
let formLastName;
let formAddress;
let formCity;
let formEmail;


//function pour envoyer la commande et le formulaire via le btn commander
function sendDatas() {
  const productId = [];
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
  const method = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  };
  // on envoie les données du formulaire et l'id des produits à l'API qui retourne un N° d'orderID

  fetch("http://localhost:3000/api/products/order", method)

    .then((response) => response.json())
    .then((response) => {/* console.log(response); */ console.log(response["orderId"]);
      // on redirige vers la page de confirmation de commande en passant l'orderId (numéro de commande) dans l'URL
      location.replace('confirmation.html?orderId=' + response["orderId"])
        .catch((error) => {


          alert("Un problème a été rencontré lors de l'envoi du formulaire, nous nous excusons pour le dérangement.", error);


        })
    })
};



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







