//  .......  fonctions  ........ //

//afficher warning "pb réseau "
function warning(){
  noLoading.style.display = 'block' ;
}

//ne pas afficher warning
function noWarning(){
  noLoading.style.display = 'none' ;
}

// création objet productObjet (nounours panier)//
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


// création panier à afficher et affichage//
function showCart(tab){
  let itemsString = "";// Création de la variable qui concatenera tous éléments
  for (let i = 0; i < tab.length; i++) {
    itemsString +=
     `<div class="oneCartItem d-flex">
        <p class="pcross" data-attr=${i}><i class="fas fa-times"></i></p>
        <a href=""><img src="../images/test.webp" alt="teddybear image"></a>
        <p class="cart-teddyName cart">${tab[i].name}</p>
        <p class="cart-teddyColor cart">${tab[i].color}</p>
        <label for="cart-teddyNumber${i}"></label>
        <input type="number" value="${tab[i].number}" id="cart-teddyNumber${i}" name="cart-teddyNumber" class="cart-teddyNumber" data-attr=${i} min="1" max="99">
        <p class="cart-teddyPrice cart">${(tab[i].price*tab[i].number/100).toFixed(2).replace(".",",")}€</p>
      </div>`
  };
  itemsContainer.innerHTML= itemsString;
}

// calcul & affiche le montant à payer (sans frais de port) //
function calcTotal(tab){
  let totalPrice=0;
  for (let i = 0; i < tab.length; i++) {
    totalPrice = (tab[i].price)*(tab[i].number) +totalPrice;
  }
  totalHTML.textContent= `${(totalPrice/100).toFixed(2).replace(".",",")}€ `;
  return totalPrice;
}

// calcul  & affiche le montant total à payer =avec frais de port) //
function calcAmountToPay(totalPrice,shippingFees){//total à payer=prixTotal+frais de port
  let amountToPay=0;
  amountToPay=totalPrice+(shippingFees*100);//car on fait tout nos calculs en centimes)
  shippingFeesHTML.innerHTML=`${(shippingFees).toFixed(2).replace(".",",")}€ `;
  totalAmountHTML.innerHTML= `${(amountToPay/100).toFixed(2).replace(".",",")}€ `;
  localStorage.setItem('amountToPay', JSON.stringify(amountToPay));
}
  

// fonction regex : compare input & regex et affiche message ok ou alerte sous input
//(id du champ input testé, nom const regex à utiliser , id alert/ok à afficher )
function regexForm(id,regex,champAlert, champOk){//id et champ sans #devant
  document.getElementById(id).addEventListener('input', (e)=>{
    if (e.target.value.search(regex)===0){//si match
      document.getElementById(champAlert).style.display= 'none';
      document.getElementById(champOk).style.display= 'block';
      localStorage.setItem('regex'+id, JSON.stringify(true));
      objetValidateur[id]=true;
      console.log(objetValidateur);
      localStorage.setItem('objetValidateur', JSON.stringify(objetValidateur));
      //if (objetValidateur===objetTemoin){

    }
    else {//si match pas
    document.getElementById(champAlert).style.display= 'block';
    document.getElementById(champOk).style.display= 'none';
    objetValidateur[id]=false;
    localStorage.setItem('regex'+id, JSON.stringify(false));
    localStorage.setItem('objetValidateur', JSON.stringify(objetValidateur));

    
  }
  if(objetValidateur.shopperName && objetValidateur.shopperForename && objetValidateur.shopperAdresse && objetValidateur.shopperCP && objetValidateur.shopperCity && objetValidateur.shopperTel && objetValidateur.shopperMail) {
    regexValidation=true;
    console.log("11");
    console.log(regexValidation);
    localStorage.setItem('regexValidation',JSON.stringify(regexValidation));
    const validOrderButton=document.querySelector('#validOrderButton');
    validOrderButton.disabled=false;
  }
  else{
    regexValidation=false;
    console.log("113");
    console.log(regexValidation);
    localStorage.setItem('regexValidation',JSON.stringify(regexValidation));
    const validOrderButton=document.querySelector('#validOrderButton');
    validOrderButton.disabled=true;
  }
  })
}


