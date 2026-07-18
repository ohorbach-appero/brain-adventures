import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.add
      .text(640, 360, "Brain Adventures", {
        fontSize: "64px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
  }
}
