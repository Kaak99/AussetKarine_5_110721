//  .......  fonctions  ........ //





//  .......  tests à retirer  ........ //

//console.log(`shopping-cart`);


//  .......  const  ........ //
//const url="http://localhost:3000/api/teddies" ;
// const noOrder = document.querySelector('.noOrder');
// const orderIdHTML=document.querySelector('.orderId');


var orderId="";

console.log(orderId);
orderId=JSON.parse(localStorage.getItem('orderId'));//temoin de existence ou non d'une commande 
console.log(orderId);



//  .......  code  ........ //
//alert("!start!");
console.log("hello Wld");
console.log("****************************");



if (orderId!=null) {//si numéro de commande 
//attention verifier aussi de d ou on vient ! lien? validation pannier?
  document.querySelector('.report').style.display='block' ;//on affiche le report
  document.querySelector('.noOrder').style.display='none' ;//et cache noOrder
  
  const fornameHTML=document.querySelector('.fornameText');
  const cityHTML=document.querySelector('.cityText');
  const orderIdHTML=document.querySelector('.orderId');
  const amountHTML=document.querySelector('.amountText');
  const amountBackHTML=document.querySelector('.amountBack');

  const forname=JSON.parse(localStorage.getItem('contact')).firstName;
  //console.log(forname);
  const city=JSON.parse(localStorage.getItem('contact')).city;
  //console.log(city);
  let billRecord=JSON.parse(localStorage.getItem('billRecord'));
  //console.log(billRecord);
  let amountBack=JSON.parse(localStorage.getItem('pprice'));
  //console.log(billRecord);

//on affiche id prenom et ville et montant 
  //fornameHTML.innerHTML = forname;
  fornameHTML.textContent=forname;
  cityHTML.textContent=city;
  orderIdHTML.textContent=orderId;
  amountHTML.textContent=`${(billRecord/100).toFixed(2).replace(".",",")}€ `;
  amountBackHTML.textContent=`${(amountBack/100).toFixed(2).replace(".",",")}€ `;
  console.log(typeof(forname))
  console.log(typeof(city))
  console.log(typeof(orderId))
}
else{
  console.log("orderId="+orderId)
  document.querySelector('.report').style.display='none' ;//on cache le report
  document.querySelector('.noOrder').style.display='flex' ;//et on affiche noOrder
}




