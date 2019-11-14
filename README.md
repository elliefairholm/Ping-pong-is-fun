# ALGO-RITHMS CHALLENGE // PING PONG IS FUN

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `github.com/your-github-name/your-repository`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/your-github-name/your-repository`.

## 2. Challenge

Playing ping-pong can be really fun! Unfortunatelly after a long and exciting play you can forget who's service turn it is. Let's do something about that!

Write a function that takes the current score as a string separated by : sign as an only parameter and returns "first" or "second" depending on whose service turn it is.

If the game has finished it should return "finished".

We're playing old-school, so the rule is that players take turn after every 5 services. That is until the score is 20:20 - from that moment each player serves 2 times in his turn.

There's no need to check if the passed parameter is valid - the score will be always provided in correct syntax - that won't be the case.

P.S. The game ends when one of the players reaches 21 points with minimum 2-point lead. If there's a current score of 20:20, the winner will be the first player to reach 2-point lead.


### 2.1. Examples

```js
service("0:0") // => "first"
service("3:2") // => "second"
service("21:20") // => "first"
service("21:22") // => "second"
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
