//Conditions
var num = 20;
var num1 = 100;
if(num == 20 && num1 == 100){
console.log('conditon satified');
} else {
    console.log('condition not satisfied');
}

//Arrays
var char = ['cars','trains', 'planes'];
console.log(char[2]);

//Adding bicycles and boat to array
char.push('bicycles');
char.push('boat');
console.log(char);

//Removing item from array
char.pop();
console.log(char);

//Adding friend and watch as first items to our array
char.unshift('friend');
char.unshift('watch');
console.log(char);

//Removes first item in array
char.shift();
console.log(char);

//Replaces item pens with pencil
var army = ['pens','books','rulers','gum'];
console.log(army);
army.splice(0,1, 'pencil');
console.log(army);

//Replaces items books and rulers with map
army.splice(1,2, 'map');
console.log(army);

//Replaces items apples and bananas with berries and melons
var shoot = ['mangoes','apples','bananas','oranges'];
console.log(shoot);
shoot.splice(1,3, 'berries','melons');
console.log(shoot);

//Removes mangoes from array
shoot.splice(0,1);
console.log(shoot);

//Displays result in reverse order
var planes = ['voxwagon','landcruizer','toyota','benz'];
console.log(planes);
planes.reverse();
console.log(planes);

//Displays items in alphabetical order
planes.sort();
console.log(planes);

//Displays item position in array
var languages = ['js','node','python','php'];
var lang = languages.indexOf('node');
console.log(lang);


