import { mailType } from "../types/mailType";

export default class Mail {
  mailType: mailType;
  position: { x: number; y: number };
  speed: number;
  size: { width: number; height: number };
  colour: string;

  constructor(position = { x: 0, y: 0 }, speed = 0.1) {
    const odds = Math.random();

    // Mails have a 30% chance of being unfriendly
    this.mailType = odds <= 0.3 ? mailType.Unfriendly : mailType.Friendly;
    this.size = { width: 48, height: 32 };
    this.position = {
      x: position.x - this.size.width / 2,
      y: position.y,
    };
    this.speed = speed;
    this.colour = this.mailType === mailType.Unfriendly ? "red" : "green";
  }

  move() {
    this.position.y += this.speed;
  }
}
