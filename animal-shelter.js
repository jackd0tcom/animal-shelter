const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
  }

  greet() {
    console.log("Hi ${this.name}");
  }
}
