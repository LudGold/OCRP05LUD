
// récupération et affichage du n° de commande (orderId) et  message de remerciement 
const orderCommand = document.getElementById("orderId");
const orderId = new URLSearchParams(location.search).get("orderId");
console.log(orderId);

orderCommand.innerHTML = `<span id="orderId">${orderId}</span>`;


//-On vide le localStorage après que la commande soit validée
localStorage.clear()






//----------------------FIN------------------------------------------------------//
