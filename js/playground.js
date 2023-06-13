export class Playground {
  constructor(containerId = "", numRows, numColumns) {
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
          "align-items-center"
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
          "align-items-center"
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
}
