export class AppState {
  #firstNumber = '0';
  #secondNumber = '';
  #operator = '';
  #errors = false;
  #isPercentage = false;
  #keyBoardMap = {};
  #components = {};


  get components() {
    return this.#components;
  }

  set components(value) {
    this.#components = value;
  }

  get keyBoardMap() {
    return this.#keyBoardMap;
  }

  set keyBoardMap(value) {
    this.#keyBoardMap = value;
  }

  get firstNumber() {
    return this.#firstNumber;
  }

  set firstNumber(value) {
    this.#firstNumber = value;
  }

  get secondNumber() {
    return this.#secondNumber;
  }

  set secondNumber(value) {
    this.#secondNumber = value;
  }

  get operator() {
    return this.#operator;
  }

  set operator(value) {
    this.#operator = value;
  }

  get errors() {
    return this.#errors;
  }

  set errors(value) {
    this.#errors = value;
  }

  get isPercentage() {
    return this.#isPercentage;
  }

  set isPercentage(value) {
    this.#isPercentage = value;
  }

  /**
   * @returns {string}
   * */
  get currentValue() {
    return this.#operator === "" ? this.#firstNumber : this.#secondNumber;
  }

  /**
   * @param value {string}
   * */
  set currentValue(value) {
    if (this.#operator === "") this.#firstNumber = value;
    else this.#secondNumber = value;
  }

  clearAll() {
    this.#firstNumber = '0';
    this.#secondNumber = '';
    this.#operator = '';
    this.#errors = false;
    this.#isPercentage = false;
  }
}
