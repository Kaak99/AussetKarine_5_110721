console.log("  ");
console.log(" test ");
console.log(`  `);


fetch("http://localhost:3000/api/teddies")
  .then(res => res.json())
  .then(data => console.log(data))
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









// fetch("http://localhost:3000/api/teddies", {
// });