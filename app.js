'use strict';
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
//Question 1: name
function name () {
  var name = prompt(user + ', is my name Ryan?').toLowerCase();
  if (name === 'yes' || name === 'y') {
    userPoints++;
    alert('YUP! You got it! You have ' + userPoints + ' points.');
    console.log('Name question user stated: ' + name);
  } else if (name === 'no' || name === 'n') {
    alert('Sorry it\'s not BRIAN, it\'s Ryan!');
    console.log('Name question user stated: ' + name);
  } else {
    alert('Please answer with "yes" or "no"');
    console.log('Name question user stated: ' + name);
  }
}
name ();

// Question 2: siblings
function siblings() {
  var siblings = prompt('Do I have siblings?').toLowerCase();
  if (siblings === 'yes' || siblings === 'y') {
    userPoints++;
    alert('Yes indeed ' + user + ', a younger brother and older sister. ' + userPoints + ' points');
    console.log('Siblings question user stated: ' + siblings);
  } else if (siblings === 'no' || siblings === 'n') {
    alert('Do I look like an only child ' + user + '? Sorry, I actually have 2 siblings.');
    console.log('Siblings question user stated: ' + siblings);
  } else {
    alert('Please answer with \'yes\' or \'no\'');
    console.log('Siblings question user stated: ' + siblings);
  }
}
siblings();

//Question 3: home
function home() {
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
}
home();

//Question 4: cat
function cat() {
  var cat = prompt('Very important question ' + user + '. Do I have a Cat?').toLowerCase();
  if (cat === 'yes' || cat === 'y') {
    userPoints++;
    alert('Correct, her name is Lucy and she is 7 year\'s old. ' + userPoints + ' points');
    console.log('Cat question user stated: ' + cat);
  } else if (cat === 'no' || cat === 'n') {
    alert('Sorry, I am indeed a cat person');
    console.log('Cat question user stated: ' + cat);
  } else {
    alert('Please answer with \'yes\' or \'no\'');
    console.log('Cat question user stated: ' + cat);
  }
}
cat();

// Question 5: hair
function hair() {
  var hair = prompt('Now look closly and answer honestly ' + user + '. Do I have hair?').toLowerCase();
  if (hair === 'no' || hair === 'n') {
    userPoints++;
    alert('You\'re right! My wife calls be the tall, skinny, bald guy! You have ' + userPoints + ' points.');
    console.log('Hair question: ' + hair);
  } else if (hair === 'yes' || hair === 'y') {
    alert('I should take my hat off more often!');
    console.log('Hair question user stated: ' + hair);
  } else {
    alert('Please answer with \'yes\' or \'no\'');
    console.log('hair question user stated: ' + hair);
  }
}
hair();

//Question 6: number guessing game
function favNumber() {
  var i = 1;
  alert(user + ' can you guess my favorite Number?');
  while (i < 5) {
    var favNumber = prompt('Hint: pick a number between 1 and 20, I\'ll give you 4 tries to guess.');
    favNumber = parseInt(favNumber);
    console.log(favNumber);
    if (favNumber === 13) {
      userPoints++;
      alert('You guessed it! Great job ' + user + '. You have ' + userPoints + ' points.');
      i = 5;
    } else if (favNumber > 13) {
      alert('Sorry too high. Guess # ' + i + '.');
      i++;
    } else {
      alert('Oops, too low. Guess # ' + i + '.');
      i++;
    }
    if (i === 5 && favNumber !== 13) {
      alert('Better luck next time ' + user + '.');
    }
  }
  console.log(favNumber);
}
favNumber();

//Question 7: hobbies
function hobbies() {
  var hobbies = ['hiking', 'woodwork', 'cooking', 'coffee', 'playing with my kids', 'honeydue projects', 'code'];
  var guesses = 6;
  var flag = false;
  var answer = prompt('Can you guess one of my hobbies? I will give you 6 quesses.');

  while (!flag && guesses > 1) {
    console.log(answer);
    for (var j = 0; j < hobbies.length; j++) {
      if (answer === hobbies[j]) {
        flag = true;
      }
    }
    if (flag === true) {
      userPoints++;
      alert('Correct! You have ' + userPoints + ' points');
    } else {
      guesses--;
      answer = prompt('give it another try. You have ' + guesses + ' guesses left.');
    }
  }
  alert('My hobbies are ' + hobbies + '.');
}
hobbies();

alert('Thanks for playing ' + user + '. You have ' + userPoints + ' total points. Hope you learned something about me.');
