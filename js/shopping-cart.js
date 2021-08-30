//  .......  fonctions  ........ //

//afficher warning
function warning(){
  noLoading.style.display = 'block' ;
}

//afficher warning
function noWarning(){
  noLoading.style.display = 'none' ;
}



function productObjetCreate(){
  let productObjet=
  {
    id: localStorage.getItem('idNow'),
    name: localStorage.getItem('nameNow'),
    price: localStorage.getItem('priceNow'),
    color: localStorage.getItem('colorNow'),
    number: localStorage.getItem('numberNow')
  } ;
  return productObjet;
}

//  .......  tests à retirer  ........ //

console.log(`shopping-cart`);


//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');
const form2Container=document.querySelector('.form2Container');
//const url="http://localhost:3000/api/teddies" ;

// let idLast = localStorage.getItem('idNow');
// localStorage.setItem(`id+${idLast}`,`${idLast}`);//stocke le nombre en cours
// let nameLast = localStorage.getItem('nameNow');
// let priceLast = localStorage.getItem('priceNow');



//  .......  code  ........ //

//si localstorage pas vide, on crée un objet productObjet avec les données
// if (localStorage.getItem('anyItem') !== null) {
//   var productObjet=productObjetCreate();
//   console.log(productObjet);
// }



//si pas de panier dans LS et qu'on ne vient pas d'ajouter dans panier (sendToCart!==true) 
if ((localStorage.getItem('productTabLS')==null) && (localStorage.getItem('sendToCart')!==true))
 {//alors afficher html="panier vide"
   console.log("panier vide");
  form2Container.innerHTML=`<p class="centerTxt" style="font-family: 'Roboto', sans-serif; color: var(--main-color4)">Votre panier est désespéremment vide !</p></br></br>`;
  } else if ((localStorage.getItem('productTabLS')==null) && (localStorage.getItem('sendToCart')==true))
 {//panier vide mais on vient d'ajouter
  var productObjet=productObjetCreate();//on crée un objet avec les données du teddy envoyé au panier
  var productTab=[];
  productTab.push(productObjet);//on l'ajoute au tableau productTab
  localStorage.setItem('productTabLS', `${productTab}`);//on crée productTabLS dans localstorage et on sauve le panier productTab dedans
  console.log("on affiche panier");
 } else if ((localStorage.getItem('productTabLS')!==null) && (localStorage.getItem('sendToCart')!==true))
  {//cas ou on a pas rajouté(clic lien panier) et que panier non vide--> afficher panier
    console.log("on affiche panier");
 } else if ((localStorage.getItem('productTabLS')==null) && (localStorage.getItem('sendToCart')==true))
  {//cas ou on ajoute ET il ya deja un panier
    console.log("on affiche panier");
  }
  else{//cas non répertorié
    console.log("cas non répertorié");
  
  
  
  }





// if (condition) {
  
// }
// else if (condition) {
  
// }

// else if (condition) {
  
// }

// else {
  
// } 



  // var productObjet=productObjetCreate();
  // console.log(productObjet);
  // var productTab=[];
  // productTab== localStorage.getItem('productTabLS')





//  let bidule=localStorage.getItem('sendToCart');
//  console.log(bidule);



noWarning();
// var essai1 = localStorage.getItem('essai1');
// console.log(essai1);
// localStorage.removeItem('essai1');



//sauver d'emblée le nouveau choix et  APRÈS afficher tout
//stocker avec index ?json?

//tabCart=[];


//--------------------com------
// //objet de contact 
// var objContact={
//   firstName: "ka",
//   lastName: "ak",
//   address: "123 azerty",
//   city: "laville",
//   email: "cours@gg.com"
// };
// console.log(objContact);

// //tableau de produits  

// var productTab=[
//   {
//   name: "Arnold",
//   price: 39,
//   color: "chocolate",
//   number: 3
//   },
//   {
//     name: "Gustav",
//     price: 45,
//     color: "white",
//     number: 2
//   }
// ];
// console.log(productTab);



// let productTab2=["Arnold, 39, chocolate,3","Gustav, 45, white,"];


// let dataToSend= objContact +" , "+productTab;
// console.log(dataToSend);
// let jsonToSend= JSON.stringify(dataToSend);
// console.log(jsonToSend);

//--------------------com------
// var jsonOrder=JSON.stringify({ objContact, productTab });
// console.log(jsonOrder);



// var promise1=fetch("http://localhost:3000/api/teddies/order",{
//   method: "POST",
//   headers:{"Content-Type": "application/json"},
//   body: jsonOrder
// });

// console.log(promise1);


//--------------------com------
// fetch("http://localhost:3000/api/teddies/order", {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json'
//   },
// //  mode:'cors',
//   body: jsonOrder
// }).then(response => {
//   return response.json();

// })


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
//         console.error("erreur : ", status.code)
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

















//essai2
// let jsonOrder=JSON.stringify({ objContact, productTab });
// console.log(jsonOrder);

// fetch("http://localhost:3000/api/teddies/order",
//  {method: "POST", headers:{"Content-Type": "application/json"}, body: jsonOrder})
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
//     localStorage.setItem("order", JSON.stringify(data));
//     // document.location.href = "my-orders.html";
//  //effacer locastorage
// });


//essai1
// fetch("http://localhost:3000/api/teddies/order", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ objContact, productTab }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     localStorage.setItem("order", JSON.stringify(data));
//                     document.location.href = "my-orders.html";
//                 });