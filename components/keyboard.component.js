import { TemplateIds } from '../types/template-ids.js';
import { AppModel } from '../types/app.model.js';
import { ButtonType } from '../types/button.type.js';
import { AppButtonName } from '../types/app.button.js';
import { NumericButtonComponent } from './numeric-button.component.js';
import { OperatorButtonComponent } from './operator-button.component.js';
import { ActionButtonComponent } from './action-button.component.js';
import { CheckFontSize } from '../utils/check-font.size.js';

export class KeyboardComponent {
  /**
   * @type{HTMLDivElement}
   * */
  #container;

  constructor(parentContainer) {
    this.#setContainer(parentContainer);
    this.#createButtons();
    this.#setEventListener();
  }

  #setContainer(parentContainer) {
    this.#container = parentContainer.querySelector('#' + TemplateIds.buttons);
  }

  #createButtons() {
    const keyBoardMap = {};
    const buttonNames = AppButtonName;
    const buttons = AppModel.config.keyboard.map(item => {
      if (AppModel.config.buttonByType[ButtonType.numeric][buttonNames[item]]) {
        return new NumericButtonComponent(buttonNames[item], item);
      }
      if (AppModel.config.buttonByType[ButtonType.operator][buttonNames[item]]) {
        return new OperatorButtonComponent(buttonNames[item], item);
      }
      if (AppModel.config.buttonByType[ButtonType.action][buttonNames[item]]) {
        return new ActionButtonComponent(buttonNames[item], item);
      }
    });
    this.#container.innerHTML = buttons.map(button => {
      keyBoardMap[button.value] = button;
      return button.template
    }).join('');
    AppModel.state.keyBoardMap = keyBoardMap;
  }

  #setEventListener() {
    this.#container.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('btn')) {
        const value = target.getAttribute('data-value');
        const type = target.getAttribute('data-type');
        this.#handleButtonClick(value, type);
      }
    });
  }

  #handleButtonClick(value, type) {
    const { action, numeric, operator } = ButtonType;
    if ([ action, numeric, operator ].includes(type)) {
      AppModel.state.keyBoardMap[value]?.handleButtonClick();
      AppModel.components.screen.displayValue();
      CheckFontSize();
    } else console.log(`Unknown button type: Value = ${value}, Type = ${type}`);
  }


}