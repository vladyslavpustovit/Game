import { Player } from "./player.js";
import { Playground } from "./playground.js";
let bgSound = document.getElementById("bg-sound");
bgSound.volume = 0.4;

let playground1 = new Playground("playground", 5, 5);
let player = new Player(playground1);
playground1.createPlayground();
playground1.genCoins();
playground1.genStar();
player.updatePlayerPosition();
