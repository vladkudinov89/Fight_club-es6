export class Fighter {
  constructor(name = "RandomFighter", health = 100, power = 1) {
    this._name = name;
    this._health = health;
    this._power = power;
  }

  get power() {
    return this._power;
  }

  get health() {
    return this._health;
  }

  get name() {
    return this._name;
  }

  set health(value) {
    this._health = value;
  }

  setDamage(damage) {
    this._health = this._health - damage;
    console.log(
      `
        ${this.name} has -= ${this._health} =- health left . Damage -${damage}
       `
    );
  }

  hit(enemy, point) {
    let damage = 0;
    damage = point * this._power;
    console.log(`${this.name} is attack`);
    enemy.setDamage(damage);
  }
}
