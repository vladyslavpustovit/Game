export class Playground {
  constructor(containerId = "", numRows, numColumns) {
    this.containerId = containerId;
    this.numRows = numRows;
    this.numColumns = numColumns;
  }
  createPlayground() {
    const playground = document.getElementById(this.containerId);
    for (let row = 0; row < this.numRows; row++) {
      for (let column = 0; column < this.numColumns; column++) {
        const divElement = document.createElement("div");
        const divId = `div-${row}-${column}`; // Unique identifier for each div element
        divElement.setAttribute("id", divId);
        divElement.classList.add(
          "border",
          "border-dark",
          "border-opacity-25",
          "border-1"
        );
        playground.appendChild(divElement);
      }
    }
  }
}
