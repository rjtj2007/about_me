// // 'use strict';
// //
// // var userPoints = 0;
// //
// // console.log('Hello Everybody!');
// // alert('welcome to my guessing game');
// //
// // var user = prompt('what is your name?');
// // alert('Hi ' + user + ' welcome to our game!');
// //
// // var answer = prompt('Question... Type yes or no.').toLowerCase();
// //
// // if(answer === 'yes' || answer === 'y'){
// //   userPoints++;
// // } else {
// //   alert('answer to your question');
// // }
// //
// // alert('you have ' + userPoints);
//
// 'use strict';
//
var userPoints = 0;

// var user = prompt('Hi there. What\'s your name?');
// alert('Welcome ' + user + ' let\'s play a game.');
// console.log('User name is: ' + user);
//
// var name = prompt(user + ', is my name Ryan?').toLowerCase();
// if (name === 'yes' || 'y') {
//   userPoints++;
//   alert('YUP! You got it!' + userPoints);
//   console.log('Name question user stated: ' + name);
// } else if (name === 'no' || 'n') {
//   alert('No it\'s not BRIAN, it\'s Ryan!');
//   console.log('Name question user stated: ' + name);
// } else {
//   alert('Please answer with "yes" or "no"');
//   console.log('Name question user stated: ' + name);
// }
//
// var siblings = prompt('Do I have siblings?').toLowerCase();
// if (siblings === 'yes' || 'y') {
//   userPoints++;
//   alert('Yes indeed ' + user + ', a younger brother and older sister. ' + userPoints + ' points');
//   console.log('Siblings question user stated: ' + siblings);
// } else if (siblings === 'no' || 'n') {
//   alert('Do I look like an only child ' + user + '? Sorry, I have 2 siblings actually.');
//   console.log('Siblings question user stated: ' + siblings);
// } else {
//   alert('Please answer with \'yes\' or \'no\'');
//   console.log('Siblings question user stated: ' + siblings);
// }
//
var home = prompt('How many States have I called HOME?');
home = parseInt(home);
if (home === 4) {
  userPoints++;
  alert('WOW, that\'s amazing! I have lived in Washington, Oregon, Colorado and Alaska. ' + userPoints + ' points');
  console.log('home question user stated: ' + home);
} else {
  alert('Sorry, 4 is the correct answer. Washington, Oregon, Colorado and Alaska.');
  console.log('Home question user stated: ' + home);
}
//
// var cat = prompt('Very important question ' + user + '. Do I have a Cat?').toLowerCase();
// if (cat === 'yes' || 'y') {
//   userPoints++;
//   alert('Correct, her name is Lucy and she is 7 year\'s old. ' + userPoints + ' points');
//   console.log('Cat question user stated: ' + cat);
// } else if (cat === 'no' || 'n') {
//   alert('Sorry, I am indeed a cat person');
//   console.log('Cat question user stated: ' + cat);
// } else {
//   alert('Please answer with \'yes\' or \'no\'');
//   console.log('Cat question user stated: ' + cat);
// }
//
// var hair = prompt('Now look closly and answer honestly ' + user + '. Do I have hair?').toLowerCase();
// if (hair === 'no' || 'n') {
//   userPoints++;
//   alert('You\'re right! My wife calls be the tall, skinny, bald guy! ' + userPoints);
//   console.log('Hair question: ' + hair);
// } else if (hair === 'yes' || 'n') {
//   userPoints++;
//   alert('I should take my hat off more often! ' + userPoints + ' points');
//   console.log('Hair question user stated: ' + hair);
// } else {
//   alert('Please answer with \'yes\' or \'no\'');
//   console.log('hair question user stated: ' + hair);
// }
//
// alert('Thanks for playing ' + user + '. You have ' + userPoints + ' total points. Hope you learned something about me.');
