//Getting a resolve
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello');
    },2000);
})
promise.then(logs=>{
    console.log(logs);
})

//Geting a reject
const promises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Error has been found');
    },2000);
})
promises.then(user=>{
    console.log(user);
})
.catch(err=>console.log(err));


//Displaying output at the same time
const yt = new Promise(resolve =>{
    setTimeout(()=>{
resolve('Youtube');
    },2000)
});

const ty = new Promise(resolve =>{
    setTimeout(()=>{
resolve('Facebook');
    },8000)
});
Promise.all([yt,ty])
.then(output => console.log(output));