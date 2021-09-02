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


// function comparer(productTab,productObjet){
  
// }



// function fusionner(productTab,productObjet){

// }



function showCart(tab){
  let itemsString = "";// Création de la variable qui concatenera tous éléments
  for (let i = 0; i < tab.length; i++) {
    itemsString +=
     `<div class="oneCartItem d-flex">
              <p class="pcross" data-attr=${i}><i class="fas fa-times"></i></p>
              <a href=""><img src="../images/test.webp" alt="teddybear image"></a>
              <p class="cart-teddyName cart">${tab[i].name}</p>
              <p class="cart-teddyColor cart">${tab[i].color}</p>
              <label for="cart-teddyNumber cart"></label>
              <input type="number" size="3" maxlength="3" value="${tab[i].number}" name="cart-teddyNumber" class="cart-teddyNumber" min="1" max="99"></input>
              <p class="cart-teddyPrice cart">${(tab[i].price*tab[i].number/100).toFixed(2).replace(".",",")}€</p>
            </div>`
  };
  //////console.log('itemsString='+itemsString);
  itemsContainer.innerHTML= itemsString;
}


function calcTotal(tab){
  //let price;
  let totalPrice=0;//sinon problème...permet init comme nombre 
  ////console.log(typeof(totalPrice))
  ////console.log("voici tab=");
  ////console.log(tab);
  for (let i = 0; i < tab.length; i++) {
    totalPrice = (tab[i].price)*(tab[i].number) +totalPrice;
    // a=tab[i].price;
    // //console.log(a) ;
    // ////console.log(typeof(tab[i].price)) ;
    // //console.log(typeof(a)) ;
    // b=tab[i].number;
    // //console.log(b) ;
    // //console.log(typeof(b)) ;
    // ////console.log(typeof(tab[i].number))
    // price=a*b;
    // totalPrice=totalPrice+price
    // totalPrice = (tab[i].price)*(tab[i].number) +totalPrice;
    // totalPrice += Number(tab[i].price)*Number(tab[i].number);
    // //console.log(totalPrice);
  //${(product.price/100).toFixed(2).replace(".",",")}€
  }
  //console.log(totalPrice);
  totalHTML.textContent= `${(totalPrice/100).toFixed(2).replace(".",",")}€ `;
  return totalPrice;
}

function calcAmountToPay(totalPrice,shippingFees){//total à payer=prixTotal+frais de port
  let AmountToPay=0;
  //console.log(AmountToPay);
  AmountToPay=totalPrice+(shippingFees*100);//car on fait tout nos calculs en centimes)
  //console.log(AmountToPay);
  shippingFeesHTML.innerHTML=`${(shippingFees).toFixed(2).replace(".",",")}€ `;
  totalAmountHTML.innerHTML= `${(AmountToPay/100).toFixed(2).replace(".",",")}€ `;
}
  
//function deleteItems() {
  //this.pcross
  //console.log('que supprimer??');
 //trouver ce qui est clické, le suppr de proctTab
 //    showCart(productTab);
 //let totalPrice=calcTotal(productTab);
 //calcAmountToPay(totalPrice,ShippingFees);

//}



// fonction regex form commande (id du champ, nom const regex, id alert/ok)
function regexForm(id,regex,champAlert, champOk){//id et champ sans #devant
  //document.querySelector(`#${id}`).addEventListener('input', (e)=>{
    document.getElementById(id).addEventListener('input', (e)=>{
    //console.log('id');
    if (e.target.value.search(regex)===0){//si match
      document.getElementById(champAlert).style.display= 'none';
      document.getElementById(champOk).style.display= 'block';
      //console.log("match");
      return(true);
    }
    else if (e.target.value.search(regex)===-1) {//si match pas
      document.getElementById(champAlert).style.display= 'block';
      document.getElementById(champOk).style.display= 'none';
      //console.log("match pas!")
      return(false);
    }
  })
}



//  .......  tests à retirer  ........ //

//console.log(`shopping-cart`);


