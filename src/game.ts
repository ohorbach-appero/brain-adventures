import Phaser from "phaser";
import { MainScene } from "./scenes/MainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  backgroundColor: "#1b1b1b",

  scene: [MainScene],

  parent: "app",
};

new Phaser.Game(config);
