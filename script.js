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

console.log(" test ");
console.log(" test2 ");
console.log(` test `);


//  .......  const  ........ //

const tedImg1 = document.getElementById('ted-img1');
const noLoading = document.querySelector('.noLoading');


//  .......  code  ........ //
noWarning();

//console.log(tedImg1.src);

fetch("http://localhost:3000/api/teddies")
  .then (res => res.json())
  .then (data => tedImg1.src = data[0].imageUrl)
;


// 1/ le console.log du retour de la requête (montre une promesse: body, response etc...)
// console.log(fetch("http://localhost:3000/api/teddies"));

// 2/ le console.log de la reéponse (montre la réponse)
// fetch("http://localhost:3000/api/teddies")
//   .then(res => console.log(res))
// ;

// 3/ accéder au body=contenu  : utiliser json
// fetch("http://localhost:3000/api/teddies")
//   .then(res => res.json())
//   .then(data => console.log(data))
// ;

// 4/ mettre test erreur
// fetch("http://localhost:3000/api/teddies")
//   .then(res => {
//     if (res.ok) {
//       console.log("success!")
//     } else {
//       console.log("failed!")
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log('error'));

//ok pour afficher l'image
// fetch("http://localhost:3000/api/teddies")
//   .then (res => res.json())
//   .then (data => tedImg1.src = data[0].imageUrl)
// ;







// fetch("http://localhost:3000/api/teddies", {
// });