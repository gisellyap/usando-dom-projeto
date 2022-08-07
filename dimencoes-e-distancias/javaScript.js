const ListaAnimais= document.querySelector('.copy');

const height= ListaAnimais.scrollHeight;
const animaisTop= ListaAnimais.offsetTop;
console.log( animaisTop);

const primeiroh2= document.querySelector('h2');
const h2Left=primeiroh2.offsetLeft;
console.log(h2Left);


const section = document.querySelector('.animais');
const rect = section.getBoundingClientRect();
console.log(rect);

const h2rect= primeiroh2.getBoundingClientRect();
console.log(h2rect.top);
if(h2rect.top < 0){
    console.log('passou do elemento')
}
console.log(
    window.innerHeight,
    window.innerWidth,
    window.outerWidth,
    window.outerHeight,
    window.pageXOffset,
    window.pageYOffset

);


const small= window.matchMedia('(max-width: 600px').matches;
console.log(small);

if(small){
    console.log('usuario mobile');
}else{
    console.log('usuario desktop ');
};


//EXERCICIOS

//VERIFIQUE A DISTANCIA DA PRIMEIRA IMAGEM EM RELAÇAO AO TOPO DA PAGINA
const img= document.querySelector('img');
const imgTop= img.offsetTop;
console.log(imgTop)

//RETORNE A SOMA DA LARGURA DE TODAS AS IMAGENS
function somaImagens(){
    const imagens= document.querySelectorAll('img');
    let soma= 0;

    imagens.forEach((imagem)=>{
        soma= soma+ imagem.offsetWidth;
    });

    console.log(soma)
};


window.onload= function(){
    somaImagens();
}


//VERIFIQUE SE AS LINHAS DA PAGINA POSSUEM O MINIMO RECOMENDADO PARA TELAS UTILIZADAS COM O DEDO.(48PX/48PX DE ACORDO COM O GOOGLE)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight= link.offsetHeight;
    if(linkWidth>=48 && linkHeight>= 48){
        console.log(link, 'possui boa acessibilidade')
    }else{
        console.log(link ,'não possui boa acessibilidade')
    }
})


//SE O BROWSER FOR MENOR QUE 720PX, ADICIONE A CLASSE MENU-MOBILE AO MENU

const browserSmall= window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu= document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}


const imag =document.querySelector('img');
 
function callback(event){
    console.log(event)
}


imag.addEventListener('click', callback);




//PROPRIEDADES DO EVENT

//const animaisLista= document.querySelector('.animais-lista');

// function executarCallback(event){
//     const currentTarget=event.currentTarget;
//     const target=event.target;
//     const type= event.type;
//     const path=event.path;

//     console.log(currentTarget, target, type, path);
// }
// animaisLista.addEventListener('click', executarCallback);

//EVENT.PREVENTDEFAUL()

const linkExterno=document.querySelector('a[href^="http"]');

function clickNoLink(event){
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', clickNoLink);


// DIFERENTES EVENTOS


const h1= document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter',handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);


//KEYBOARD

function handleKeyboard(event){
    if(event.key ==='a'){
        document.body.classList.toggle('azul');
    }
    
    
}

window.addEventListener('keydown', handleKeyboard)


// FOREACH E EVENTOS

// const imgs = document.querySelectorAll('img');

// function handleImg(event){
//     console.log(event.target);
// }
// imgs.forEach((img) =>{
//     img.addEventListener('click', handleImg);
// })

const imgs = document.querySelectorAll('img');
function handleImg(event){
    console.log(event.target);
}
imgs.forEach((event)=>{
    event.addEventListener('click', handleImg)
});

//QUANDO O USUARIO CLICAR NAS LINHAS INTERNAS DO SITE, ADICIONE A CLASSE ATIVO AO ITEM CLICADO E REMOVA DOS DEMAIS ITENS
//CASO ELES POSSUAM A MESMA. PREVINA O COMPORTAMENTO PADRAO DESSAS LINHAS;

const linksInternos = document.querySelectorAll('a[href^="#');

function handleLink (event){
    event.preventDefault();
    linksInternos.forEach((link)=>{
        link.classList.remove('ativo');
    })

    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', handleLink)
})

//SELECIONE TODOS OS ELEMENTOS DO SITE COMEÇANDO A PARTIR DO BODY,AO CLIQUE EXATAMENTE QUAIS ELEMENTOS ESTAO SENDO CLICADOS;


// UTILIZANDO O CODIGO ANTERIOR, AO INVES DE MOSTRAR NO CONSOLE, REMOVA O ELEMENTO QUE ESTA SENDO CLICADO, O METODO REMOVE()
//REMOVE UM ELEMENTO

// SE O USUARIO CLICAR NA TECLA (T), AUMENTE TODO O TEXTO DO SITE

