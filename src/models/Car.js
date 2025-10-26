export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(randomValue) {
    if (randomValue >= 4) {
      this.position += 1;
    }
  }
}