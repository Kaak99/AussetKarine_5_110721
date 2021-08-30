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
    price: Number(localStorage.getItem('priceNow')),
    color: localStorage.getItem('colorNow'),
    number: Number(localStorage.getItem('numberNow'))
  } ;
  return productObjet;
}


function showCart(tab){
  let itemsString = "";// Création de la variable qui concatenera tous éléments
  for (let i = 0; i < tab.length; i++) {
    itemsString +=
     `<div class="oneCartItem d-flex">
              <p>x</p>
              <a href=""><img src="../images/test.webp" alt="teddybear image"></a>
              <p class="cart-teddyName cart">${tab[i].name}</p>
              <p class="cart-teddyColor cart">${tab[i].color}</p>
              <label for="cart-teddyNumber cart"></label>
              <input type="number" size="3" maxlength="3" value="${tab[i].number}" name="cart-teddyNumber" id="cart-teddyNumber" min="1" max="99"></input>
              <p class="cart-teddyPrice cart">${(tab[i].price*tab[i].number/100).toFixed(2)}€</p>
            </div>`
  };
  console.log('itemsString='+itemsString);
  itemsContainer.innerHTML= itemsString;
}


function calcTotal(tab){
  let totalPrice="";
  for (let i = 0; i < tab.length; i++) {
    totalPrice += tab[i].price*tab[i].number;
    totalHTML.innerHTML= totalPrice;
  }
}




//  .......  tests à retirer  ........ //

console.log(`shopping-cart`);


//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');
const form2Container=document.querySelector('.form2Container');
const itemsContainer=document.querySelector('.cartField');
const totalHTML=document.querySelector('.billCalc:first-child');
//const totalHTML=document.querySelector('.billCalc p');

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

var sentToCart=localStorage.getItem('sendToCart');
localStorage.removeItem('sendToCart');
//console.log(typeof(sentToCart));
//console.log(sentToCart);
var didWeJustSentToCart= sentToCart=="true"? true : false;
console.log("didWeJustSentToCart"+didWeJustSentToCart);
// console.log(typeof(didWeJustSentToCart));
var actualBasket=localStorage.getItem('productTabLS')
var isBasketEmpty= actualBasket==null? true : false;
console.log("isBasketEmpty"+isBasketEmpty);

//console.log("****************************");

//if (weJustSentToCart==null || weJustSentToCart==false ) {
//if (didWeJustSentToCart==false) {
if (didWeJustSentToCart != true) {
  console.log("rien fait!");
  if (isBasketEmpty==true) {
    //alors afficher html="panier vide"
    console.log("panier vide1");
    console.log(localStorage.getItem('productTabLS'));
    console.log(localStorage.getItem('sendToCart'));
    form2Container.innerHTML=`<p class="centerTxt" style="font-family: 'Roboto', sans-serif; color: var(--main-color4)">Votre panier est désespérément vide !</p></br></br>`;
  }
  else {    //alors afficher panier
    console.log(" afficher panier="+actualBasket);
    showCart(productTab);
  }
}
else if (didWeJustSentToCart == true) {
    console.log("oui j'ai envoyé !");
    var productObjet=productObjetCreate();//on crée un objet avec les données du teddy envoyé au panier
    console.log("productObjet =");
    console.log(productObjet);

    if (isBasketEmpty==true) {
      console.log("isBasketEmpty"+isBasketEmpty);
      var productTab=[];
      console.log("productTab"+productTab);
      productTab.push(productObjet);//on push sur productTab
      console.log("productTab après push=");
      console.log(productTab);
      //localStorage.setItem('productTabLS',`${productTab}`);//on stocke sur local storage
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      console.log("affiche productTab=mon ajout( vide avant)= "+productTab);
      console.log("le productTabLS sauvé (vide+1ajout)"+localStorage.getItem('productTabLS')); 
      showCart(productTab);
    }
    else{//si panier déja rempl
      productTab=JSON.parse(localStorage.getItem('productTabLS'));
      productTab.push(productObjet);//on push sur productTab
      console.log("productTab après push=");
      console.log(productTab);
      //localStorage.setItem('productTabLS',`${productTab}`);//on stocke sur local storage
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      showCart(productTab);
      console.log("affiche productTab=panier + mon ajout(pas vide avant)= "+productTab);
      console.log("le productTabLS sauvé (plein+1ajout)"+localStorage.getItem('productTabLS')); 
    }
}


//modif:
//quand refresh garder panier
//si x suppr
//si +/- ajuster prix
///si mmeme nom et couleur  additionner










// //si pas de panier dans LS et qu'on ne vient pas d'ajouter dans panier (sendToCart!==true) 
// if ((localStorage.getItem('productTabLS')==null) && (localStorage.getItem('sendToCart')!=true))
//  {//alors afficher html="panier vide"
//    console.log("panier vide1");
//    console.log(localStorage.getItem('productTabLS'));
//    console.log(localStorage.getItem('sendToCart'));
//   form2Container.innerHTML=`<p class="centerTxt" style="font-family: 'Roboto', sans-serif; color: var(--main-color4)">Votre panier est désespérément vide !</p></br></br>`;
//   }
//   else if ((localStorage.getItem('productTabLS')==null) && (localStorage.getItem('sendToCart')==true))
//   {//panier vide mais on vient d'ajouter
//     var productObjet=productObjetCreate();//on crée un objet avec les données du teddy envoyé au panier
//     console.log(productObjet);
//     var productTab=[];
//     productTab.push(productObjet);//on l'ajoute au tableau productTab
//     console.log(productTab);
//     localStorage.setItem('productTabLS', `${productTab}`);//on crée productTabLS dans localstorage et on sauve le panier productTab dedans
//     console.log("on affiche panier2");
//   }
//   else if ((localStorage.getItem('productTabLS')!=null) && (localStorage.getItem('sendToCart')!=true))
//   {//cas ou on a pas rajouté(clic lien panier) et que panier non vide--> afficher panier
//       console.log("on affiche panier3");
//   }
//   else if ((localStorage.getItem('productTabLS')==null) && (localStorage.getItem('sendToCart')==true))
//   {//cas ou on ajoute ET il ya deja un panier
//       console.log("on affiche panier4");
//   }
//   else
//   {//cas non répertorié
//       console.log("cas non répertorié");
//   }





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