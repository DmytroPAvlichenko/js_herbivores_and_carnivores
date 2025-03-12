'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);

    Animal.instance = this;
  }

  checkHealth() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super();
  }

  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
      victim.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