//calcul du prix du panier à partir du tableau des products achetés renvoyés par backend suite au post
function calculBillBack(array) {
  let billBack=0;
  for (let index = 0; index < array.length; index++) {
    billBack += array[i].price;
    console.log(billBack);
   } 
   return billBack;
}


//  .......  tests à retirer  ........ //




//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');//div avec alert "pb reseau" si probleme lors get
const form2Container=document.querySelector('.form2Container');//container panier+form
const itemsContainer=document.querySelector('.cartField');//container items panier
const totalHTML=document.querySelector('.billCalc p:first-child');//somme items
const shippingFeesHTML=document.querySelector('.billCalc p:nth-child(2)');//frais de port
const totalAmountHTML=document.querySelector('.billCalc p:nth-child(3)');//total
const teddyNumbers=document.querySelectorAll('.cart-teddyNumber');//nombre teddy
const teddyPrices=document.querySelectorAll('.cart-teddyPrice');//prix du/des teddies

const ShippingFees=0.2; //noter ici les frais de port en € (type 88.88€)


//  .......  code  ........ //



//1// ---------------    1/ le panier   ---------------- //

noWarning();
var sentToCart=localStorage.getItem('sendToCart');
localStorage.removeItem('sendToCart');
var didWeJustSentToCart= sentToCart=="true"? true : false;
var actualBasket=localStorage.getItem('productTabLS')
var isBasketEmpty= actualBasket==null? true : false;

console.log("isBasketEmpty="+isBasketEmpty);
console.log("****************************");


//4 cas différents selon qu'on vient d'envoyer un item au panier ou non, qu'il était vide ou non 

if (didWeJustSentToCart != true) {// on n'a rien envoyé au panier (juste cliqué lien panier shopping-cart.html )

  if (isBasketEmpty==true) {//cas1= on a rien ajouté et  panier vide avant -->html= "panier vide"
    form2Container.innerHTML=`<p class="centerTxt" style="font-family: 'Roboto', sans-serif; color: var(--main-color4)">Votre panier est désespérément vide !</p></br></br>`;
  }
  else {    //cas2= rien rajouté mais un panier existait -> afficher panier
    var productTab=[];
    productTab=JSON.parse(localStorage.getItem('productTabLS'));//on met données du panier de localStoage vers productTab
    showCart(productTab);
    let totalPrice=calcTotal(productTab);
    calcAmountToPay(totalPrice,ShippingFees);
  }
}

else if (didWeJustSentToCart == true) {// on a envoyé un item au panier  
    var productObjet=productObjetCreate();//on crée un objet avec les données du teddy envoyé au panier

    if (isBasketEmpty==true) {// cas3= on a envoyé au panier et il était vide avant 
      var productTab=[];
      productTab.push(productObjet);//on push sur productTab
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      showCart(productTab);
      let totalPrice=calcTotal(productTab);
      calcAmountToPay(totalPrice,ShippingFees);
    }
    else{//// cas4= on a envoyé au panier et il était plein avant 
      productTab=JSON.parse(localStorage.getItem('productTabLS'));//crée productTab pour y mettre le contenu du panier

      //si déja meme item dans panier, il faudra les fusionner 
      let doublon=false;

       for (let i = 0; i < productTab.length; i++) {//on check si meme nom ET même couleur
              if (productTab[i].name==productObjet.name  && productTab[i].color==productObjet.color )
              {
              productTab[i].number+=productObjet.number;//si oui : fusion (on additionne nombres de l'tem) 
              doublon=true;
              }
       }         
      if(doublon==false){//si tout parcouru et pas de doublon repéré : on push
        productTab.push(productObjet);//push mon objet que si n'a trouvé aucun match au final!
        console.log("fait le push");
      }


      console.log("apres else if");
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage tableau de nounours du panier 
      showCart(productTab);//on affiche le panier 
      let totalPrice=calcTotal(productTab);//et les montants
      calcAmountToPay(totalPrice,ShippingFees);
    }
}


//------supprimer 1 item du panier---------
let pcrossTab=document.querySelectorAll('.pcross');//les croix pour supprimer chaque item

