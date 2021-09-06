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

//console.log(`shopping-cart`);


//  .......  const  ........ //
//const url="http://localhost:3000/api/teddies" ;
const noLoading = document.querySelector('.noLoading');

const orderIdHTML=document.querySelector('.orderId');
const orderId=JSON.parse(localStorage.getItem('orderId'));
console.log(orderId);

const fornameHTML=document.querySelector('.fornameText');
const cityHTML=document.querySelector('.cityText');

const forname=JSON.parse(localStorage.getItem('contact')).firstName;
console.log(forname);
const city=JSON.parse(localStorage.getItem('contact')).city;
console.log(city);




//  .......  code  ........ //
//alert("!start!");
// console.log("hello Wld");
//console.log("****************************");
noWarning();

if (orderId!=0) {
  //fornameHTML.innerHTML = forname;
  fornameHTML.textContent=forname;
  cityHTML.textContent=city;
  orderIdHTML.textContent=orderId;
}
else{

}




