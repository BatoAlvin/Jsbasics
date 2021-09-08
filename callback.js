const items = [1,2,3,4];
console.log(items);

const item = [10,20,30,40];
item.forEach((lay)=>{
console.log(lay);
})

//AJAX
//Synchronous
console.log('Begin');
function other(){
    console.log('Hello world');
}
other();
console.log('End');

//Asynchronous
console.log('Start');
setTimeout(()=>{
    console.log('Asynchronous code');
},5000);
console.log('Finish');