pcrossTab.forEach(element => {
  element.addEventListener('click',function() {
    productTab.splice((this.getAttribute('data-attr')),1);//retire l'élément de productTab
    if (productTab=="") {//si il est alors vide(panier vide)
      localStorage.removeItem('productTabLS');//alors on supprime le panier du local storage
    }else{
    localStorage.setItem('productTabLS',JSON.stringify(productTab));//sinon on stocke changement sur local storage
    }
    // showCart(productTab);
    // let totalPrice=calcTotal(productTab);
    // calcAmountToPay(totalPrice,ShippingFees);
    document.location.reload();//refresh
  })
});


//------modifier quantité d'1 item du panier---------
let inputNumberTab=document.querySelectorAll('.cart-teddyNumber');

inputNumberTab.forEach(element => {
  element.addEventListener('input',function() {
    productTab[this.getAttribute('data-attr')].number=this.value;//si modif input number d'un nounours du panier(jusqu'à 1 min, par html)
    localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke changement sur local storage
    // showCart(productTab);
    // let totalPrice=calcTotal(productTab);
    // calcAmountToPay(totalPrice,ShippingFees);
    document.location.reload();//refresh
  })
});



//2// ---------    2/ le formulaire avec données client   -------- //

//---------regex----------
const regexNoNumber= /[^0-9]{2}/ ;//pas de nombre et au moins 2carac
const regexAll= /.{6}/ ;// tout possible et au moins 6carac
const regexCP= /[0-9]{5}/ ;//  au moins 5carac de 0 à 9
const regexTel= /[0]{1}[1-9]{1}[0-9]{8}/;// commence par 01à09 puis 8 chiffres 
const regexMail= /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;//xx.xx@xx

let contact = {};// l'objet qui contiendra toutes les infos du contact(issu du formulaire) à envoyer lors post

let objetValidateur={
  shopperName:false,
  shopperForename:false,
  shopperAdresse:false,
  shopperCP:false,
  shopperCity:false,
  shopperTel:false,
  shopperMail:false
}
let objetTemoin={
  shopperName:true,
  shopperForename:true,
  shopperAdresse:true,
  shopperCP:true,
  shopperCity:true,
  shopperTel:true,
  shopperMail:true
}

console.log(objetValidateur);
console.log(objetTemoin);

let regexValidation=false;
console.log('regexValidation'+regexValidation);
//let regexValidation=JSON.stringify(false);

localStorage.setItem('regexValidation',regexValidation);

// let valName=false;
// let valForname=false;
// let valAdress=false;
// let valCP=false;
// let valCity=false;
// let valTel=false;
// let valMail=false;

// console.log("ligne256");
// console.log(valName);
// console.log(valForname);
// console.log(valAdress);
// console.log(valCP);
// console.log(valCity);
// console.log(valTel);
// console.log(valMail);



//si panier non null (car si null, formulaire pas affiché=existe pas!)
if (productTab!=null) {

  //1: on valide chaque champ//(ligne67=regexForm())

    regexForm("shopperName",regexNoNumber,'shopperNameAlert', 'shopperNameOk');// REGEX NOM
    regexForm("shopperForename",regexNoNumber,'shopperForenameAlert', 'shopperForenameOk');// REGEX PRENOM
    regexForm("shopperAdresse",regexAll,'shopperAdresseAlert', 'shopperAdresseOk');// REGEX ADRESSE
    regexForm("shopperCP",regexCP,'shopperCPAlert', 'shopperCPOk');// REGEX CP
    regexForm("shopperCity",regexNoNumber,'shopperCityAlert', 'shopperCityOk');// REGEX CITY
    regexForm("shopperTel",regexTel,'shopperTelAlert', 'shopperTelOk');// REGEX TEL
    regexForm("shopperMail",regexMail,'shopperMailAlert', 'shopperMailOk');// REGEX MAIL

}
    
  //2: on active le bouton de commande si TOUS les champs sont valides //
