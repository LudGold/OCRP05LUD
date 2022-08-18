const { getAllProducts } = require("./controllers/product");

Loïse Fenoll
/*<div id="items">
<!--
<h1>title</h1>
<p>content</p>
-->
</div>*/



/*
type number : 1 2 3 4
type string : "toto" "bonjour" 'hello' aujourd'hui
type boolean : true false
type Date : Date(01/01/2020)
type array : [1, 2, 3, 4, 5]
type object : {
	name: "Ludivine",
	age: 30,
	birthday: Date(01/01/2020),
	courses: {
		alreadySucced : [1, 2, 3, 4, 5],
		todo : [6, 7]
	}
}


product : {
	colors : ["blue", 'red'],
	id : '1234',
	name : "canapé joli",
	price: 14,67,
	imageUrl : "http://monsite.com/jolicanap.png",
	description : "super canapé trop mode",
	altTxt : "canapé bleu ou rouge"
}*/

//GET / --> 
var results = [{
	colors : ["blue", 'red'],
	id : '1234',
	name : "canapé joli",
	price: 14.67,
	imageUrl : "http://monsite.com/jolicanap.png",
	description : "super canapé trop mode rouge",
	altTxt : "canapé rouge"
},{
	colors : ["blue", 'red'],
	id : '12345',
	name : "canapé joli 2",
	price: 14.67,
	imageUrl : "http://monsite.com/jolicanap.png",
	description : "super canapé trop mode bleu",
	altTxt : "canapé bleu"
}]

l
//itemsDOM.innerHTML = "<h1>Titre 1</h1><p>Contenu 1</p>"

for(let i = 0; i < results.length; i++) {
	itemsDOM.innerHTML += <h1>${results[i].name}</h1><p>${results[i].description}</p>"} 
}


//Resultat dans l'inspecteur
/*
<div id="items">
<h1>canapé joli</h1>
<p>super canapé trop mode rouge</p>
<h1>canapé joli 2</h1>
<p>super canapé trop mode bleu</p>
</div>
*/
//get / => 
const products = []
let itemsDOM = document.getElementById("items");

console.log(getAllProducts);
for(let i = 0, i < products.length; i++){
    itemsDOM.innerHTML += <h3>${products[i].name}</h3>}