import { ButtonByType } from './button-by-type.js';
import { AppButton } from '/types/app.button.js';

export class CalculatorConfig {
  /**
   * @type {string[]}
   **/
  #keyBoard = [];
  /**
   * @type {ButtonByType}
   **/
  #buttonByType = new ButtonByType();

  constructor() {
    this.#initKeyBoard();
  }

  get keyboard() {
    return this.#keyBoard;
  }

  /**
   * @returns{ButtonByType}
   **/
  get buttonByType() {
    return this.#buttonByType;
  }

  #initKeyBoard() {
    const { zero, one, six, dot, nine, two, ac, eight, equal, seven, division, five, four, minus, plus, plusMinus, multi, percent, three } = AppButton;
    this.#keyBoard = [
      ac, plusMinus, percent, division,
      seven, eight, nine, multi,
      four, five, six, minus,
      one, two, three, plus,
      zero, zero, dot, equal
    ]
  }

}
