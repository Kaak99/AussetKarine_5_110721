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


function calcTotal(tab){
  let totalPrice=0;
  for (let i = 0; i < tab.length; i++) {
    totalPrice = (tab[i].price)*(tab[i].number) +totalPrice;
  }
  totalHTML.textContent= `${(totalPrice/100).toFixed(2).replace(".",",")}€ `;
  return totalPrice;
}

function calcAmountToPay(totalPrice,shippingFees){//total à payer=prixTotal+frais de port
  let amountToPay=0;
  amountToPay=totalPrice+(shippingFees*100);//car on fait tout nos calculs en centimes)
  shippingFeesHTML.innerHTML=`${(shippingFees).toFixed(2).replace(".",",")}€ `;
  totalAmountHTML.innerHTML= `${(amountToPay/100).toFixed(2).replace(".",",")}€ `;
  localStorage.setItem('amountToPay', JSON.stringify(amountToPay));
}
  


// fonction regex form commande (id du champ, nom const regex, id alert/ok)
function regexForm(id,regex,champAlert, champOk){//id et champ sans #devant
  //document.querySelector(`#${id}`).addEventListener('input', (e)=>{
    document.getElementById(id).addEventListener('input', (e)=>{
    if (e.target.value.search(regex)===0){//si match
      document.getElementById(champAlert).style.display= 'none';
      document.getElementById(champOk).style.display= 'block';
      //regexSum++;
      console.log(regexSum);
      localStorage.setItem('regexSum', JSON.stringify(regexSum));
      localStorage.setItem('regex'+id, JSON.stringify(true));
    }
    // else if (e.target.value.search(regex)===-1) {//si match pas
    else {//si match pas
      document.getElementById(champAlert).style.display= 'block';
      document.getElementById(champOk).style.display= 'none';
      localStorage.setItem('regex'+id, JSON.stringify(false));
      //regexSum--;
      localStorage.setItem('regexSum', JSON.stringify(regexSum));
      //return(false);
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
const noLoading = document.querySelector('.noLoading');
const form2Container=document.querySelector('.form2Container');
const itemsContainer=document.querySelector('.cartField');
const totalHTML=document.querySelector('.billCalc p:first-child');
const shippingFeesHTML=document.querySelector('.billCalc p:nth-child(2)');
const totalAmountHTML=document.querySelector('.billCalc p:nth-child(3)');
const teddyNumbers=document.querySelectorAll('.cart-teddyNumber');
const teddyPrices=document.querySelectorAll('.cart-teddyPrice');

const ShippingFees=0.2; //noter ici les frais de port en € (type 88.88)





//  .......  code  ........ //


noWarning();
var sentToCart=localStorage.getItem('sendToCart');
localStorage.removeItem('sendToCart');
console.log(typeof(sentToCart));
console.log(sentToCart);
var didWeJustSentToCart= sentToCart=="true"? true : false;
console.log("didWeJustSentToCart="+didWeJustSentToCart);
console.log(typeof(didWeJustSentToCart));
var actualBasket=localStorage.getItem('productTabLS')
var isBasketEmpty= actualBasket==null? true : false;
console.log("isBasketEmpty="+isBasketEmpty);

console.log("****************************");



if (didWeJustSentToCart != true) {// on n'a rien envoyé au panier (juste cliqué lien panier shopping-cart.html )
  if (isBasketEmpty==true) {//cas1= on a rien ajouté et  panier vide avant -->html= "panier vide"
    console.log("CAS1 = panier vide ET rien rajouté");
    form2Container.innerHTML=`<p class="centerTxt" style="font-family: 'Roboto', sans-serif; color: var(--main-color4)">Votre panier est désespérément vide !</p></br></br>`;
  }
  else {    //cas2= rien rajouté mais un panier existait -> afficher panier
    console.log(" CAS2 = panier existait ET rien rajouté --> html=afficher panier="+actualBasket);
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
      console.log("CAS3 = on a envoyé au panier et il était vide avant ");
      console.log("isBasketEmpty"+isBasketEmpty);
      var productTab=[];
      productTab.push(productObjet);//on push sur productTab
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      showCart(productTab);
      let totalPrice=calcTotal(productTab);
      calcAmountToPay(totalPrice,ShippingFees);
    }
    else{//// cas4= on a envoyé au panier et il était plein avant 
      console.log("CAS4 = on a envoyé au panier et il était plein avant ");
      productTab=JSON.parse(localStorage.getItem('productTabLS'));//crée productTab pour y mettre le contenu du panier


      let doublon=false;

       for (let i = 0; i < productTab.length; i++) {
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


      console.log("apres else if");
      localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
      showCart(productTab);
      let totalPrice=calcTotal(productTab);
      calcAmountToPay(totalPrice,ShippingFees);
    }
}


//------supprimer 1 item du panier---------
let pcrossTab=document.querySelectorAll('.pcross');
console.log(pcrossTab);

pcrossTab.forEach(element => {
  element.addEventListener('click',function() {
    console.log(this);
    console.log(this.getAttribute('data-attr'));
    console.log(typeof(this.getAttribute('data-attr')));
    console.log("productTab=");
    console.log(productTab);
    productTab.splice((this.getAttribute('data-attr')),1);
    console.log("productTab=");
    console.log(productTab);
    if (productTab=="") {
      localStorage.removeItem('productTabLS');//,idNow,colorNow,nameNow,numberNow,priceNow
    }else{
    localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
    }
    // showCart(productTab);
    // let totalPrice=calcTotal(productTab);
    // calcAmountToPay(totalPrice,ShippingFees);
    document.location.reload();
  })
});


//------modifier quantité d'1 item du panier---------
let inputNumberTab=document.querySelectorAll('.cart-teddyNumber');
console.log(inputNumberTab);

inputNumberTab.forEach(element => {
  element.addEventListener('input',function() {
    console.log(this);
    console.log(this.value);
    console.log(typeof(this.value));
    console.log(typeof(this.getAttribute('data-attr')));
    productTab[this.getAttribute('data-attr')].number=this.value;
    console.log(productTab);
    localStorage.setItem('productTabLS',JSON.stringify(productTab));//on stocke sur local storage
    // showCart(productTab);
    // let totalPrice=calcTotal(productTab);
    // calcAmountToPay(totalPrice,ShippingFees);
    document.location.reload();
  })
});




//---------regex----------

const regexNoNumber= /[^0-9]{2}/ ;//et au moins 2carac
const regexAll= /.{6}/ ;//et au moins 6carac
const regexCP= /[0-9]{5}/ ;//et au moins 5carac
const regexTel= /[0]{1}[1-9]{1}[0-9]{8}/;
const regexMail= /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


//si panier non null
if (productTab!=null) {
    
  //1: on valide chaque champ//

  //let regexSum=0;
  var regexSum=0;
    regexForm("shopperName",regexNoNumber,'shopperNameAlert', 'shopperNameOk');// REGEX NOM
    regexForm("shopperForename",regexNoNumber,'shopperForenameAlert', 'shopperForenameOk');// REGEX PRENOM
    regexForm("shopperAdresse",regexAll,'shopperAdresseAlert', 'shopperAdresseOk');// REGEX ADRESSE
    regexForm("shopperCP",regexCP,'shopperCPAlert', 'shopperCPOk');// REGEX CP
    regexForm("shopperCity",regexNoNumber,'shopperCityAlert', 'shopperCityOk');// REGEX CITY
    regexForm("shopperTel",regexTel,'shopperTelAlert', 'shopperTelOk');// REGEX TEL
    regexForm("shopperMail",regexMail,'shopperMailAlert', 'shopperMailOk');// REGEX MAIL


    
  //2: on active le bouton de commande si TOUS les champs sont valides //

  //let regexValidation=JSON.stringify(false);
  let regexValidation=false;
  //localStorage.setItem('regexValidation',regexValidation);

  //let valName=JSON.parse(localStorage.getItem('regexshopperName'));
  let valName=localStorage.getItem('regexshopperName');
  var valForname=JSON.parse(localStorage.getItem('regexshopperForename'));
  let valAdress=JSON.parse(localStorage.getItem('regexshopperAdresse'));
  let valCP=JSON.parse(localStorage.getItem('regexshopperCP'));
  let valCity=JSON.parse(localStorage.getItem('regexshopperCity'));
  let valTel=JSON.parse(localStorage.getItem('regexshopperTel'));
  let valMail=JSON.parse(localStorage.getItem('regexshopperMail'));
  console.log(valName);
  console.log(valForname);
  console.log(valAdress);
  console.log(valCP);
  console.log(valCity);
  console.log(valTel);
  console.log(valMail);


  //if (valName==true && valForname==true && valAdress==true && valCP==true && valCity==true && valTel==true && valMail==true) {
  if (valName && valForname && valAdress && valCP && valCity && valTel && valMail) {
    regexValidation=true;
    console.log(regexValidation);
    localStorage.setItem('regexValidation',JSON.stringify(regexValidation));
    const validOrderButton=document.querySelector('#validOrderButton');
    validOrderButton.disabled=false;
  }
  else{
    regexValidation=false;
    localStorage.setItem('regexValidation',JSON.stringify(regexValidation));
  }



}

//------------ validation finale commande-----------

//au click du formulaire 
document.querySelector('#validOrderButton').addEventListener('click', function() {




  if (productTab!=null && JSON.parse(regexValidation)==true) {
    //verifier tous champs formulaire ? marqueur?(regexFormName etc)  

    //créons le tableau d'id products représentant la commande
    let products=[];
    console.log("products=");
    console.log(products);
    console.log("productTab=");
    console.log(productTab);

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

    if (contact.firstName && contact.lastName && contact.address && contact.city && contact.email) {
      
      //créons l'objet json à poster ( jsonToSend )
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

        // let billBack=calculBillBack(r.products);//le total calculé d'après le retour du post
        // console.log(billBack);

        // let billBack=0;
        // for (let index = 0; index < array.length; index++) {
        //   billBack += array[i].price;
        //   console.log(billBack);
        // } 
        //  alert(billBack);



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
 

    }//fin 2eme if
    else{alert("données contact incomplètes");
    }
    
  }//fin 1er if
  else{alert("commande vide");
  }

})//fin listener



