// //const imgs= document.querySelectorAll('img');


// //imgs.forEach(function(item,index,array){
// //    console.log(item, index, array);
// //});


// // const titulos =document.getElementsByClassName('titulo');
// // const titulosArray= Array.from(titulos);

// // //console.log(titulos);
    
// // titulosArray.forEach(function(item, index, array){
// //      //   console.log(item, index, array);
// //     });



//  const imgs= document.querySelectorAll('img');

// // imgs.forEach((item, index, array)=>{
// //    console.log(item, index , array);
// // }); 


// let i=0;

// imgs.forEach(function(){
//     console.log(i++)
// });

// imgs.forEach(() => console.log(i++));


// EXERCICIOS

//MOSTRE NO CONSOLE CADA PARÁGRAFO DO SITE
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item)=>{
    console.log(item);
});

//MOSTRE O TEXTO DOS PARÁGRAFOS NO CONSOLE
paragrafos.forEach((item)=>{
    console.log(item.innerText);
});

//COMO CORRIGIR OS ERROS ABAIXO

const imgs= document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
 });


 let i =0;
 imgs.forEach(() =>{
    console.log(i++);
 });

 imgs.forEach(() => i++);
