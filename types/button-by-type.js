import { ButtonType } from './button.type.js';
import { AppButton } from './app.button.js';

export class ButtonByType {
  constructor() {
    this.#init();
  }

  #init() {
    const { zero, one, six, dot, nine, two, ac, eight, equal, seven, division, five, four, minus, plus, plusMinus, multi, percent, three } = AppButton;
    this[ButtonType.action] = { plusMinus, ac, percent, equal };
    this[ButtonType.operator] = { plus, minus, division, multi };
    this[ButtonType.numeric] = { zero, one, two, three, four, five, six, seven, eight, nine, dot };
  }
}