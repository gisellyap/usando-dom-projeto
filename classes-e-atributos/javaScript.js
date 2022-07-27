const menu = document.querySelector('.menu');

menu.classList.add('ativo','teste');
menu.classList.remove('azul');
//menu.classList.toggle('amarelo');

if(menu.classList.contains('amarelo')){
    menu.classList.add('possui-amarelo');
}else{
    menu.classList.add('nao-possui-amarelo');
};

console.log(menu.className)//retorna uma string

//console.log(menu.classList);

const animais= document.querySelector('.animais');
console.log(animais.attributes);

//UTILIZANDO O GETATTRIBUTE E SETATTRIBUTE

const img= document.querySelector('img');
console.log(img.getAttribute('src'));

img.setAttribute('alt', 'é uma raposa');

const possuiAlt= img.hasAttribute('alt');
console.log(possuiAlt);

// READ ONLY VS WRITABLE
const carro= {
    portas:4,
    andar: function(km){
        console.log(`Andou ${km}km`);
    }
};


//EXERCÍCIOS


//ADICINE A CLASSE ATIVO A TODOS OS ITENS DO MENU
const itensMenu=  document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

//REMOVE A CLASSE ATIVO DE TODOS OS ITENS DO MENU E MANTENHA APENAS NO PRIMEIRO
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');
//VERIFIQUE SE AS IMAGENS POSSUEM O ATRIBUTO ALT
const verAlt= document.querySelectorAll('img');
verAlt.forEach((img)=>{
   const possuiAtributo= img.hasAttribute('alt');
   console.log(verAlt, possuiAtributo);
});



//MODIFIQUE O HREF DO LINK EXTERNO NO MENU

const link= document.querySelector('a[href^="http"]');
link.setAttribute( 'href', "https://www.google.com/" );
console.log(link);