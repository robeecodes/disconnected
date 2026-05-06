import Mail from "../models/Mail";

// Function to manage the creation of new mails to drop
export const spawnMail = (canvasSize: { width: number; height: number }, minSpeed: number, mails: Array<Mail>) => {
  const position = { x: Math.random() * canvasSize.width, y: -100 };
  const speed = minSpeed;
  mails.push(new Mail(position, speed));
};

// Function to check if two objects are colliding. Used to check the collision of the bin and the mail.
export const checkCollision = (
  a: { width: number; height: number; x: number; y: number },
  b: { width: number; height: number; x: number; y: number },
) => {
  const rangesA = {
    xRange: [a.x, a.x + a.width],
    yRange: [a.y, a.y + a.height],
  };

  const rangesB = {
    xRange: [b.x, b.x + b.width],
    yRange: [b.y, b.y + b.height],
  };

  const xOverlap = rangesA.xRange[0] <= rangesB.xRange[1] && rangesB.xRange[0] <= rangesA.xRange[1];

  const yOverlap = rangesA.yRange[0] <= rangesB.yRange[1] && rangesB.yRange[0] <= rangesA.yRange[1];

  return xOverlap && yOverlap;
};
