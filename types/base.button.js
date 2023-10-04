export class BaseButton {
  #value;
  #classList;
  #type;

  constructor(classList, value, type) {
    this.#classList = classList;
    this.#value = value;
    this.#type = type;
  }

  get value() {
    return this.#value;
  }

  get template() {
    return `<div class="btn ${this.#classList}" data-value="${this.#value}" data-type="${this.#type}">${this.#value}</div>`
  }

}