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
console.log(productId);
const urlTeddy=`${url}/${productId}`;
/*const urlTeddy= url+"/"+productId;*/
console.log(urlTeddy);


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
    }
 
   
    const container2Html = document.querySelector("#couleurMenu");
    console.log(container2Html);
    container2Html.innerHTML = colorsString;
    
    //  let teddyProductColors="";
    //  teddyProductColors=
    //   `<form class="form1 centerTxt" method="get" action="shopping-cart.html">
    //   <label for="couleurMenu">Quelle couleur choisissez-vous : </label>
    //   <select name="couleurMenu" id="couleurMenu">
    //     <option value="data.colors[0]">${data.colors[0]}</option>
    //     <option value="data.colors[1]">${data.colors[1]}</option>
    //     <option value="data.colors[2]">${data.colors[2]}</option>
    //     <option value="data.colors[3]">${data.colors[3]}</option>
    //   </select></br></br>

    //   <label for="nombreMenu">Combien en voulez vous : </label>
    //   <input type="number" size="3" maxlength="3" value="1" name="nombreMenu" id="nombreMenu"></input>
    //   </select></br></br>

    //   <button class="product"type="submit"> Envoyer au panier</button></br></br>
    //   </form>`
    //  const container2Html = document.querySelector(".form1Container");
    //  container2Html.innerHTML = teddyProductColors;

  });

  // <option value="data.colors[0]">${data.colors[0]}</option>
  // <option value="data.colors[1]">${data.colors[1]}</option>
  // <option value="data.colors[2]">${data.colors[2]}</option>
  // <option value="data.colors[3]">${data.colors[3]}</option>














    //àvirer
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
//     console.log(123 +data); //affiche les data de l'api (json=tableau d'objet)
//     // Création de la variable qui s'ajoutera aux éléments //
//     let teddiesString = "";

//     // Boucle pour récupérer les données des produits //
//     for(let i = 0; i < data.length; i++) {
//       console.log(data[i].name+data[i].price); // Visualisation si la boucle est opérationnel //
      
//       // Création de l'élément en HTML //
//       teddiesString += 
//       `<div class="teddyCard">
//       <a href="../html/product.html?${data[i]._id}">
//         <figure class="ted-fig d-flex">
//           <img class="ted-img" src="${data[i].imageUrl}" alt="teddybear image" />
//           <figcaption class="ted-figcap d-flex">
//             <div class="ted-nameprice d-flex">
//               <p class="ted-name">${data[i].name}</p>
//               <p class="ted-price">${data[i].price/100}€</p>
//             </div>
//             <p class="ted-description">${data[i].description}</p>

//           </figcaption>
//         </figure>
//       </a>
//     </div>`
//     };
    
//      // Insertion des éléments recuperés dans la page index.html //
//     // const containerHtml = document.getElementsByClassName("teddiesCardContainer");
//     const containerHtml = document.querySelector(".teddiesCardContainer");
//     containerHtml.innerHTML = teddiesString;
//     console.log(456+containerHtml);
// })

// // Message d'erreur //
//   .catch(error => {
//     console.log('error(du catch de fetch url)');
//     warning()
//   })
//   ;

  
