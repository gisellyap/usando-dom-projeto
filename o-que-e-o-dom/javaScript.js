// window.alert('isso mesmo');


const titulo= document.querySelector('h1');

// titulo.innerText;
// titulo.classList;
// titulo.id;
// titulo.offsetHeight;

// titulo.addEventListener('click', function(){
//     console.log('clicou em ', titulo.innerText);
// });

function teste(){
    console.log('clicou em ', titulo.innerText);
}

titulo.addEventListener('click', teste);


//EXERCICIOS

//RETORNE A URL DA PAGINA ATUAL UTILIZANDO O OBJETO WINDOW

const hrefpagina= window.location.href;
console.log(hrefpagina);

//SELECIOPNA O PRIMEIRO ELEMENTO DA PÁGINA QUE POSSUA A CLASSE ATIVO
const elementoAtivo= document.querySelector('.ativo');

//RETORNE A LINGUAGEM DO NAVEGADOR
const linguagem= window.navigator.language;
console.log(linguagem);

//RETORNE A LARGURA DA JANELA

const windowWidth= window.innerWidth;
console.log(windowWidth);

