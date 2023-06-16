export class Playground {
  constructor(containerId = "", numRows, numColumns) {
    this.containerId = containerId;
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.coinsArr = [];
    this.bombInterval;
  }
  createPlayground() {
    const playground = document.getElementById(this.containerId);
    playground.style.cssText = `
    display: grid;
    grid-template: repeat(${this.numRows}, 1fr) / repeat(${this.numColumns}, 1fr);
    grid-gap: 0;
  `;
    for (let row = 0; row < this.numRows; row++) {
      for (let column = 0; column < this.numColumns; column++) {
        const divElement = document.createElement("div");
        const divId = `div-${row}-${column}`; // Unique identifier for each div element
        divElement.setAttribute("id", divId);
        divElement.classList.add(
          "border",
          "border-warning",
          "border-opacity-25",
          "border-1",
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "position-relative"
        );

        playground.appendChild(divElement);
      }
    }
  }

  genCoins() {
    const usedCells = new Set(); // Track the cells that already have coins
    while (this.coinsArr.length < 3) {
      const x = Math.floor(Math.random() * this.numColumns);
      const y = Math.floor(Math.random() * this.numRows);
      const coinId = `div-${x}-${y}`;
      if (!usedCells.has(coinId)) {
        const coinPos = document.getElementById(coinId);
        const coinImg = document.createElement("img");
        coinImg.src = "../img/coin.gif";
        coinImg.classList.add("coin");
        coinPos.append(coinImg);
        this.coinsArr.push(coinPos);
        usedCells.add(coinId);
      }
    }
  }

  genStar() {
    setTimeout(() => {
      const x = Math.floor(Math.random() * this.numColumns);
      const y = Math.floor(Math.random() * this.numRows);
      const coinId = `div-${x}-${y}`;
      const starPos = document.getElementById(coinId);
      const starImg = document.createElement("img");
      starImg.src = "../img/star.gif";
      starImg.classList.add("star");
      starPos.append(starImg);
      this.coinsArr.push(starPos);
    }, 10000);
  }

  // genBomb() {
  //   setTimeout(() => {
  //     const x = Math.floor(Math.random() * this.numColumns);
  //     const y = Math.floor(Math.random() * this.numRows);
  //     const bombId = `div-${x}-${y}`;
  //     const bombPos = document.getElementById(bombId);
  //     const bombImg = document.createElement("img");
  //     bombImg.src = "../img/bomb.gif";
  //     bombImg.classList.add("bomb");
  //     bombPos.append(bombImg);
  //     this.coinsArr.push(bombPos);
  //   }, 5000);
  // }

  // removeBomb() {
  //   const bombPos = this.coinsArr.find(
  //     (element) => element.getElementsByClassName("bomb").length > 0
  //   );
  //   if (bombPos) {
  //     const bombImg = bombPos.getElementsByClassName("bomb")[0];
  //     bombImg.remove();
  //     const index = this.coinsArr.indexOf(bombPos);
  //     if (index !== -1) {
  //       this.coinsArr.splice(index, 1);
  //     }
  //   }
  // }

  // startBombInterval() {
  //   this.removeBomb(); // Remove existing bomb immediately
  //   this.bombInterval = setInterval(() => {
  //     this.removeBomb(); // Remove existing bomb every 5 seconds
  //     this.genBomb(); // Generate new bomb
  //   }, 5000);
  // }
}

/*PLAYGROUND2*/

export class Playground2 extends Playground {
  constructor(containerId = "", numRows, numColumns) {
    super();
    this.containerId = containerId;
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.coinsArr = [];
  }

  createPlayground() {
    const playground = document.getElementById(this.containerId);
    playground.style.cssText = `
        display: grid;
        grid-template: repeat(${this.numRows}, 1fr) / repeat(${this.numColumns}, 1fr);
        grid-gap: 0;
      `;
    for (let row = 10; row < this.numRows + 10; row++) {
      for (let column = 10; column < this.numColumns + 10; column++) {
        const divElement = document.createElement("div");
        const divId = `div-${row}-${column}`; // Unique identifier for each div element
        divElement.setAttribute("id", divId);
        divElement.classList.add(
          "border",
          "border-warning",
          "border-opacity-25",
          "border-1",
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "position-relative"
        );

        playground.appendChild(divElement);
      }
    }
  }

  genCoins() {
    const usedCells = new Set(); // Track the cells that already have coins
    while (this.coinsArr.length < 3) {
      const x = Math.floor(Math.random() * this.numColumns + 10);
      const y = Math.floor(Math.random() * this.numRows + 10);
      const coinId = `div-${x}-${y}`;
      if (!usedCells.has(coinId)) {
        const coinPos = document.getElementById(coinId);
        const coinImg = document.createElement("img");
        coinImg.src = "../img/coin.gif";
        coinImg.classList.add("coin");
        coinPos.append(coinImg);
        this.coinsArr.push(coinPos);
        usedCells.add(coinId);
      }
    }
  }

  genStar() {
    setTimeout(() => {
      const x = Math.floor(Math.random() * this.numColumns + 10);
      const y = Math.floor(Math.random() * this.numRows + 10);
      const coinId = `div-${x}-${y}`;
      const starPos = document.getElementById(coinId);
      const starImg = document.createElement("img");
      starImg.src = "../img/star.gif";
      starImg.classList.add("star");
      starPos.append(starImg);
      this.coinsArr.push(starPos);
    }, 10000);
  }

  // genBomb() {
  //   setTimeout(() => {
  //     const x = Math.floor(Math.random() * this.numColumns + 10);
  //     const y = Math.floor(Math.random() * this.numRows + 10);
  //     const bombId = `div-${x}-${y}`;
  //     const bombPos = document.getElementById(bombId);
  //     const bombImg = document.createElement("img");
  //     bombImg.src = "../img/bomb.gif";
  //     bombImg.classList.add("bomb");
  //     bombPos.append(bombImg);
  //     this.coinsArr.push(bombPos);
  //   }, 5000);
  // }
}
