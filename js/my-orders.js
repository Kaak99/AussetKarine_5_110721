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



if (orderId!=null) {//si pas de numéro de commande 

  document.querySelector('.report').style.display='block' ;//on affiche le report
  document.querySelector('.noOrder').style.display='none' ;//et cache noOrder
  
  const fornameHTML=document.querySelector('.fornameText');
  const cityHTML=document.querySelector('.cityText');
  const orderIdHTML=document.querySelector('.orderId');

  const forname=JSON.parse(localStorage.getItem('contact')).firstName;
  //console.log(forname);
  const city=JSON.parse(localStorage.getItem('contact')).city;
  //console.log(city);

//on affiche id prenom et ville
  //fornameHTML.innerHTML = forname;
  fornameHTML.textContent=forname;
  cityHTML.textContent=city;
  orderIdHTML.textContent=orderId;
  console.log(typeof(forname))
  console.log(typeof(city))
  console.log(typeof(orderId))
}
else{
  console.log("orderId="+orderId)
  document.querySelector('.report').style.display='none' ;//on cache le report
  document.querySelector('.noOrder').style.display='flex' ;//et on affiche noOrder
}



