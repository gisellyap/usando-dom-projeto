 const animais= document.querySelector('.animais');

 const novoH1= document.createElement('h1');
 novoH1.innerText='novo título';
 novoH1.classList.add('titulo');

 const mapa = document.querySelector('.mapa')
 mapa.appendChild(novoH1);

 //CLONANDO UM ELEMENTO

 const h1= document.querySelector('h1');
 const faq= document.querySelector('.faq');

 const cloneH1= h1.cloneNode(true);
 cloneH1.classList.add('azul');
 faq.appendChild(cloneH1);




 //EXERCÍCIOS

 //DUPLIQUE O MENU E ADICIONE ELE EM COPY

 const menu=document.querySelector('.menu');
 const copy=document.querySelector('.copy');

 const cloneMenu=menu.cloneNode(true);
 copy.appendChild(cloneMenu);

 //SELECIONE O PRIMEIRO DT DA DL DE FAQ

 const faq2= document.querySelector('.faq');
 const primeiroDt= faq2.querySelector('dt');

 console.log(primeiroDt);

 //SELECIONE O DD REFERENTE AO PRIMEIRO DD
 console.log(primeiroDt.nextElementSibling);

 //SUBSTITUA O CONTEÚDO DE HTML DE .FAQ PELO DE .ANIMAIS

faq.innerHTML=animais.innerHTML