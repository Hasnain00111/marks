let marks =[50,40,20];
console.log(marks);
 let heroes = ["ironman","ramcharan","yash","bilal"]
 console.log(heroes[0]);

 let pakistaniPlayers = ["babar azam","razwaan","fakhar zaman","shaheen afride","naseem shah"]
 console.log(pakistaniPlayers[3]);
 


let keyboardsbottan = ["a","b","c","d","e","f"]
console.log(keyboardsbottan[3]);
 

  
let superstars = ["ironman","thor","hulk","shaktiman","superman"]
for(let idx = 0; idx<superstars.length; idx++){
    console.log(idx)
}
 let cities = ["gilgit","islamabad","lahore","punjab"]
 for(let city of cities) {
    console.log(city);
 }
 let numbers = [48,90,79,30,67,86];
 let sum = 0;
 
 for(let val of numbers) {
    sum += val;
 }
 let avg = sum/ numbers.length;
 console.log('avg numbers of the class = ${avg}' );


let foods = ["apple","mengo","banana","pich"]

foods.push("pomogranet");
console.log(foods);

let footballteam = ["maci","ali","ronaldo","baig"];
footballteam.push("khan");
console.log(footballteam);

let students = ["ahmed","sohail","iftikhar","azlan"]
students.pop("azlan")
console.log(students);
 
console.log(students.toString());

let teachers = ["salaim","hitash","aman","qasim"]
teachers.push("gul")
console.log(teachers);

let friends = ["imaran","farhan","furqan","israr","fazan"]
friends.pop("fazan");
console.log(friends);

let singers = ["saaghari","saghar","arjitsingh"]
let poiets = ["allamaiqbal","bahadurshahzafar","ghalib"]
let artists = singers.concat(poiets);
console.log(artists);

let books = ["math","com","phy"]
books.unshift("urdu")
console.log(books);
  let mobiles = ["iphone","sumsung","oppo","infinix"]
  console.log(mobiles.slice(1,3));
  

  let evennumbers = [2,4,6,8,10]
  evennumbers.splice(2,3,12,14)
  console.log(evennumbers);
  
// intorduction of function
function myFunction() {
   console.log("Hi!i am Hasnain Ahmed");
   console.log("i am going to leran js");
   }
myFunction();
myFunction();

function thatIsGreat() {
   console.log("i want to become a fullstack developer");
   console.log("i want to become a problem solving person");
   
}
 function thatIs(tip) {
   // parameter = input
   console.log(tip);
 }
   thatIs("i am passionate to learn js");
   // function 
   function addation(a,b) {
      console.log(a+b);
   }
addation (2,8)
addation(10,40)
// sum function
function ad(a,b) {
   return a+b;
}
const arrowSum = (a,b) => {
   console.log(a+b);
   
} 
arrowSum(44+4)
// multip
function mul(a,b) {
   return a*b
}
mul(2*15)

// prictice of array by push method
const item = [
   {name: "bulb", price: 100},
   {name: "album", price: 1500},
   {name:"book",price: 500},
   {name: "computer",price:1000},
   {name: "phone",price:15000},
   {name: "fridge", price:40000}
];
console.table(item)
const schools = [
   {name:"aps"},
   {name:"public school and college"},
   {name: "akhss"},
   {name: "dj"}

]
console.table(schools)
const pushIntoArray = schools.push({name:"degree college"})
console.table(schools)


const wholenum = [
   {num1:0},
   {num2:1},
   {num3:2},
   {num4:3}
];
console.table(wholenum);
wholenum.push({num6:4},
   {num5:5});
console.table(wholenum)

let dinnerset = [
   {name:"waterset",price:499},
   {name:"teaset",price:444},
   {name:"glassset",price:333}
]
console.table(dinnerset)
dinnerset.push=({name:"bowl set",price:3333}
   
)
console.table(dinnerset)

let markets = [
   {name:"nli",priceofshop:4000},
   {name:"baing market",priceofshop:500}
]
console.table(markets)
markets.push({name:"ns market",priceofshop:600})
console.table(markets)

let fields = [
   {name:"software development",salary:400000},
   {name:"biotechnology",salary:30000},
   {name:"artfical intellignece",salary:60000}
]
console.table(fields)
fields.push({name:"machine learing",salary:700000})
console.table(fields)


