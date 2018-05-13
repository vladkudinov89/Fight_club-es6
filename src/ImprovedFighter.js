import { Fighter } from "./Fighter.js";

export class ImprovedFighter extends Fighter {
  constructor(name, health, power, doubleDamage = 0) {
    super(name, health, power);
  }

  doubleHit(enemy, point) {
    this.doubleDamage = 2 * point;
    this.hit(enemy, this.doubleDamage);
  }
}
