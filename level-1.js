// question 1

var gothamVillain = "The Penguin";

// question 2

var person = {
  name: "Emma Valentine",
  age: 20
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4

var numbers = [40, 56, 25, 32, 19];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
  if (i === 20) console.log(i);
}

// question 7

var pokemon = [
  {
    name: "Pikachu",
    hitPoints: 60,
    finalForm: false
  },
  {
    name: "Raichu",
    hitPoints: 80,
    finalForm: true
  }
];

for (var i = 0; i < pokemon.length; i++) {
  console.log(pokemon[i].hitPoints);
  console.log(pokemon[i].finalForm);
}

// question 8

function whatIDontLike(meanBehavior) {
  console.log("I don't like " + meanBehavior);
}

whatIDontLike("bullying");

// question 9

function subtractTwoNumbers(number1, number2) {
  var sum = number1 - number2;
  console.log(sum);
}

subtractTwoNumbers(57, 26);

// question 10

var norseGod = [];

function addNorseGod(someGod) {
  norseGod.push(someGod);
}

addNorseGod("Odin");
