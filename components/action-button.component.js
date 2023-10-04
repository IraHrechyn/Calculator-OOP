import { BaseButton } from '../types/base.button.js';
import { ButtonType } from '../types/button.type.js';
import { AppButton } from '../types/app.button.js';
import { AppModel } from '../types/app.model.js';

export class ActionButtonComponent extends BaseButton {
  constructor(classList, value) {
    super(classList + (value === "=" ? " bg-orange" : " bg-grey"), value, ButtonType.action);
  }

  static calculate() {
    const state = AppModel.state;

    if (state.operator === AppButton.division && parseFloat(state.secondNumber) === 0) {
      state.clearAll();
      state.errors = true;
      return;
    }

    if (state.isPercentage && state.secondNumber === "") return;

    if (state.secondNumber !== "") {
      const calculatedValue = ActionButtonComponent.#getCalculatedValue(state);
      state.clearAll();
      state.firstNumber = calculatedValue.toString();
    }
  }

  static #getCalculatedValue(state) {
    let first = parseFloat(state.firstNumber);
    let second = parseFloat(state.secondNumber);
    switch (state.operator) {
      case AppButton.plus:
        return first + second;
      case AppButton.minus:
        return first - second;
      case AppButton.multi:
        return first * second;
      case AppButton.division:
        return first / second;
      case AppButton.percent:
        return first * second;
      default:
        throw new Error(`Unknown operator "${state.operator}"`);
    }
  }

  handleButtonClick() {
    switch (this.value) {
      case AppButton.equal:
        ActionButtonComponent.calculate();
        break;
      case AppButton.plusMinus:
        this.#changeOfSign();
        break;
      case AppButton.ac:
        AppModel.state.clearAll();
        break;
      case AppButton.percent:
        this.#percentage();
        break;
    }
  }

  #changeOfSign() {
    const currentNumber = parseFloat(AppModel.state.currentValue);
    if (!isNaN(currentNumber)) AppModel.state.currentValue = (currentNumber * -1).toString();
  }

  #percentage() {
    const state = AppModel.state;

    if (!isNaN(+state.currentValue)) {
      const newValue = (+state.currentValue / 100).toString();
      state.isPercentage = true;

      state.currentValue = newValue;
    }
  }
}