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
      case "w" || "W":
        this.moveUp();
        break;
      case "s" || "S":
        this.moveDown();
        break;
      case "d" || "D":
        this.moveRight();
        break;
      case "a" || "A":
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

  attachClickEvent(playerCell) {
    let cellsToGo = [];
    const [_, row, col] = playerCell.getAttribute("id").split("-");
    const clickY = parseInt(row);
    const clickX = parseInt(col);
    cellsToGo = [
      `div-${clickX + 1}-${clickY}`,
      `div-${clickX - 1}-${clickY}`,
      `div-${clickX}-${clickY + 1}`,
      `div-${clickX}-${clickY - 1}`,
    ];
    console.log(cellsToGo);
    for (const cellID of cellsToGo) {
      const cell = document.getElementById(cellID);
      if (cell) {
        cell.addEventListener("click", this.handleCellClick.bind(this, cell));
      }
    }
  }

  handleCellClick(cell) {
    const [_, row, col] = cell.getAttribute("id").split("-");
    const newX = parseInt(col);
    const newY = parseInt(row);

    if (this.isValidMove(newX, newY)) {
      this.posX = newX;
      this.posY = newY;
      this.updatePlayerPosition();
    }
  }

  isValidMove(newX, newY) {
    const rowDiff = Math.abs(newY - this.posY);
    const colDiff = Math.abs(newX - this.posX);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  }

  updatePlayerPosition() {
    this.currentPos = `div-${this.posY}-${this.posX}`;
    const playerCell = document.getElementById(this.currentPos);
    playerCell.append(this.player);
    this.attachClickEvent(playerCell);
    this.collectCoin();
  }
  collectCoin() {
    let coinSound = new Audio("../Fun/coinSound.mp3");
    let starSound = new Audio("../Fun/star.mp3");

    for (let i = 0; i < this.gameMap.coinsArr.length; i++) {
      const coinPos = this.gameMap.coinsArr[i];
      if (
        this.currentPos === coinPos.getAttribute("id") &&
        coinPos.firstElementChild.getAttribute("class") === "coin"
      ) {
        coinSound.play();
        coinPos.removeChild(coinPos.firstElementChild);
        this.gameMap.coinsArr.splice(i, 1);
        this.score++;
        this.updateScore();
      } else if (
        this.currentPos === coinPos.getAttribute("id") &&
        coinPos.firstElementChild.getAttribute("class") === "star"
      ) {
        starSound.play();
        coinPos.removeChild(coinPos.firstElementChild);
        this.gameMap.coinsArr.splice(i, 1);
        this.score += 5;
        this.updateScore();
        this.gameMap.genStar();
      }

      if (this.gameMap.coinsArr.length == 0) {
        this.gameMap.genCoins();
      }
    }
  }

  updateScore() {
    const score = document.getElementById("score");
    let swamp = new Audio("../Fun/swamp.mp3");
    let crazy = new Audio("../Fun/crazy.mp3");
    let ohmy = new Audio("../Fun/myGod.mp3");
    let how = new Audio("../Fun/how.mp3");
    score.innerHTML = `Score: ${this.score}`;

    if (this.score === 25) {
      score.classList.add("text-info");
      swamp.play();
    } else if (this.score === 50) {
      score.classList.add("text-success");
      score.classList.remove("text-info");
      ohmy.play();
    } else if (this.score === 75) {
      score.classList.add("text-warning");
      score.classList.remove("text-success");
      crazy.play();
    } else if (this.score === 100) {
      score.classList.add("text-danger");
      score.classList.remove("text-warning");
      how.play();
    }
  }
}

export class Player2 extends Player {
  constructor(gameMap) {
    super(gameMap);
    this.posX = Math.floor(gameMap.numColumns / 2 + 10);
    this.posY = Math.floor(gameMap.numRows / 2 + 10);
    this.player = new Image();
    this.player.src = "../img/playerIcon2.gif";
    this.player.classList.add("player2");
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
    if (this.posY > 10) {
      this.posY--;
      this.updatePlayerPosition();
    }
  }

  moveDown() {
    if (this.posY < this.gameMap.numRows - 1 + 10) {
      this.posY++;
      this.updatePlayerPosition();
    }
  }

  moveRight() {
    if (this.posX < this.gameMap.numColumns - 1 + 10) {
      this.posX++;
      this.updatePlayerPosition();
    }
  }

  moveLeft() {
    if (this.posX > 10) {
      this.posX--;
      this.updatePlayerPosition();
    }
  }

  updateScore() {
    const score = document.getElementById("score2");
    let swamp = new Audio("../Fun/swamp.mp3");
    let crazy = new Audio("../Fun/crazy.mp3");
    let ohmy = new Audio("../Fun/myGod.mp3");
    let how = new Audio("../Fun/how.mp3");
    score.innerHTML = `Score: ${this.score}`;

    if (this.score === 25) {
      score.classList.add("text-info");
      swamp.play();
    } else if (this.score === 50) {
      score.classList.add("text-success");
      score.classList.remove("text-info");
      ohmy.play();
    } else if (this.score === 75) {
      score.classList.add("text-warning");
      score.classList.remove("text-success");
      crazy.play();
    } else if (this.score === 100) {
      score.classList.add("text-danger");
      score.classList.remove("text-warning");
      how.play();
    }
  }
}