/*let objet2=JSON.parse(localStorage.getItem('objetValidateur'));
  if (productTab!=null && objet2===objetTemoin) {
    console.log("22");
    regexValidation=true;}
    */

  // valName=JSON.parse(localStorage.getItem('regexshopperName'));
  // valForname=JSON.parse(localStorage.getItem('regexshopperForename'));
  // valAdress=JSON.parse(localStorage.getItem('regexshopperAdresse'));
  // valCP=JSON.parse(localStorage.getItem('regexshopperCP'));
  // valCity=JSON.parse(localStorage.getItem('regexshopperCity'));
  // valTel=JSON.parse(localStorage.getItem('regexshopperTel'));
  // valMail=JSON.parse(localStorage.getItem('regexshopperMail'));
  // console.log('ligne293');
  // console.log(valName);
  // console.log(valForname);
  // console.log(valAdress);
  // console.log(valCP);
  // console.log(valCity);
  // console.log(valTel);
  // console.log(valMail);


  //if (valName==true && valForname==true && valAdress==true && valCP==true && valCity==true && valTel==true && valMail==true) {
  //if (valName && valForname && valAdress && valCP && valCity && valTel && valMail) {

    //if (objetValidateur.shopperName && objetValidateur.shopperForename && objetValidateur.shopperAdresse && objetValidateur.shopperCP && objetValidateur.shopperCity && objetValidateur.shopperTel && objetValidateur.shopperMail) {
    //if (true) {
    /*
    if (productTab!=null && objetValidateur===objetTemoin) {
    regexValidation=true;
    console.log(regexValidation);
    localStorage.setItem('regexValidation',JSON.stringify(regexValidation));
    const validOrderButton=document.querySelector('#validOrderButton');
    validOrderButton.disabled=false;
    //créons l'objet du contact (issu du formulaire) pour la commande
    contact = {
      firstName: document.getElementById("shopperForename").value,
      lastName: document.getElementById("shopperName").value,
      address: document.getElementById("shopperAdresse").value,
      city: document.getElementById("shopperCity").value,
      email: document.getElementById("shopperMail").value
    };
    }
    else{
      regexValidation=false;
      localStorage.setItem('regexValidation',JSON.stringify(regexValidation));
    }
*/





//------------ validation finale commande-----------

//au click du formulaire (rajouter //si panier non null avant?car alors bouton n'existe pas)
document.querySelector('#validOrderButton').addEventListener('click', function() {


    //créons le tableau d'id products représentant la commande
    let products=[];
    // console.log("products=");
    // console.log(products);
    // console.log("productTab=");
    // console.log(productTab);

    for (let i = 0; i < productTab.length; i++) {
      products[i]=productTab[i].id;
      console.log(products);
      console.log(typeof(products));
    }
    console.log("products=");
    console.log(products);
  
      //créons l'objet du contact (issu du formulaire) pour la commande
    let contact = {
      firstName: document.getElementById("shopperForename").value,
      lastName: document.getElementById("shopperName").value,
      address: document.getElementById("shopperAdresse").value,
      city: document.getElementById("shopperCity").value,
      email: document.getElementById("shopperMail").value
    };


      let jsonToSend = JSON.stringify({contact, products});
      console.log("jsonToSend (le body)");
      console.log(jsonToSend);

      //puis fetch : on poste
      fetch("http://localhost:3000/api/teddies/order",{method:'POST', headers:{'Content-Type':'application/json'},mode:'cors',body:jsonToSend})
        .then(res => {
          if (res.ok) {
            console.log("success(fetch url)!");
            return res.json();
          }
          else {
          console.log("failed (fetch url)!");
          warning("erreur fetch");
          }
        })
    
        .then( r => {
        console.log(r);
        //alert("r:"+r);

        let amountToPay=JSON.parse(localStorage.getItem('amountToPay'));




        //alert('apres'+amountToPay+typeof(amountToPay));
        localStorage.clear(); //localStorage.removeItem('productTabLS'); 
        //localStorage.setItem('billBack', JSON.stringify(billBack));
        localStorage.setItem('retourPost', JSON.stringify(r));
        let pprice=0;
        for (let i = 0; i < r.products.length; i++) {
          pprice += r.products[i].price;
        }
        pprice += (ShippingFees*100);
        localStorage.setItem('pprice', JSON.stringify(pprice));
        localStorage.setItem('contact', JSON.stringify(r.contact));
        localStorage.setItem('orderId', JSON.stringify(r.orderId));
        localStorage.setItem('billRecord', JSON.stringify(amountToPay));






        //on va à page de commande 
        window.location.replace("./my-orders.html");
        //document.location.href="my-orders.html";

        })
        .catch((e) => {   
          console.log(e);
        })  
 

    //}//fin 2eme if
    /*else{alert("données contact incomplètes");
    }*/
    
  //}//fin 1er if
  /*else{alert("commande vide");
  }*/

})//fin listener