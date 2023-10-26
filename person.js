class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }
  
  const Timmy = new Person("Timmy");
  
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  
  for (let i = 0; i < 5; i++) {
    Timmy.eat();
  }
  
  for (let i = 0; i < 5; i++) {
    Timmy.exercise();
  }
  
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  
  const Gus = new Hamster("Gus");
  Gus.owner = "Timmy";
  
  Timmy.buyHamster(Gus);
  
  Timmy.eat();
  Timmy.eat();
  Timmy.exercise();
  Timmy.exercise();
  
  class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }