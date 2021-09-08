//To fetch data
const getData = async ()=>{
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   const data = await response.json();
   console.log(data);
}
getData();


const getInfo = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
};
console.log(1);
console.log(2);
getInfo()
.then(data => console.log('Code is fine', data));
console.log(3);
console.log(4);