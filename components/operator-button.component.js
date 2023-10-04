import { BaseButton } from '../types/base.button.js';
import { ButtonType } from '../types/button.type.js';
import { ActionButtonComponent } from './action-button.component.js';
import { AppModel } from '../types/app.model.js';

export class OperatorButtonComponent extends BaseButton {
  constructor(classList, value) {
    super(classList + " bg-grey", value, ButtonType.operator);
  }

  handleButtonClick() {
    if (AppModel.state.secondNumber !== "") ActionButtonComponent.calculate();
    AppModel.state.operator = this.value;
  }
}
