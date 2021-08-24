//  .......  fonctions  ........ //

//afficher warning
function warning(){
  noLoading.style.display = 'block' ;
}

//afficher warning
function noWarning(){
  noLoading.style.display = 'none' ;
}

//tranfert données api choisies vers objet nounours
// function transfert(tab){
//   for (const element of tab) {
//      console.log(element) 
    //  nounours[element] = new Nounours
//   }
// }
// let tableau = [100,101,102,103,104,105];
// console.log(tableau.length);
// transfert(tableau);
//  .......  tests à retirer  ........ //

console.log(" test ");
// console.log(` test `);


//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');
const url="http://localhost:3000/api/teddies" ;


// localStorage.setItem('scriptjsKey1', 'scriptjsValeur1');
// localStorage.setItem("scriptjsKey2","scriptjsValeur2");

var scriptjsKey1= localStorage.getItem('scriptjsKey1');
console.log(scriptjsKey1);

//  .......  code  ........ //
noWarning();

class Nounours {
  constructor(id,name,price,imageUrl){
    this.id=id;
    this.name=name;
    this.price=price;
    this.imageUrl=imageUrl;
  }
}

function lesnounours(id,name,price,imageUrl) {
    this.id=id;
    this.name=name;
    this.price=price;
    this.imageUrl=imageUrl;
}


// var teddyTab;


fetch(url)
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
    console.log(123 +data); //affiche les data de l'api (json=tableau d'objet)
    // Création de la variable qui s'ajoutera aux éléments //
    let teddiesString = "";

    // Boucle pour récupérer les données des produits //
    for(let i = 0; i < data.length; i++) {
      console.log(data[i].name+data[i].price); // Visualisation si la boucle est opérationnel //
      
      // Création de l'élément en HTML //
      teddiesString +=
             // <a href="html/product.html/:${data[i]._id}">//
             //          <a href="html/product.html">//
      `<div class="teddyCard">
      <a href="html/product.html?${data[i]._id}">
            <figure class="ted-fig d-flex">
              <img class="ted-img" src="${data[i].imageUrl}" alt="teddybear image" />
              <figcaption class="ted-figcap d-flex">
                <div class="ted-nameprice d-flex">
                  <p class="ted-name">${data[i].name}</p>
                  <p class="ted-price">${data[i].price/100}€</p>
                </div>
                <p class="ted-description">${data[i].description}</p>
              </figcaption>
            </figure>
          </a>
        </div>`
    };
    
     // Insertion des éléments recuperés dans la page index.html //
    // const containerHtml = document.getElementsByClassName("teddiesCardContainer");
    const containerHtml = document.querySelector(".teddiesCardContainer");
    containerHtml.innerHTML = teddiesString;
    // console.log(456+containerHtml);
})

// Message d'erreur //
  .catch(error => {
    console.log('error(du catch de fetch url)');
    warning()
  })
  ;

  
