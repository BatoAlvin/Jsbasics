//Declaring variable and assigning it to an array
var car = ["pens", "pencils", "rubber"];
console.log(car);

//Declaring variable and assigning it value string
var names = "mourice";
console.log(names);

//Attaching object to string data type
var name2 = new String("mary");
console.log(name2);

//Creating users
var useronename = "kelly";
var useroneemail = "kelly@gmail.com";

var usertwoname = "Roland";
var usertwoemail = "roland@gmail.com";

var userthreename = "Alex";
var userthreeemail = "alex@gmail.com";

console.log(useroneemail);

//Object literals
var userOnename = {
  email: "jerry@gmail.com",
  name: "jerry",
  login() {
    console.log(this.name, "Is logged in");
  },
};
console.log(userOnename);

//Declaring variable and assigning it properties and method
var userTwo = {
  email: "doe@gmail.com",
  name: "Doe",
  logout() {
    console.log(this.email, "Is logged out");
  },
};

//Classes
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  logins() {
    console.log(this.email, "Is logged in");
  }
}
//Declaring variables and assigning them to our object
var userOnes = new User("frank@gmail.com", "frank");
var userTwos = new User("mary@gmail.com", "mary");
console.log(userTwos);
console.log(userOnes);

//To update properties with dot notations
userOnes.name = "Noah";
console.log(userOnes);

//To updates properties with square brackets
userTwos["email"] = "sarah@gmail.com";
console.log(userTwos);

//Prototypes
function Users(email, name) {
  this.email = email;
  this.name = name;
}
Users.prototype.login = () => {
  console.log(this.email, "user is logged in");
};

var num1 = new Users("uganda@gmail.com", "Uganda");
var num2 = new Users("kenya@gmail.com", "Kenya");
console.log(num1);

//Loops
//for loops
for (var x = 1; x <= 10; x++) {
  console.log("" + 5 * x + "");
}

//Do while loop
var y = 8;
do {
  y--;
  console.log("Hello");
} while (y > 5);
