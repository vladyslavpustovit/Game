import { Playground } from "./playground.js";
import { Playground2 } from "./playground.js";
import { Player } from "./player.js";
import { Player2 } from "./player.js";
import { Zombie } from "./zombie.js";
import { Zombie2 } from "./zombie.js";

class Game {
  constructor(player1, player2, zombie1, zombie2, playground1, playground2) {
    this.player1 = player1;
    this.player2 = player2;
    this.zombie1 = zombie1;
    this.zombie2 = zombie2;
    this.playground1 = playground1;
    this.playground2 = playground2;

    this.gameContainer = document.getElementById("game");
    this.startContainer = document.getElementById("start-container");
    this.winnerContainer = document.getElementById("winner-container");
    this.bgSound = document.getElementById("bg-sound");
    this.bgSound.volume = 0.4;

    this.zombieMoveInterval = null;
    this.zombie2MoveInterval = null;
  }

  startGame() {
    this.refreshGame();
    this.startContainer.style.display = "none";
    this.winnerContainer.style.display = "none";
    this.gameContainer.style.display = "block";
    this.startTimer();
    this.zombie1.zombieMove();
    this.zombie2.zombieMove();
  }

  // rematch() {
  //   this.playground1.coinsArr.forEach((coinPos) => {
  //     const coinElement = coinPos.querySelector(".coin");
  //     const starElement = coinPos.querySelector(".star");
  //     if (coinElement) {
  //       coinElement.remove();
  //     } else if (starElement) {
  //       starElement.remove();
  //     }
  //   });
  //   this.playground1.coinsArr = []; // Clear the coinsArr array

  //   this.startGame();
  // }

  preload() {
    this.playground1.createPlayground();
    this.playground1.genCoins();
    this.playground1.genStar();
    // this.playground1.startBombInterval();
    this.player1.updatePlayerPosition();
    /*  INITIALIZING PLAYGROUNDS AND PLAYERS FIRST TIME*/
    this.playground2.createPlayground();
    this.playground2.genCoins();
    this.playground2.genStar();
    // this.playground2.startBombInterval();

    this.player2.updatePlayerPosition();
    this.zombie1.updateZombiePosition();
    this.zombie2.updateZombiePosition();
  }

  refreshGame() {
    this.player1.isDamaged = false;
    this.player2.isDamaged = false;
    // Score to 0
    this.player1.score = 0;
    this.player1.updateScore();
    this.player2.score = 0;
    this.player2.updateScore();

    // Clear score style
    document.getElementById("score").className = "";
    document.getElementById("score2").className = "";

    // Player to the center
    this.player1.posX = Math.floor(playground1.numColumns / 2);
    this.player1.posY = Math.floor(playground1.numRows / 2);
    this.player2.posX = Math.floor(playground2.numColumns / 2 + 10);
    this.player2.posY = Math.floor(playground2.numRows / 2 + 10);
    this.player1.updatePlayerPosition();
    this.player2.updatePlayerPosition();

    if (this.zombieMoveInterval) {
      clearInterval(this.zombieMoveInterval);
    }

    if (this.zombie2MoveInterval) {
      clearInterval(this.zombie2MoveInterval);
    }

    this.zombieMoveInterval = setInterval(() => {
      this.zombie1.zombieMove();
    }, 1000);

    this.zombie2MoveInterval = setInterval(() => {
      this.zombie2.zombieMove();
    }, 1000);
  }

  startTimer() {
    let seconds = 100;
    let timer = setInterval(() => {
      let timerBoard = document.getElementById("secs");
      timerBoard.innerHTML = `-${seconds}-`;

      if (seconds > 0) {
        seconds--;
      } else {
        clearInterval(timer);
        this.showWinner(this.getWinner());
      }
    }, 1000);
  }

  getWinner() {
    let winner;
    if (this.player1.score > this.player2.score) {
      winner = this.player1;
      winner.name = "Player 1";
    } else if (this.player2.score > this.player1.score) {
      winner = this.player2;
      winner.name = "Player 2";
    } else {
      winner = null;
    }
    return winner;
  }

  showWinner(winner) {
    const winnerMsg = document.getElementById("winner-heading");
    this.gameContainer.style.display = "none";
    this.winnerContainer.style.display = "flex";
    if (winner) {
      winnerMsg.innerHTML = `The winner is <small style="color: white">${winner.name}</small> with <small style="color: white">${winner.score}</small> point(-s).`;
    } else {
      winnerMsg.innerHTML = "It's a tie!";
    }
  }

  audioPlay() {
    if (this.bgSound.muted == false) {
      this.bgSound.muted = true;
    } else {
      this.bgSound.muted = false;
    }
  }
}

let playground1 = new Playground("playground", 5, 5);
let player1 = new Player(playground1);
let playground2 = new Playground2("playground2", 5, 5);
let player2 = new Player2(playground2);

let zombie1 = new Zombie(playground1, player1);
let zombie2 = new Zombie2(playground2, player2);

let game1 = new Game(
  player1,
  player2,
  zombie1,
  zombie2,
  playground1,
  playground2
);
game1.preload();

const startBtn = document.getElementById("start-btn");
const rematchBtn = document.getElementById("rematch-btn");
startBtn.addEventListener("click", game1.startGame.bind(game1));
rematchBtn.addEventListener("click", game1.startGame.bind(game1));