//  .......  const  ........ //
//const url="http://localhost:3000/api/teddies" ;
const noLoading = document.querySelector('.noLoading');
const form2Container=document.querySelector('.form2Container');
const itemsContainer=document.querySelector('.cartField');
const totalHTML=document.querySelector('.billCalc p:first-child');
const shippingFeesHTML=document.querySelector('.billCalc p:nth-child(2)');
const totalAmountHTML=document.querySelector('.billCalc p:nth-child(3)');
const teddyNumbers=document.querySelectorAll('.cart-teddyNumber');
const teddyPrices=document.querySelectorAll('.cart-teddyPrice');
//const teddyPrices=document.getElementsByClassName('cart-teddyPrice');

const ShippingFees=0.2;





//  .......  code  ........ //

noWarning();
//document.querySelector('#shopperMailAlert').style.display= 'none';
//document.querySelector('#shopperMailOk').style.display= 'block';

var sentToCart=localStorage.getItem('sendToCart');
localStorage.removeItem('sendToCart');
////console.log(typeof(sentToCart));
////console.log(sentToCart);
var didWeJustSentToCart= sentToCart=="true"? true : false;
//console.log("didWeJustSentToCart"+didWeJustSentToCart);
// //console.log(typeof(didWeJustSentToCart));
var actualBasket=localStorage.getItem('productTabLS')
var isBasketEmpty= actualBasket==null? true : false;
//console.log("isBasketEmpty"+isBasketEmpty);

////console.log("****************************");

//if (weJustSentToCart==null || weJustSentToCart==false ) {
//if (didWeJustSentToCart==false) {
if (didWeJustSentToCart != true) {// on n'a rien envoyé au panier (juste cliqué lien panier ou shopping-cart.html )
  //console.log("rien fait!");
  if (isBasketEmpty==true) {//cas1= on a rien ajouté et  panier vide avant 
    //alors afficher html="panier vide"
    //console.log("panier vide1");
    //console.log(localStorage.getItem('productTabLS'));
    //console.log(localStorage.getItem('sendToCart'));
    form2Container.innerHTML=`<p class="centerTxt" style="font-family: 'Roboto', sans-serif; color: var(--main-color4)">Votre panier est désespérément vide !</p></br></br>`;
  }
  else {    //cas2= rien rajouté mais un panier existait -> afficher panier
    //console.log(" afficher panier="+actualBasket);
    var productTab=[];
    productTab=JSON.parse(localStorage.getItem('productTabLS'));
    showCart(productTab);
    let totalPrice=calcTotal(productTab);
    calcAmountToPay(totalPrice,ShippingFees);
    //calcTotal2(teddyPrices);
  }
}
else if (didWeJustSentToCart == true) {// on a envoyé un item au panier  
    //console.log("oui j'ai envoyé !");
    var productObjet=productObjetCreate();//on crée un objet avec les données du teddy envoyé au panier
    //console.log("productObjet =");
    //console.log(productObjet);

    if (isBasketEmpty==true) {// cas3= on a envoyé au panier et il était vide avant 
      //console.log("isBasketEmpty"+isBasketEmpty);
      var productTab=[];
      //console.log("productTab"+productTab);
      productTab.push(productObjet);//on push sur productTab
      //console.log("productTab après push=");
      //console.log(productTab);
      //localStorage.setItem('productTabLS',`${productTab}`);//on stocke sur local storage
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      //console.log("affiche productTab=mon ajout( vide avant)= "+productTab);
      //console.log("le productTabLS sauvé (vide+1ajout)"+localStorage.getItem('productTabLS')); 
      showCart(productTab);
      let totalPrice=calcTotal(productTab);
      calcAmountToPay(totalPrice,ShippingFees);
    }
    else{//// cas4= on a envoyé au panier et il était plein avant 
      productTab=JSON.parse(localStorage.getItem('productTabLS'));//crée productTab pour y mettre le contenu du panier
      //mais avant, on teste si item existe déjà dans panier(productObjet.name and productObjet.color) , si oui=>fusion
      //comparer(productTab,productObjet);
      console.log("avant else if");


      //******** */
      // let iteration=productTab.length;
      // for (let i = 0; i < iteration; i++) {
      //   if (productTab[i].name==productObjet.name  && productTab[i].color==productObjet.color ) {
      //   productTab[i].number+=productObjet.number;//si égalité, on additionne nombres seulement 
      //   console.log("passage if");
      //   console.log(i);
      //   }
      //   else{
      //     productTab.push(productObjet);//sinon on push productObjet sur productTab
      //     console.log("passage else");
      //     //console.log("productTab après push=");
      //     //console.log(productTab);
      //   }  
      // }
      //*************** */

      let iteration=productTab.length;//soluce
      let doublon=false;

       for (let i = 0; i < iteration; i++) {
              if (productTab[i].name==productObjet.name  && productTab[i].color==productObjet.color )
              {
              productTab[i].number+=productObjet.number;//si égalité, on additionne nombres seulement 
              console.log("passage if");
              doublon=true;
              console.log(doublon);
              }
       }         
      if(doublon==false){
        productTab.push(productObjet);//push mon objet que si n'a trouvé aucun match au final!
        console.log("fait le push");
      }


      //localStorage.setItem('productTabLS',`${productTab}`);//on stocke sur local storage
      console.log("apres else if");
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      showCart(productTab);
      let totalPrice=calcTotal(productTab);
      calcAmountToPay(totalPrice,ShippingFees);
      //console.log("affiche productTab=panier + mon ajout(pas vide avant)= "+productTab);
      //console.log("le productTabLS sauvé (plein+1ajout)"+localStorage.getItem('productTabLS')); 
    }
}


