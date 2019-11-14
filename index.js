// Playing ping-pong can be really fun! Unfortunatelly after a long and exciting
// play you can forget who's service turn it is. Let's do something about that!
// Write a function that takes the current score as a string separated by : sign as an
// only parameter and returns "first" or "second" depending on whose service turn it is.
// If the game has finished it should return "finished".
// We're playing old-school, so the rule is that players take turn after every 5 services.
// That is until the score is 20:20 - from that moment each player serves 2 times in his turn.
// Example:
// service("0:0") // => "first"
// service("3:2") // => "second"
// service("21:20") // => "first"
// service("21:22") // => "second"


const service = (score) => {
  const [firstScore, secondScore] = score.split(':').map(function(el) {
    return parseInt(el);
  });
  const total = firstScore + secondScore;
  if((firstScore >= 21 || secondScore >= 21) && Math.abs(firstScore - secondScore) >= 2) {
    return 'finished';
  } else if (total < 40) {
    if (Math.floor(total/5) % 2 === 1) {
    return 'second';
  } else {
    return 'first';
  }
} else if (total >= 40) {
  if (Math.floor(total/2) % 2 === 1) {
    return 'second';
  } else {
    return 'first';
  }
}
};

console.log(9/5 % 2);

module.exports = service;
