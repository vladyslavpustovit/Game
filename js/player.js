export class Player {
  constructor(gameMap) {
    this.player = new Image();
    this.player.src = "../img/playerIcon.gif";
    this.player.classList.add("player");
    this.posX = Math.floor(gameMap.numColumns / 2);
    this.posY = Math.floor(gameMap.numRows / 2);

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
    const playerCellId = `div-${this.posY}-${this.posX}`;
    const playerCell = document.getElementById(playerCellId);
    playerCell.append(this.player);
  }
}
