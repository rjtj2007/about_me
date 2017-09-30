//collect user points in about_me game
var userPoints = 0;
console.log('I\'m awake!');

alert('Let\'s play a guessing game!!');
//ask user for name
var user = prompt('What\'s your name?');
//require user name to continue
while (!user) {
  user = prompt('Sorry, I didn\'n catch that. What was your name??');
}
//user name collected, move forward into the game
alert('Welcome ' + user + ' let\'s play a game.');
console.log('User name is: ' + user);
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
// var home = prompt('How many States have I called HOME?');
// home = parseInt(home);
// if (home === 4) {
//   userPoints++;
//   alert('WOW, that\'s amazing! I have lived in Washington, Oregon, Colorado and Alaska. ' + userPoints + ' points');
//   console.log('home question user stated: ' + home);
// } else {
//   alert('Sorry, 4 is the correct answer. Washington, Oregon, Colorado and Alaska.');
//   console.log('Home question user stated: ' + home);
// }
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

//Question 6: number guessing game
var i = 0;
alert(user + ' can you guess my favorite Number?');
while (i < 4) {
  var favNumber = prompt('Hint: pick a number between 1 and 20, I\'ll give you 4 tries to guess.');
  favNumber = parseInt(favNumber);
  if (favNumber === 13) {
    alert('You guessed it! Great job ' + user);
    userPoints++;
    i = 5;
  } else if (favNumber > 13) {
    alert('Sorry too high.');
    i++;
  } else {
    alert('Oops, too low.');
    i++;
  }
  if (i === 4 && favNumber !== 13) {
    alert('Better luck next time ' + user + '.');
  }
}
console.log(favNumber);

// alert('Thanks for playing ' + user + '. You have ' + userPoints + ' total points. Hope you learned something about me.');
