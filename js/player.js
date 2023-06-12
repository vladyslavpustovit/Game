export class Player {
  constructor(gameMap) {
    this.player = new Image();
    this.player.src = "../img/playerIcon.gif";
    this.player.classList.add("player");
    this.posX = Math.floor(gameMap.numColumns / 2);
    this.posY = Math.floor(gameMap.numRows / 2);
    this.currentPos = "";
    this.score = 0;

    this.gameMap = gameMap;

    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowUp":
        this.moveUp();
        break;
      case "ArrowDown":
        this.moveDown();
        break;
      case "ArrowRight":
        this.moveRight();
        break;
      case "ArrowLeft":
        this.moveLeft();
        break;
      default:
        break;
    }
  }

  moveUp() {
    if (this.posY > 0) {
      this.posY--;
      this.updatePlayerPosition();
    }
  }

  moveDown() {
    if (this.posY < this.gameMap.numRows - 1) {
      this.posY++;
      this.updatePlayerPosition();
    }
  }

  moveRight() {
    if (this.posX < this.gameMap.numColumns - 1) {
      this.posX++;
      this.updatePlayerPosition();
    }
  }

  moveLeft() {
    if (this.posX > 0) {
      this.posX--;
      this.updatePlayerPosition();
    }
  }

  updatePlayerPosition() {
    this.currentPos = `div-${this.posY}-${this.posX}`;
    const playerCell = document.getElementById(this.currentPos);
    playerCell.append(this.player);
    this.collectCoin();
  }
  collectCoin() {
    const score = document.getElementById("score");
    let sound = new Audio("../Fun/coinSound.mp3");
    for (let i = 0; i < 3; i++) {
      const coinPos = this.gameMap.coinsArr[i];
      if (
        this.currentPos === coinPos.getAttribute("id") &&
        coinPos.firstElementChild != this.player
      ) {
        sound.play();
        coinPos.removeChild(coinPos.firstElementChild);
        this.gameMap.coinsArr.splice(i, 1);
        this.score++;
        if (this.score >= 25 && this.score < 50) {
          score.classList.add("text-warning");
        } else if (this.score >= 50) {
          score.classList.add("text-danger");
        }
        score.innerHTML = `Score: ${this.score}`;
      }
      if (this.gameMap.coinsArr.length == 0) {
        this.gameMap.genCoins();
      }
    }
  }
}
