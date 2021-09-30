//  .......  fonctions  ........ //

//  .......  tests à retirer  ........ //

//  .......  const  ........ //

var orderId="";
orderId=JSON.parse(localStorage.getItem('orderId'));//temoin de existence ou non d'une commande 


//  .......  code  ........ //


if (orderId!=null) {//si numéro de commande existe, on affiche derniere commande, qu'elle soit récente(on vient de valider la panier)ou passée(via lien)
  document.querySelector('.report').style.display='block' ;//on affiche le report
  document.querySelector('.noOrder').style.display='none' ;//et cache noOrder
  
  const fornameHTML=document.querySelector('.fornameText');
  const cityHTML=document.querySelector('.cityText');
  const orderIdHTML=document.querySelector('.orderId');
  const amountHTML=document.querySelector('.amountText');
  const amountBackHTML=document.querySelector('.amountBack');

  const forname=JSON.parse(localStorage.getItem('contact')).firstName;
  const city=JSON.parse(localStorage.getItem('contact')).city;
  let billRecord=JSON.parse(localStorage.getItem('billRecord'));
  let amountBack=JSON.parse(localStorage.getItem('pprice'));

//on affiche id prenom et ville et montant 
  //fornameHTML.innerHTML = forname;//à éviter
  fornameHTML.textContent=forname;
  cityHTML.textContent=city;
  orderIdHTML.textContent=orderId;
  amountHTML.textContent=`${(billRecord/100).toFixed(2).replace(".",",")}€ `;
  amountBackHTML.textContent=`${(amountBack/100).toFixed(2).replace(".",",")}€ `;
}
else{
  document.querySelector('.report').style.display='none' ;//on cache le report
  document.querySelector('.noOrder').style.display='flex' ;//et on affiche noOrder
}




