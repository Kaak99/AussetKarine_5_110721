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

console.log(` testIndex `);

// localStorage.setItem('scriptjsKey1', 'scriptjsValeur1');
// localStorage.setItem("scriptjsKey2","scriptjsValeur2");
//var scriptjsKey1= localStorage.getItem('scriptjsKey1');
//console.log(scriptjsKey1);



//  .......  const  ........ //

const noLoading = document.querySelector('.noLoading');
const url="http://localhost:3000/api/teddies" ;




//  .......  code  ........ //


noWarning();//affichage sans alerte avant fetch, alerte selon résultats 


fetch(url)
  .then(res => {
    if (res.ok) {
      console.log("success(fetch url)!");
      return res.json();
    } else {
      console.log("failed (fetch url)!")//si bad url ou ...
      console.error("erreur : ", status.code)//affiche message d'erreur 
      warning();
    }
  })
  .then(data => {
    console.log(data); //affiche les data de l'api (tableau d'objet)
    let teddiesString = "";// Création de la variable qui concatenera tous éléments

    // Boucle pour récupérer les données des produits &écrire html//
    for(let i = 0; i < data.length; i++) {
      console.log(data[i].name+data[i].price); // Visualisation si la boucle est opérationnel //
      
      // Création de l'élément en HTML //
      //avec pour chaque le lien .html?id et img/nom/prix/description
      teddiesString +=
      `<div class="teddyCard">
      <a href="html/product.html?${data[i]._id}">
            <figure class="ted-fig d-flex">
              <img class="ted-img" src="${data[i].imageUrl}" alt="teddybear image" />
              <figcaption class="ted-figcap d-flex">
                <div class="ted-nameprice d-flex">
                  <p class="ted-name">${data[i].name}</p>
                  <p class="ted-price">${(data[i].price/100).toFixed(2).replace(".",",")} €</p>
                </div>
                <p class="ted-description">${data[i].description}</p>
              </figcaption>
            </figure>
          </a>
        </div>`
    };
    
     // Insertion html créé : mis dans .teddiesCardContainer (index.html) //
    const containerHtml = document.querySelector(".teddiesCardContainer");
    containerHtml.innerHTML = teddiesString;
  })

// Message d'erreur //
  .catch(error => {
    console.log('error(du catch de fetch url)');//+quand pas connexion server,bad url,erreur dans then
    console.error("erreur : ", status.code)//affiche message d'erreur 
    warning()
  })
  ;

  











  

  

/////////////////////
//   fetch         //
////////////////////


//1.verifie appel api: promesse avec response code 200
// console.log(fetch(url));

//2.verifie réponse api: status 200
// fetch(url)
//   .then(res=> console.log(res))

//3.verifie transfo json
// fetch(url)
//   .then(res=>console.log(res.json()))

//4.verifie transfo objet; donne tableau d'objet avec _id, colors:array[4], description, imageUrl, name, price
// fetch(url)
//   .then(res=>res.json())
//   .then(data=>console.log(data))


//5. exploitation (objet, tableau )... 
//   fetch(url)
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
//       