//------supprimer 1 item du panier---------
//let pcrossTab=document.querySelectorAll('.pcross');
//console.log(pcrossTab);


// for (const key in pcrossTab) {
//   console.log(key);
//   //console.log(values);
// }
// for (const iterator of pcrossTab) {
//   console.log(iterator);
// }



//------changer quantité---------



//---------regex----------

const regexNoNumber= /[^0-9]{2}/ ;//et au moins 2carac
const regexAll= /.{6}/ ;//et au moins 6carac
const regexCP= /[0-9]{5}/ ;//et au moins 5carac
const regexTel= /[0]{1}[1-9]{1}[0-9]{8}/;
const regexMail= /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


let regexFormName=regexForm("shopperName",regexNoNumber,'shopperNameAlert', 'shopperNameOk');// REGEX NOM
let regexFormForename=regexForm("shopperForename",regexNoNumber,'shopperForenameAlert', 'shopperForenameOk');// REGEX PRENOM
let regexFormAdresse=regexForm("shopperAdresse",regexAll,'shopperAdresseAlert', 'shopperAdresseOk');// REGEX ADRESSE
let regexFormCP=regexForm("shopperCP",regexCP,'shopperCPAlert', 'shopperCPOk');// REGEX CP
let regexFormCity=regexForm("shopperCity",regexNoNumber,'shopperCityAlert', 'shopperCityOk');// REGEX CITY
let regexFormTel=regexForm("shopperTel",regexTel,'shopperTelAlert', 'shopperTelOk');// REGEX TEL
let regexFormMail=regexForm("shopperMail",regexMail,'shopperMailAlert', 'shopperMailOk');// REGEX MAIL

console.log("!!!!!");
console.log(regexFormName);
console.log("!!!!!");


//------------ validation finale commande-----------

document.querySelector('#validOrderButton').addEventListener('click', function() {
  //verifier tous champs formulaire ? marqueur?(regexFormName etc)
  //console.log("on verifie tous champs formulaire ")
  //et verifier que panier pas nul

  if (productTab!=null) {//si panier non vide

    let contact = {
      firstName: document.getElementById("shopperForename").value,
      lastName: document.getElementById("shopperName").value,
      address: document.getElementById("shopperAdresse").value,
      city: document.getElementById("shopperCity").value,
      email: document.getElementById("shopperMail").value
  };
    //localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
    let jsonToSend = JSON.stringify({contact, productTab});
    console.log("jsonToSend (le body)");
    console.log(jsonToSend);
//---fetch---

fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode:'cors',
        body: jsonToSend
    }).then(response => {
        console.log("return response.json" );
        return response.json();


    })
    // Enregistre les infos du formulaire + id + total de la commande
//pour affichage dans la page confirmation.html //
    .then( r => {
        localStorage.setItem('contact', JSON.stringify(r.contact));
        localStorage.setItem('orderId', JSON.stringify(r.orderId));
        localStorage.setItem('total', JSON.stringify(total));
        console.log("on ecrit localStorage" );
        //localStorage.removeItem('anyItem');
        //window.location.replace("./confirmation.html");
    })
    .catch((e) => {
        console.error("erreur : ", status.code)
        warning();
        // displayError();
        // console.log(e);
    })




//---fetch---




  console.log("on vide localStorage?");
  //localStorage.clear();

  console.log("on part à la page my-orders.html ");
  //document.location.href="my-orders.html";//go to my-orders.html

}else{

  console.log("pas de panier à envoyer");
}
})




