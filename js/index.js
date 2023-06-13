import { Playground } from "./playground.js";
import { Playground2 } from "./playground.js";
import { Player } from "./player.js";
import { Player2 } from "./player.js";

let bgSound = document.getElementById("bg-sound");
bgSound.volume = 0.4;

let playground1 = new Playground("playground", 5, 5);
playground1.createPlayground();
playground1.genCoins();
playground1.genStar();

let player = new Player(playground1);
player.updatePlayerPosition();

let playground2 = new Playground2("playground2", 5, 5);

playground2.createPlayground();
playground2.genCoins();
playground2.genStar();

let player2 = new Player2(playground2);
player2.updatePlayerPosition();
