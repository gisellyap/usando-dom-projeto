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