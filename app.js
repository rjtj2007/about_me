// 'use strict';
//
// var userPoints = 0;
//
// console.log('Hello Everybody!');
// alert('welcome to my guessing game');
//
// var user = prompt('what is your name?');
// alert('Hi ' + user + ' welcome to our game!');
//
// var answer = prompt('Question... Type yes or no.').toLowerCase();
//
// if(answer === 'yes' || answer === 'y'){
//   userPoints++;
// } else {
//   alert('answer to your question');
// }
//
// alert('you have ' + userPoints);

'use strict';

var userPoints = 0;

var user = prompt('Hi there. What\'s your name?');
  alert('Welcome ' + user + ' let\'s play a game.');
  console.log('User name is: ' + user);

var name = prompt(user + ' is my name Ryan?').toLowerCase();
if (name === 'yes') {
  userPoints++;
  alert('YUP! You got it!' + userPoints);
  console.log('Name question user stated: ' + name);
} else if (name === 'no') {
  alert('No it\'s not BRIAN, it\'s Ryan!');
  console.log('Name question user stated: ' + name);
} else {
  alert ('Please answer with "yes" or "no"');
  console.log('Name question user stated: ' + name);
}

var siblings = prompt('Do I have siblings?').toLowerCase();
if (siblings === 'yes') {
  userPoints++;
  alert('Yes indeed ' + user + ', a younger brother and older sister' + userPoints);
  console.log('Siblings question user stated: ' + siblings);
} else if (siblings === 'no') {
  ('Do I look like an only child' + user + '? Sorry, I have 2 siblings actually.');
  console.log('Siblings question user stated: ' + siblings);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('Siblings question user stated: ' + siblings);
}

var home = prompt('How many States have I called HOME?').toLowerCase();
if (home === 4) {
  userPoints++;
  alert('WOW, that\'s amazing! I have lived in Washington, Oregon, Colorado and Alaska.' + userPoints);
  console.log('home question user stated: ' + home);
} else if (home !== 4) {
  alert('Sorry, 4 is the correct answer. Washington, Oregon, Colorado and Alaska.');
  console.log('Home question user stated: ' + home);
} else {
  alert ('Sorry, that\'s not a number');
  console.log('Home question user stated: ' + home);
}

var cat = prompt('Very important question ' + user + '. Do I have a Cat?').toLowerCase();
if (cat === 'yes') {
  userPoints++;
  alert('Correct, her name is Lucy and she is 7 year\'s old' + userPoints);
  console.log('Cat question user stated: ' + cat);
} else if (cat === 'no'){
  alert('Sorry, I am indeed a cat person');
  console.log('Cat question user stated: ' + cat);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('Cat question user stated: ' + cat);
}

var hair = prompt('Now look closly and answer honestly ' + user + '. Do I have hair?').toLowerCase();
if (hair === 'yes') {
  userPoints++;
  alert('I should take my hat off more often!' + userPoints);
  console.log('Hair question: ' + hair);
} else if (hair === 'yes') {
  userPoints++;
  alert('You\'re right! My wife calls be the tall, skinny, bald guy!' + userPoints);
  console.log('Hair question user stated: ' + hair);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('hair question user stated: ' + hair);
}

alert('Thanks for playing ' + user + '. You have ' + userPoints + '. Hope you learned something about me.');
