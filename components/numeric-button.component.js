import { BaseButton } from '../types/base.button.js';
import { ButtonType } from '../types/button.type.js';
import { AppModel } from '../types/app.model.js';

export class NumericButtonComponent extends BaseButton {
  constructor(classList, value) {
    super(classList, value, ButtonType.numeric);
  }

  handleButtonClick() {

    const state = AppModel.state;

    if ((this.value === "." && state.currentValue.includes(".")) || state.currentValue.length > 20) return;

    state.currentValue = state.currentValue === '0' ? this.value : state.currentValue + this.value;

    if (state.currentValue === ".") state.currentValue = "0.";
  }
}