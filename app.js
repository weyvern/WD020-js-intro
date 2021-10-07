// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const pokemon1 = 'Pikachu'
let pokemon2

console.log(pokemon2)
pokemon2 = 'Charmander'
pokemon2 = 4
pokemon2= null

console.log(pokemon1)
console.log(pokemon2)

// Conditionals

// If/else

const number = 5;

// = vs == vs ===
/* 
    = => assignment 
    == => compares value only
    === => compares value and data type
*/

if (number === 2) {
 console.log('the value is 2')
} else if (number === 3) {
 console.log('the value is 3')
} else {
 console.log('I do not know this value :(')
}

// Ternary operator

const message = number === 5 ? 'the number is 5' : 'I do not know this number';
console.log(message) // the number is 5

// Switch case

const pokemon = 'Starmi';

switch (pokemon) {
 case 'Pikachu':
   console.log('We restored your Pikachu to full health!');
   break;
 case 'Squirtle':
 case 'Magikarp':
 case 'Starmi':
   console.log(`We restored your water pokemon to full health!`);
   break;
 default:
   console.log('Sorry, we cannot heal your pokemon :(');
}

// Arrays

const pokemons = ['Pikachu', 'Squirtle', 'Charmander']
console.log(pokemons[0]) // Pikachu
console.log(pokemons[2]) // Charmander
pokemons.push('Mewtwo')
console.log(pokemons.length)
console.log(pokemons.reverse()) // ['Charmander', 'Squirtle', 'Pikachu']


// Loops

for (let pokemon = 0; pokemon < 5; pokemon++) {
    console.log(`I encountered ${pokemon} pokemon so far`);
}


pokemons.forEach(pokemon  => console.log(pokemon)); // Higher order array methods


// While

let n = 5;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3


let result = '';
let i = 5;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"


function talk () {
    console.log('I have no mouth, and I must scream');
    console.log('I have no mouth, and I must scream'); 
    console.log('I have no mouth, and I must scream');
   }
   
   function talkDynamic (message, pokemon) {
    console.log('Hello' + message + pokemon);
   }
   
   const square = (number) => {
    return number * number;
   }
   
   talk();
   talk()
   talk()
   talk()
   talk()
   talk()
   talk()
   talkDynamic('greetings', 'pikachu');
   square(3); // 9















/* let tool = '';
let writingUtensil = tool || "pen"

console.log(`The ${writingUtensil} is mightier than the sword.`);
console.log("The " + writingUtensil + " is mightier than the sword.");  */