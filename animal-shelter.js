const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet() {
    console.log(`Hi I'm a ${this.species}, called ${this.name}`);
  }

  feed() {
    this.hunger -= 20;
    console.log("Yum, I love food.");
  }
}

class Cat extends Animal {
  constructor(name, color, hunger) {
    super(name, color, hunger);
    super.species = "cat";
    super.food = "fish";
  }

  greet() {
    console.log(`Meow, I'm a ${this.species}, I'm called ${this.name}`);
  }

  feed() {
    console.log(`Yum, I love ${this.food}`);
  }
}

class Dog extends Animal {
  constructor(name, color, hunger) {
    super(name, color, hunger);
    super.species = "dog";
    super.food = "kibble";
  }

  greet() {
    console.log(`Woof, I'm a ${this.species}, I'm called ${this.name}`);
  }

  feed() {
    console.log(`Yum, I love ${this.food}`);
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  addAnimal(obj) {
    this.animals.push(obj);
  }

  adopt(animal) {
    const animalIndex = this.animals.indexOf(animal);
    this.animals.splice(animalIndex, 1);
  }

  getAnimalsBySpecies(species) {
    return this.animals.filter((animal) => {
      return animal.species === species;
    });
  }
}

const shelter = new AnimalShelter();

for (const el of animalData) {
  let newAnimal;
  const hunger = el.hunger ? el.hunger : 50;
  if (el.species === "cat") {
    newAnimal = new Cat(el.name, el.color, el.hunger);
  } else if (el.species === "dog") {
    newAnimal = new Dog(el.name, el.color, el.hunger);
  } else {
    newAnimal = new Animal(el.name, el.species, el.color, el.hunger);
  }
  shelter.addAnimal(newAnimal);
}

// console.log(shelter.animals);
// let result = shelter.getAnimalsBySpecies("dog");
// console.log(result);

for (const animal of shelter.animals) {
  animal.greet();
  animal.feed();
}
