class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(canMove) {
    if (canMove) this.#position++;
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