// array by pop-method
let notesbook = [
   {name:"phy",price:499},
   {name:"che",price:400}
]
console.table(notesbook);
notesbook.pop(1)
console.table(notesbook);


let lattops = [
   {name:"hp",price:400000},
   {name:"dell",price:50000}
]
console.table(lattops);
lattops.pop(1);
console.table(lattops);

let baseQuentities = [
   {name:"time"},
   {name:"mass"},
   {name:"length"}
]
console.table(baseQuentities);
baseQuentities.pop(2);
console.table(baseQuentities);


// shift mehtod=shift method remove the first element from the array.
let movies = [
   {name:"pushpa",viewrs:6000},
   {name:"kgf",viewrs:70000},
   {name:"phatan",viewrs:8000000}
]
console.table(movies);

movies.shift();
console.table(movies);


let dramas = [
   {name:"duniyapur",viewers:400000},
   {name:"parezad",viewers:50000000},
   {name:"ishq murshid",viewers:40000008}
]
console.table(dramas);
dramas.shift();
console.table(dramas)

// unshift method = unshift method is use to add elements to the beginging of the array.
let religous = [
   {name:"muslims", peoples:500000000000},
   {name:"budizam",peoples:700000000000000},
   {name:"christans",peoples:8000000000000}
]
console.table(religous);
religous.unshift({name:"commicist",peoples:30490000000000});
console.table(religous);

// slice -method in array= slice method is used to fetch any element from the array.
let alpha = [1,2,3,4,6,7] 

console.table(alpha.slice(0,3));



let hero = ["antman","athor","spiderman","superman"];
console.table(hero.slice(1,3));



let abc = ["d","e","f","g"];
console.table(abc.slice(2,3));


let noun = ["common noun","proper noun","colletive noun","demonstrative noun"];

console.log(noun.splice('colletive noun',0,"ali"));



let arr = [1,2,3,4,5,6,];
arr.splice(2,0,9);
console.log(arr)



let num6 = [1,2,3,4,5,6];
 num6.splice(2,1,101); 
console.log(num6)


let num7 = [3,4,5,6,7];
num7.splice(3,2,101,104);
console.log(num7);

// if we want to only add elements at the array

let hhh = [2,3,4,5,6];
hhh.splice(1,0,333);
console.table(hhh)


const a = [1,3,5,6,7];
a.splice(0,0,66);
console.table(a)

// if i want to delete any element from array 
const y = [3,5,6,7,8,0];
y.splice(3,1); 
console.table(y);

// if i want to replace some or any element form array
 

let g = [1,3,4,5,6,78]
g.splice(1,1,0);
console.log(g);


// concat method = concat method is use to join multiple array and and returns results.

let marvel_heroes = ["thor","spiderman","ironman"];
let dc_heroes = ["superman","batman"];
let actors =marvel_heroes.concat(dc_heroes);
console.table(actors);
 
let name = ["ahmed","ali","khan","hasnain"]
let profession = ["marketing","desinging","developer","cyber security"]
let des = name.concat(profession);
console.table(des);
  

// practice of array method 

// push method in array = push method is used to add a element in the array . the element is add in last postion.
let pakistaniactors = [
   {name:"wahaj ali", followers:449945768},
   {name:"danish tumoor", followers:7689947897},
   {name:"farooz khan", followers:7856868355478},
   {name:"ahad raza", followers:7878678463}
];
console.table(pakistaniactors);

// pop: pop method is used to remove last element form the array 
let bollywoodactors = [
   {name:"thor", followers:77666775},

]

// let's practice
// Q=1.Create a const object called "product" to store information shown in the picture.
 
const product = {
   name:"ball pen",
   rating: 4,
   offer: 5,
   price: 200
};
console.log(product);

// let's practice
// Q=2. create a const object called "profile" to store information in the picture.
const profile = {
   tittle:"shradhakhapara",
   isFollow:"true",
   message:"i am writing a code",
   post: 195,
   followers:569,
   following:4,
   email: "shrada@gmail.com"

} 
console.log(profile);

// object
const UserName = {
   name:"ahmed",
   age:16,
   islogedin:false,
   location:"gilgit",
   nationality:"pakistani"

   
}

console.log(UserName);
console.log(UserName.name);
console.log(UserName["age"]);
console.log(UserName["islogedin"]);
