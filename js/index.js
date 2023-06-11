import { Player } from "./player.js";
import { Playground } from "./playground.js";

let playground1 = new Playground("playground", 9, 9);
let player = new Player(playground1);
playground1.createPlayground();

player.updatePlayerPosition();
