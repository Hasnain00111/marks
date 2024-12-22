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
  






