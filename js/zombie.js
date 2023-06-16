export class Zombie {
  constructor(gameMap, player) {
    this.zombie = new Image();
    this.zombie.src = "../img/zombie.gif";
    this.zombie.classList.add("zombie");
    this.currentPos = "";
    this.gameMap = gameMap;
    this.posX = Math.floor(Math.random() * gameMap.numColumns);
    this.posY = Math.floor(Math.random() * gameMap.numRows);
    this.player = player;
  }

  updateZombiePosition() {
    this.currentPos = `div-${this.posY}-${this.posX}`;
    console.log(this.currentPos);
    const zombieCell = document.getElementById(this.currentPos);
    zombieCell.append(this.zombie);
    this.dealDamage();
  }

  // zombieMove() {
  //   setInterval(() => {
  //     const opIndex = Math.floor(Math.random() * 4);
  //     console.log(opIndex);
  //     switch (opIndex) {
  //       case 0:
  //         this.posX < this.gameMap.numColumns - 1 ? this.posX++ : this.posX--;
  //         break;
  //       case 1:
  //         this.posX > 0 ? this.posX-- : this.posX++;
  //         break;
  //       case 2:
  //         this.posY < this.gameMap.numRows - 1 ? this.posY++ : this.posY--;
  //         break;
  //       case 3:
  //         this.posY > 0 ? this.posY-- : this.posY++;
  //         break;
  //     }
  //     this.updateZombiePosition();
  //   }, 400);
  // }

  zombieMove() {
    const playerX = this.player.posX;
    const playerY = this.player.posY;

    const directionX = playerX - this.posX;
    const directionY = playerY - this.posY;

    const absDirectionX = Math.abs(directionX);
    const absDirectionY = Math.abs(directionY);

    if (absDirectionX > absDirectionY) {
      if (directionX > 0) {
        this.posX += 1;
        this.zombie.style.transform = "scaleX(1)";
      } else {
        this.posX -= 1;
        this.zombie.style.transform = "scaleX(-1)";
      }
    } else {
      this.posY += directionY > 0 ? 1 : -1;
    }

    this.updateZombiePosition();
    this.dealDamage();
    this.player.isDamaged = false;
  }

  dealDamage() {
    if (this.currentPos === this.player.currentPos && !this.player.isDamaged) {
      this.player.score -= 5;
      this.player.isDamaged = true;
      this.player.updateScore();
    }
  }
}

export class Zombie2 extends Zombie {
  constructor(gameMap, player) {
    super(gameMap, player);
    this.posX = Math.floor(Math.random() * gameMap.numColumns + 10);
    this.posY = Math.floor(Math.random() * gameMap.numRows + 10);
  }
}
