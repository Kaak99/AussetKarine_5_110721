console.log(" test ");
console.log(" test2 ");
console.log(` test `);


fetch("http://localhost:3000/api/teddies")
  .then(res => console.log(res))
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








// fetch("http://localhost:3000/api/teddies", {
// });