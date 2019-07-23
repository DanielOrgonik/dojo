import Game from './gol/game';

const state = [
  [0, 0, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
];

const game = new Game(state);
game.next();
console.log('1', game.getBoard());
console.log(game.isAlive());
game.next();
console.log('2', game.getBoard());
console.log(game.isAlive());
game.next();
console.log('3', game.getBoard());
console.log(game.isAlive());
game.next();
console.log('4', game.getBoard());
console.log(game.isAlive());
game.next();
console.log('5', game.getBoard());
console.log(game.isAlive());
game.next();
console.log('6', game.getBoard());
console.log(game.isAlive());
game.next();
