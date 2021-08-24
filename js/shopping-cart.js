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

console.log(`shopping-cart`);


//  .......  const  ........ //
const noLoading = document.querySelector('.noLoading');
//const url="http://localhost:3000/api/teddies" ;

// let idLast = localStorage.getItem('idNow');
// localStorage.setItem(`id+${idLast}`,`${idLast}`);//stocke le nombre en cours
// let nameLast = localStorage.getItem('nameNow');
// let priceLast = localStorage.getItem('priceNow');



//  .......  code  ........ //
noWarning();
// var essai1 = localStorage.getItem('essai1');
// console.log(essai1);
// localStorage.removeItem('essai1');



//sauver d'emblée le nouveau choix et  APRÈS afficher tout
//stocker avec index ?json?
