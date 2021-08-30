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

console.log(` testproduct `);


//  .......  const  ........ //

const noLoading = document.querySelector('.noLoading');
const url="http://localhost:3000/api/teddies" ;
const productId = window.location.search.substring(1);//l'id de ce teddy est récup dans l'adresse url
const urlTeddy=`${url}/${productId}`; //= url/id de ce teddy (url?id = ${window.location} )
console.log(` test url urlTeddy=${urlTeddy} urlWinloc=${window.location}`);





//  .......  code  ........ //

noWarning();//affichage sans alerte avant fetch, alerte selon résultats 


//fetch sur xxx.html/id du teddy pour récup infos(nom prix descr)
fetch(urlTeddy)
  .then(res => {
      if (res.ok) {
        console.log("success(fetch url)!");
        return res.json();//retourne données format json
      } else {
        console.log("failed (fetch url)!")//si bad url ou ...
        console.error("erreur : ", status.code)//affiche message d'erreur 
        warning();
      }
  })
  .then(data => {
    //let tedImgUrl=data.imageUrl;//tcke url de img du teddy dans tedImgUrl
    //console.log(tedImgUrl); //
    let teddyProduct="";//let's put in teddyProduct the html code for this teddy product
    teddyProduct=
    `<div class="teddyCard product"><!--ici démarre la zone de création de nounours-->
      <figure class="ted-fig product d-flex">
        <img class="ted-img product" src="${data.imageUrl}" alt="teddybear image" />
        <figcaption class="ted-figcap product">
          <div class="ted-nameprice d-flex">
            <p class="ted-name product">${data.name}</p>
            <p class="ted-price product">${(data.price/100).toFixed(2)}€</p>
          </div>
          <p class="ted-description product">${data.description}</p>
        </figcaption>
      </figure>
    </div>`

     // Insertion du html formé(teddyProduct) dans .teddiesCardContainer //
    const container1Html = document.querySelector(".teddiesCardContainer");
    container1Html.innerHTML = teddyProduct;//write html for the teddy product

      localStorage.setItem('nameNow', `${data.name}`);//stocke l'id en cours
      localStorage.setItem('priceNow', `${data.price/100}`);//stocke le prix en cours

    // colorsString récupère l'html des différents choix de couleur de ce teddy
    let colorsString="";//let's put the right colors in html-menu
    for (let index = 0; index < data.colors.length; index++) {
      colorsString+=
      `<option value=${data.colors[index]}>${data.colors[index]}</option>`
    }   
  })
  
  // Message d'erreur //
  .catch(error => {
    console.log('error(du catch de fetch url)');//+quand pas connexion server,bad url,erreur dans then
    console.error("erreur : ", status.code)//affiche message d'erreur 
    warning()
  })
  ;


//if click on button "send product to shopping-cart " :
const sendProductButton = document.querySelector("#sendProductButton");
sendProductButton.addEventListener('click', function(){
    const container2colorHtml = document.querySelector("#couleurMenu");
    const container2numberHtml = document.querySelector("#nombreMenu");
    var couleurMenu=document.querySelector("#couleurMenu").value;
    var nombreMenu=document.querySelector("#nombreMenu").value;
    //save color&number in local storage
    localStorage.setItem('idNow', `${productId}`);//stocke l'id en cours
    localStorage.setItem('colorNow', `${couleurMenu}`);
    localStorage.setItem('numberNow',`${nombreMenu}`);
    document.location.href="shopping-cart.html";//go to shopping-cart.html
 }
);









/////////////////////
//   fetch         //
////////////////////


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
//       let tedImgUrl=data.imageUrl;
//       console.log(tedImgUrl); //
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


