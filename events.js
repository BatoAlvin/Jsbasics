//Declaring variables
const btn = document.querySelector('#btn1');
const header1 = document.querySelector('.header1');
const btn2 = document.querySelector('.btn2');
const header2 = document.querySelector('.header2');
const btn3 = document.querySelector('.btn3');
const header3 = document.querySelector('.header3');

//Change button text on click
btn.addEventListener('click',()=>{
btn.innerHTML = '<h1>The medic lives</h1>';
})

//Change paragraph on button click
btn2.addEventListener('click',()=>{
    header1.style.color = 'blue';
    header1.style.fontSize = '20px';
    console.log('Paragraph changed to blue color with fontsize 20px');
})

//Change paragraph on button click
btn3.addEventListener('click', ()=>{
header2.textContent = 'I have been clicked';
console.log('Paragraph change');
})

//Styling nodes
header3.style.color = 'green';
header3.style.fontSize = '25px';

//Setattributes



//Normal function
function hello(){
    console.log('hey');
}
hello();

//ES6 function
const helloy = ()=>{
console.log('es6');
}
helloy();