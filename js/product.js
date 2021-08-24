//  .......  fonctions  ........ //

//afficher warning
function warning(){
  noLoading.style.display = 'block' ;
}

//afficher warning
function noWarning(){
  noLoading.style.display = 'none' ;
}


//  .......  tests à retirer  ........ //

console.log(" test ");
console.log(" test2 ");
console.log(` test `);


//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');
const url="http://localhost:3000/api/teddies" ;
const productId = window.location.search.substring(1);

localStorage.setItem('idNow', `${productId}`);//stocke l'id en cours

console.log(productId);
const urlTeddy=`${url}/${productId}`;
console.log(urlTeddy);

// localStorage.setItem('productjsKey1', 'productjsValeur1');
// localStorage.setItem("productjsKey2","productjsValeur2");


//  .......  code  ........ //

noWarning();

//1.verifie appel api: promesse avec response code 200
// console.log(fetch(urlTeddy));

//2.verifie réponse api: status 200
// fetch(urlTeddy)
//   .then(res=> console.log(res))

//3.verifie transfo json
// fetch(urlTeddy)
//   .then(res=>console.log(res.json()))

//4.verifie transfo objet; donne 1 1objet avec _id, colors:array[4], description, imageUrl, name, price
// fetch(urlTeddy)
//   .then(res=>res.json())
//   .then(data=>console.log(data))


//5. exploitation (objet, tableau )... 
//   fetch(urlTeddy)
//  .then(res => {
//       if (res.ok) {
//         console.log("success(fetch url)!");
//         return res.json();
//       } else {
//         console.log("failed (fetch url)!")
//         warning();
//       }
//     })
//     .then(data => {
//       console.log(data); //affiche les data de l'api (json=tableau d'objet)
//       // Création de la variable qui s'ajoutera aux éléments //
//       let tedId=data._id;
//       console.log(tedId); //
//       let tedName=data.name;
//       console.log(tedName); //
//       let tedPrice=data.price;
//       console.log(tedPrice); //
//       let tedDescription=data.description;
//       console.log(tedDescription); //
//       let tedUrl=data.imageUrl;
//       console.log(tedUrl); //
//       let tedColors=data.colors;
//       // console.log(tedColors); //
//       // console.log(tedcolors[0]);
//       for (let index = 0; index < tedColors.length; index++) {
//         console.log(tedColors[index]);}

//       console.log("for of colors[] : ");//
//       for (const element of data.colors) {
//         console.log(element);
//       }

//       console.log("for in objet data : ");//
//       for (const property in data) {
//         console.log(`${property}: ${data[property]}`);
//       } 
//     });


fetch(urlTeddy)
  .then(res => {
      if (res.ok) {
        console.log("success(fetch url)!");
        return res.json();
      } else {
        console.log("failed (fetch url)!")
        warning();
      }
  })
  .then(data => {
    let tedUrl=data.imageUrl;
    console.log(tedUrl); //
    let teddyProduct="";
    teddyProduct=
    `<div class="teddyCard product"><!--ici démarre la zone de création de nounours-->
      <figure class="ted-fig product d-flex">
        <img class="ted-img product" src="${data.imageUrl}" alt="teddybear image" />
        <figcaption class="ted-figcap product">
          <div class="ted-nameprice d-flex">
            <p class="ted-name product">${data.name}</p>
            <p class="ted-price product">${data.price/100}€</p>
          </div>
          <p class="ted-description product">${data.description}</p>
        </figcaption>
      </figure>
    </div>`

     // Insertion des éléments recuperés //
    const container1Html = document.querySelector(".teddiesCardContainer");
    container1Html.innerHTML = teddyProduct;


    let colorsString="";
    for (let index = 0; index < data.colors.length; index++) {
      colorsString+=
      `<option value="data.colors[index]">${data.colors[index]}</option>`
      localStorage.setItem('nameNow', `${data.name}`);//stocke l'id en cours
      localStorage.setItem('priceNow', `${data.price/100}`);//stocke le prix en cours


    }
 
   
    const container2Html = document.querySelector("#couleurMenu");
    console.log(container2Html);
    container2Html.innerHTML = colorsString;
  }
);

//si change couleur
//localStorage.setItem('numberNow', `${ }`);//stocke le nombre en cours

//si change quantité

//localStorage.setItem('colorNow', `${ }`);//stocke le nombre en cours




//si validation du bouton "ajouter au panier"
// var sendProductButton = document.querySelector('#sendProductButton');

// sendProductButton.addEventListener("click", () =>{
//   // sendProductButton.preventDefault();

// })


//on pourrait envoye touets les infos par le bouton en method="get" aussi ? (mais manque le id)
//si clique sur envoyer, mettre dans local storage id1, nombre1, couleur1
//si revient sur page avec un autre nounours, doit incrementer id2 nombre2 couleur2 etc
//dans page du panier on recup et affiche valeurs (et mettre dans local storage+mise à jour somme totale?)
//quand validera panier, envoyer au serveur toutes ces infos + la somme finale
//renverra id de validation
//on affiche alors la page de commande affichant le numero de commande (et date livraison...)
//devrait aficher aussi toutes les infos de la commande mais vider le local storage pour vider les achats
//donc clear local storage à retour de id et recréer des var de commandes dans local storage?


//ou :
//on stocke données à garder des qu'on est sur cette page dans "xxxNow" (nameNow, priceNow, numberNow, colorNow, idNow...=)
//quand validation du bouton, un fois dans panier, on range ailleurs (*) et on initialise
//serait bien dans un objet mais ne peut que etre ds local storage sinon on perd tout à chaque fois...
//comment incrementer? 
//transmettre un compteur à chaque appui sur envoyer au panier et creer une nouvelle variable
//type id2 , id3... (qu'on réinitialise à 999?)

//ou alors on stocke dans key contenant id
//par exemple dans name5beaaa8f1c9d440000a57d95, price5beaaa8f1c9d440000a57d95 ...









