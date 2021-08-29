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

//tabCart=[];

//objet de contact 
let objContact={
  firstName: "ka",
  lastName: "ak",
  address: "123 azerty",
  city: "laville",
  email: "cours@gg.com"
};
console.log(objContact);

//tableau de produits  

let productTab=[
  {
  name: "Arnold",
  price: 39,
  color: "chocolate",
  number: 3,
  },
  {
    name: "Gustav",
    price: 45,
    color: "white",
    number: 2,
  }
];

console.log(productTab);

let jsonOrder=JSON.stringify({ objContact, productTab });
console.log(jsonOrder);

fetch("http://localhost:3000/api/teddies/order",
 {method: "POST", headers:{"Content-Type": "application/json"}, body: jsonOrder} )
  .then(res => {
    if (res.ok) {
      console.log("success(fetch url)!");
      return res.json();
    } else {
      console.log("failed (fetch url)!")
      warning();
    }
  })
  .then(data => {
    localStorage.setItem("order", JSON.stringify(data));
    // document.location.href = "my-orders.html";
});

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