//modif:
//quand refresh garder panier(ou clic lien)=ok
//si x suppr
//si +/- ajuster prix et total 
///si mmeme nom et couleur  additionner
//attention erreur quand acces panier vide la 1ere fois (??)

//pb:le total, POST, verif finale, (fonction regex)








// if (condition) {
  
// }
// else if (condition) {
  
// }

// else if (condition) {
  
// }

// else {
  
// } 



  // var productObjet=productObjetCreate();
  // //console.log(productObjet);
  // var productTab=[];
  // productTab== localStorage.getItem('productTabLS')





//  let bidule=localStorage.getItem('sendToCart');
//  //console.log(bidule);




// var essai1 = localStorage.getItem('essai1');
// //console.log(essai1);
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
// //console.log(objContact);

// //tableau de produits  

// var productTab9=[
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
// //console.log(productTab9);



// let productTab2=["Arnold, 39, chocolate,3","Gustav, 45, white,"];


// let dataToSend= objContact,productTab9;
// //console.log(dataToSend);
// let jsonToSend= JSON.stringify(dataToSend);
// //console.log("123");
// //console.log(jsonToSend);

// //--------------------com------
// var jsonOrder=JSON.stringify({ objContact, productTab });
// //console.log(jsonOrder);



// var promise1=fetch("http://localhost:3000/api/teddies/order",{
//   method: "POST",
//   headers:{"Content-Type": "application/json"},
//   body: jsonOrder
// });

// //console.log(promise1);


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
// //console.log(fetch(urlTeddy));

//2.verifie réponse api: status 200
// fetch(urlTeddy)
//   .then(res=> //console.log(res))

//3.verifie transfo json
// fetch(urlTeddy)
//   .then(res=>//console.log(res.json()))

//4.verifie transfo objet; donne 1 1objet avec _id, colors:array[4], description, imageUrl, name, price
// fetch(urlTeddy)
//   .then(res=>res.json())
//   .then(data=>//console.log(data))


//5. exploitation (objet, tableau )... 
//   fetch(urlTeddy)
//  .then(res => {
//       if (res.ok) {
//         //console.log("success(fetch url)!");
//         return res.json();
//       } else {
//         console.error("erreur : ", status.code)
//         warning();
//       }
//     })
//     .then(data => {
//       //console.log(data); //affiche les data de l'api (json=tableau d'objet)
//       // Création de la variable qui s'ajoutera aux éléments //
//       let tedId=data._id;
//       //console.log(tedId); //
//       let tedName=data.name;
//       //console.log(tedName); //
//       let tedPrice=data.price;
//       //console.log(tedPrice); //
//       let tedDescription=data.description;
//       //console.log(tedDescription); //
//       let tedUrl=data.imageUrl;
//       //console.log(tedUrl); //
//       let tedColors=data.colors;
//       // //console.log(tedColors); //
//       // //console.log(tedcolors[0]);
//       for (let index = 0; index < tedColors.length; index++) {
//         //console.log(tedColors[index]);}

//       //console.log("for of colors[] : ");//
//       for (const element of data.colors) {
//         //console.log(element);
//       }

//       //console.log("for in objet data : ");//
//       for (const property in data) {
//         //console.log(`${property}: ${data[property]}`);
//       } 
//     });







//essai2
// let jsonOrder=JSON.stringify({ objContact, productTab });
// //console.log(jsonOrder);

// fetch("http://localhost:3000/api/teddies/order",
//  {method: "POST", headers:{"Content-Type": "application/json"}, body: jsonOrder})
//   .then(res => {
//     if (res.ok) {
//       //console.log("success(fetch url)!");
//       return res.json();
//     } else {
//       //console.log("failed (fetch url)!")
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