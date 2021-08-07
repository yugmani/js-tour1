// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let food1 = 'Pizza';
let food2 = 'burger';
let food3 = 'Noodles';
const my_favorite_foods = [food1, food2, food3];

console.log(my_favorite_foods[2]);

my_favorite_foods[0] = 'spagheti';
my_favorite_foods[1] = 'Tacos';
my_favorite_foods[2] = 'Chicken Nuggets';

console.log(my_favorite_foods[0]);
console.log(my_favorite_foods[1]);
console.log(my_favorite_foods[2]);

// using if/else statement with this array
