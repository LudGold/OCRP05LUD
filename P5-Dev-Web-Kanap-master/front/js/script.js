let items = document.getElementById("items");
fetch("http://localhost:3000/api/products")
.then((resultat) =>resultat.json())
.then((resultat) =>{
    for(let i=0; i<resultat.length;i++){
        let currentItem=resultat[i];
        items.innerHTML+=` <a href="./product.html?id=${currentItem._id}">
        <article>
          <img src="${currentItem.imageUrl}" alt="${currentItem.altTxt}">
          <h3 class="productName">${currentItem.name}</h3>
        <p class="productDescription">${currentItem.description}</p>
        </article>
      </a>`;
    }
    console.log(resultat)
})