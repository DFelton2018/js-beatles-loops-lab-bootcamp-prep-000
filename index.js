function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
     array.push (musicians[i] + " plays " + instruments[i]);
    }
    return array;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]; 
function johnLennonFacts(facts) {
 var LennonFacts = [];
 var i = 0;
 while (i < facts.length) {
  LennonFacts.push(facts[i] + "!!!");
  i++;
 }
  return LennonFacts;
} 

function iLoveTheBeatles(n){
  var array = [];

  do {
<<<<<<< HEAD
    array.push('I love the Beatles!');
=======
    array.push('I Love the Beatles!');
>>>>>>> 7e5c5af8d79d007c6646dda7fbaa2a47f1c97978
    n++;
  }
  while (n < 15);

  return array;
}