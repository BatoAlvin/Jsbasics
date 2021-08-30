//Printing output to the ui
document.write('<h1>Hello world</h1>');
  console.log('hello world');
 

//Declaring variables and assigning them values
var app = 100;
var _app = 50;
var $app = 20;
var appPoint = 30;


//Declaring variable num and assigning value 30
const num = 30;
console.log(num);

//Declaring variable num1 and assigning value 20 which will later be updated
let num1 = 20;
num1 = 100;
console.log(num1);

//Declaring variable num2 and assigning value 180 which will later be updated
var num2 = 180;
num2 = 200;
console.log(num2);

//Primitive datatypes
var key = 10;
var key1 = 'boolean';
var key3 = false;

//Global scope scenario 1
if (true) {
    var lines = 'msjackson'
    lines = 'global'
    console.log(lines);
}

//Global scope scenario 2
if (true) {
    var lanes = 'Js scopes'
    lanes = 'globalscope'
    console.log(lanes);
}


//Block scope scenario1
if (true) {
    let face = 'oskido';
    face = 'local';
    console.log(face);
    }
  
//Block scope scenario2   
    if (true) {
        const faceup = 'oskido';
        console.log(faceup);
        }


            var lar = '20';
            var larry = '15';
            if (larry === 15){
                document.write("Movie");
                console.log('movie');
            }   
            
var name1 = "Alex";
var name2 = "Bruce";
var name3 = name1+" "+name2;
console.log(name3);
document.write("<h1>"+name3+" </h1>");  

