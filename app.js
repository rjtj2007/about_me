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

var name = prompt('Is my name Ryan?').toLowerCase();
if (name === 'yes') {
  alert('YUP! You got it!');
  console.log('User stated: ' + name);
} else if (name === 'no') {
  alert('No it\'s not Brian, it\'s RYAN!');
  console.log('User stated: ' + name);
} else {
  alert ('Please answer with "yes" or "no"');
  console.log('User stated: ' + name);
}

var siblings = prompt('Do I have 2 siblings?').toLowerCase();
if (siblings === 'yes') {
  alert('Yes indeed, a younger brother and older sister');
  console.log('siblings question user stated ' + siblings);
} else if {
  ('Do I look like an only child? Sorry.');
  console.log('siblings question user stated ' + siblings);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('siblings question user stated ' + siblings);
}

var home = prompt('Did I grow up in Canada?').toLowerCase();
if (home === 'yes') {
  alert('Sorry, I\'m a Washintionian, born and raised');
  console.log('home question user stated ' + home);
} else if {
  alert('Correct, I like Canada but I\'m from here');
  console.log('home question user stated ' + home);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('home question user stated ' + home);
}

var cat = prompt('Do I have a Cat?').toLowerCase();
if (cat === 'yes') {
  alert('yes, her name is Lucy and she is 6 year\'s old');
  console.log('cat question user stated ' + cat);
} else if {
  alert('Sorry, I am indeed a cat person');
  console.log('cat question user stated ' + cat);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('cat question user stated ' + cat);
}

var hair = prompt('Do I have hair').toLowerCase();
if (hair === 'yes') {
  alert('I should take my hat off more!');
  console.log('hair question ' + hair);
} else if {
  alert('Nope, My wife calls be the tall, skinny, bald guy!');
  console.log('hair question user stated ' + hair);
} else {
  alert ('Please answer with \'yes\' or \'no\'');
  console.log('hair question user stated ' + hair);
}
