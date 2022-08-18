/* /* /* 
/* console.log(queryString);
const urlParams = new URLSearchParams(queryString); */
/* let searchParams = "_id"; */
/*  idProduct = queryString.get; */

 /* const id = new URLSearchParams(window.location.search).get("_id");
 
function idProduct() {

const name = document.getElementsByClassName('name')
const description = document.getElementsByClassName('description')
const elementImg = document.getElementsByClassName('imageUrl');
const contents = document.getElementsByClassName('item');
let item = document.getElementsByClassName("item");
}

fetch(`http://localhost:3000/api/products/${id}`)

  .then(response => {if (response.ok){return response.json();}})
    .then(document => {response(document)})
    .catch(function(err) {
      // Une erreur est survenue
    });
    
   document.querySelector.innerHTML+=` 
    <div class="item__img">
       
          <img src="${document.imageUrl}" alt="${document.altTxt}"> ;
        </div>
        <div class="item__content">
          <div class="item__content__titlePrice">
            
            <h1 id="title"> "${document.name}" ></h1>
            <!-- ET LA AUSSI -->
            <p>Prix : <span id="price"> ${document.price} </span>€</p>
          </div>
          <div class="item__content__description">
            <p class="item__content__description__title">Description :</p>
            <p id="description"> ${document.description}
              Dis enim malesuada risus sapien gravida nulla nisl arcu. </p>
          </div>`  */

    
     
    
    
    
    /* `<img src="${elementImg.imageUrl}" `
    
    
    
          
           {/* <img src= *//* "${allProduct.imageUrl}" alt="${allProduct.altTxt}"> 
        </div>
        <div class="item__content">

          <div class="item__content__titlePrice">
            
            <h1 id="title"> ${allProduct.name} ></h1>
           
            <p>Prix : <span id="price"> ${allProduct.price} </span>€</p>
          </div>

          <div class="item__content__description">
            <p class="item__content__description__title">Description :</p>
            <p id="description"> ${allProduct.description}
               </p>
          </div>`;
   
  */



 /* cherche l'id correspondant au produit présent sur la page accueil  */
/* const params = new URLSearchParams(document.getElementById("_id"));
let searchParams = new URLSearchParams(window.location.search)
const id = params.get("_id");  */
/* determine les informations à aller chercher dans l'API */
/* const objects = {name: "Kanap Sinopé", colors: ["Blue","White","Black"], price: 1849, imageUrl:"http://localhost:3000/images/kanap01.jpeg", description: `Excepteur sint occaecat cupidatat non proident, s
unt in culpa qui officia deserunt mollit anim id est laborum.`, altTxt:"Photo d'un canapé bleu, deux places"}
console.log( params.has(`id`))
console.log = objects */

/* const positionElement = document.querySelector(".item");


function resultat(){
 fetch(`http://localhost:3000/api/products/${id}`)
 .then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value) {
  document
      .getElementById("item")
      .innerText = value.queryString.greetings;
})
.catch(function(err) {
  // Une erreur est survenue
});
}
for(let i=0; i<resultat.length;i++){
let currentItem=resultat[i];
   
          
        
       item.innerHTML+=` 
        <div class="item__img">
           
              <img src="${currentItem.imageUrl}" alt="${currentItem.altTxt}"> ;
            </div>
            <div class="item__content">
              <div class="item__content__titlePrice">
                
                <h1 id="title"> "${currentItem.name}" ></h1>
                <!-- ET LA AUSSI -->
                <p>Prix : <span id="price"> ${currentItem.price} </span>€</p>
              </div>
              <div class="item__content__description">
                <p class="item__content__description__title">Description :</p>
                <p id="description"> ${currentItem.description}
                  Dis enim malesuada risus sapien gravida nulla nisl arcu. </p>
              </div>` 
}
             */
              

/* http://127.0.0.1:5500/html/product.html?id=107fb5b75607497b96722bda5b504926
let fetch ("http://localhost:3000/api/products/$id")
.then((resultat) =>resultat.json())
.then((resultat =>{
    for(let i=0; i<id.length;i++){
         let currentItems=id[i];
        
        item.innerHTML+=
        `
        
          <article>
            <div class="item__img">
              
              <img src="${currentItems.imageUrl}" alt="${currentItems.altTxt}"> 
            </div>
            <div class="item__content">

              <div class="item__content__titlePrice">
                
                <h1 id="title"> ${currentItems.name} ></h1>
                ->
                <p>Prix : <span id="price"> ${currentItems.price} </span>€</p>
              </div>

              <div class="item__content__description">
                <p class="item__content__description__title">Description :</p>
                <p id="description"> ${currentItems.description}
                  Dis enim malesuada risus sapien gravida nulla nisl arcu. </p>
              </div>`
      

;
    } 
/* MON TRAVAIL console.log (id);    
console.log (params); */


  
  
          