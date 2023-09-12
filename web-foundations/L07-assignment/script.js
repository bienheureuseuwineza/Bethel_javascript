class Animal {
  constructor(animalName, animalFood) {
    this.speed = 0;
    this.food = animalFood;
    this.name = animalName;
  }
}

class Rabbit extends Animal {
  constructor(animalName, animalFood) {
    super(animalName, animalFood);
  }

  hide() {
    alert(
      ` ${this.name} is a rabbit and likes to eat ${this.food}. But he is hidden at the moment`
    );
  }
}

class Cow extends Animal {
  constructor(animalName, animalFood) {
    super(animalName, animalFood);
  }

  moo() {
    alert(
      `${this.name} is a cow and likes to eat ${this.food}. But he is moowing at the moment`
    );
  }
}

class Alligator extends Animal {
  constructor(animalName, animalFood) {
    super(animalName, animalFood);
  }

  eat() {
    alert(
      `${this.name} is a rabbit and likes to eat ${this.food}. But he is eating at the moment.`
    );
  }
}

class Sloth extends Animal {
  constructor(animalName, animalFood) {
    super(animalName, animalFood);
  }

  sleep() {
    alert(
      `${this.name} is a sloth and likes to eat ${this.food}. But he is sleeping at the moment`
    );
  }
}

// Creating instances of the child classes
const peterRabbit = new Rabbit("Peter", "carrots");
const daisyCow = new Cow("Daisy", "grass");
const snappyAlligator = new Alligator("Snappy", "fish");
const lazySloth = new Sloth("Lazy", "leaves");

// Calling the respective methods of each child class
peterRabbit.hide();
daisyCow.moo();
snappyAlligator.eat();
lazySloth.sleep();
