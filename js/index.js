class Player {
  constructor() {
    this.player = document.getElementById("player");
    this.posX = 0;
    this.posY = 0;

    // Bind the event listener to the current instance of the player
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

  moveDown() {
    this.posY += 20;
    this.player.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }
  moveUp() {
    this.posY -= 20;
    this.player.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }
  moveRight() {
    this.posX += 20;
    this.player.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }
  moveLeft() {
    this.posX -= 20;
    this.player.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }
}

let game = new Player();

game.player.addEventListener("keydown", (e) => {
  e.moveRight();
});
