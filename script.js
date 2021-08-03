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
function transfert(tab){
  for (const element of tab) {
     console.log(element) 
    //  nounours[element] = new Nounours
  }
}
// let tableau = [100,101,102,103,104,105];
// console.log(tableau.length);
// transfert(tableau);
//  .......  tests à retirer  ........ //

console.log(" test ");
console.log(" test2 ");
console.log(` test `);


//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');
const url="http://localhost:3000/api/teddies" ;

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
    console.log(data); //affiche les data de l'api (json=tableau d'objet)
    // Création de la variable qui s'ajoutera aux éléments //
    let getAllTeddies = "";

    // Boucle pour récupérer les données des produits //
    for(let i = 0; i < data.length; i++) {
      console.log(data[i].name); // Visualisation si la boucle est opérationnel //
      
      // Création de l'élément en HTML //
      getAllTeddies += 
      `<li class="item">
        <div class="card mb-3">
          <div id="cardProduct" class="row g-0">
            <div class="col-md-4">
              <img src="${data[i].imageUrl}" class="img-thumbnail shadow" alt="Ours en peluche" />
            </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title fs-4">${data[i].name}</h2>
                  <p class="card-text">${data[i].description}</p>
                  <p class="card-text text-muted fs-5">${(data[i].price/100).toFixed(2).replace(".",",")}€</p>
                  <br />
                  <a
                    class="btn btn-outline-primary w-25"
                    href="./product.html?${data[i]._id}"
                    >Détail</a>
                </div>
              </div>
          </div>
        </div>
      </li>`
    }
    
     // Insertion des éléments recuperés dans la page index.html //
    document.getElementById("items").innerHTML = getAllTeddies
})

// Message d'erreur //
  .catch(error => {
    console.log('error(du catch de fetch url)');
    warning()
  })
  ;

  



// console.log('123456');
// const teddyTab=data;
// console.log(teddyTab);


// 0/
// fetch("http://localhost:3000/api/teddies", {
// });

// 1/ le console.log du retour de la requête (montre une promesse: body, response etc...)
// console.log(fetch("http://localhost:3000/api/teddies"));

// 2/ le console.log de la reéponse (montre la réponse)
// fetch("http://localhost:3000/api/teddies")
//   .then(res => console.log(res))
// ;

// 3/ accéder au body=contenu  : utiliser json
// fetch("http://localhost:3000/api/teddies")
//   .then(res => res.json())
//   .then(data => console.log(data))
// ;

// 4/ mettre test erreur
// fetch("http://localhost:3000/api/teddies")
//   .then(res => {
//     if (res.ok) {
//       console.log("success!")
//     } else {
//       console.log("failed!")
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log('error'));

//ok pour afficher l'image
// fetch("http://localhost:3000/api/teddies")
//   .then (res => res.json())
//   .then (data => tedImg1.src = data[0].imageUrl)
// ;

//essai boucle for (ok) mais un seul div en dur...et tout l'objet à faire, pas juste img!
// --> créer chaque objet card en js ; boucler sur tout objet
// const tedImg1 = document.getElementById('ted-img1');
// const noLoading = document.querySelector('.noLoading');
// fetch("http://localhost:3000/api/teddies")
//   .then (res => res.json())
//   .then (data => {
//     for (var i = 0 ; i < data.length ; i++) {  
//       tedImg1.src = data[i].imageUrl;
//       }
//   })    
// ;
//console.log(tedImg1.src);

// marche grace au return , sinon data undefined
// fetch("http://localhost:3000/api/teddies")
//   .then(res => {
//     console.log('rtyu');
//     return res.json()})

//   .then(data => console.log(data))


//echec lamentable
// var teddyTab;

// fetch("http://localhost:3000/api/teddies")
//   .then(res => {
//     console.log('rtyu');
//     return res.json()})

//   .then(data => {
//     console.log(data+'b');
//     console.log(data+'c');
//     fruits = data;
//     console.log(fruits+'e')
//   })
//   console.log(fruits+'azerty');

// ;

//marche mais sort pas
// fetch(url)
//   .then(res => {
//     if (res.ok) {
//       console.log("success(fetch url)!");
//       return res.json();
//     } else {
//       console.log("failed (fetch url)!")
//       warning();
//     }
//   })
//   .then(data => {
//     console.log(data);
//     const teddyTab=data;
//     console.log(teddyTab);
//     // transfert(data);
    
//   })
//   // .catch(error => console.log('error(du catch de fetch url)')); 
//   .catch(error => {
//     console.log('error(du catch de fetch url)');
//     warning()
//   })
//   ;

//fonctionne met teddybear ne sort pas non plus (// undefined)
// var teddyTab;
// fetch(url)
//   .then(res => {
//     if (res.ok) {
//       console.log("success(fetch url)!");
//       return res.json();
//     } else {
//       console.log("failed (fetch url)!")
//       warning();
//     }
//   })
//   .then(data => {
//     console.log(data); //affiche les data de l'api (json=tableau d'objet)
//     // teddyTab=data; //const -donc locale! - recup les data (json=tableau d'objet)
//     const teddyTab=data; //const -donc locale! - recup les data (json=tableau d'objet)
//     console.log(teddyTab); //affiche const teddyTab, qui contient bien les data (json)
//     transfert(data); //affiche chaque élément (objet nounours) du tableau data=json
//   })
//   .catch(error => {
//     console.log('error(du catch de fetch url)');
//     warning()
//   })
//   ;
  