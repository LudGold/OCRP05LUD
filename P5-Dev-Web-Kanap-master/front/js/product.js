let elementImg = document.querySelector(".item__img");
let elementdescription = document.querySelector("#description");
let elementPrice = document.querySelector("#price");
let elementTitle = document.querySelector("#title");
const pageString = window.location.search;
const urlParams = new URLSearchParams(pageString);
const id = urlParams.get("id");

function getProduct(){
  fetch(`http://localhost:3000/api/products/${id}`)

  .then(response => {if (response.ok){return response.json();}})
    .then(product => {displayProduct(product)})
    .catch(function(err) {alert('une erreur est survenue')
  
    });
}
getProduct();


    function displayProduct(product) {

  elementImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}"><img/>`;
  elementTitle.innerHTML = `<h1 id="title">${product.name}</h1>`;
  elementPrice.innerHTML = `<span id ="price">${product.price}</span>`;
  elementdescription.innerHTML = `<p id="description">${product.description}</p>`; 
}
            
          
    
    
          
           


  
  
  