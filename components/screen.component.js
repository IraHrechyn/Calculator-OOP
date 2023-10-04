import { TemplateIds } from '../types/template-ids.js';
import { AppModel } from '../types/app.model.js';

export class ScreenComponent {
  /**
   * @type {HTMLDivElement}
   * */
  element;

  constructor() {
    this.element = document.getElementById(TemplateIds.screen);
    this.displayValue();
  }

  displayValue() {
    this.element.innerText = AppModel.state.errors ? "На нуль ділити не можна!" : AppModel.state.currentValue;

  }
}
