//const animalSection=document.getElementById('animais');
//console.log(animais);

//const gridSection=document.getElementsByClassName('grid-section');
//console.log(gridSection);

//EXERCÍCIO

//RETORNE NO CONSOLE TODAS AS IMAGENS DO SITE
const imagem = document.querySelectorAll('img');
console.log(imagem);

//RETORNE NO CONSOLE APENAS AS IMAGENS QUE COMEÇAM COM A PALAVRA IMAGEM
const imagem2 = document.querySelectorAll('img[src^="imagem"]');
console.log(imagem2);

//SELECIONE TODOS OS LINKS INTERNOS(ONDE O HREF COMEÇA COM O #
const  links= document.querySelectorAll('[href^="#"]');
console.log(links);


//SELECIONE O PRIMEIRO H2 DENTRO DE .ANIMAIS-DESCRICAO
const primeiroH2= document.querySelector('.animais-descricao');
const selecionaH2= primeiroH2.querySelector('h2');
console.log(selecionaH2);

//SELECIONE O ÚLTIMO P DO SITE

const pe =document.querySelector('.copy p');
console.log(pe);






