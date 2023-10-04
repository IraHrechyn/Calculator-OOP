import { TemplateIds } from '../types/template-ids.js';
import { AppModel } from '../types/app.model.js';

export class CalculatorComponent {
  /**
   * @type {HTMLDivElement}
   * */
  #container;

  constructor(containerSelector) {
    this.#checkAndSetContainer(containerSelector);
    this.#generateBaseLayout();
    this.#generateChildComponents();
    console.log(this);
  }

  #checkAndSetContainer(containerSelector) {
    this.#container = document.querySelector(containerSelector);
    if (!this.#container) throw new Error(`Clock container with selector "${containerSelector}" not found.`);
  }

  #generateBaseLayout() {
    this.#container.innerHTML = `
      <div class="calc">
        <div class="screen" id="${TemplateIds.screen}"></div>
        <div class="button" id="${TemplateIds.buttons}"></div>
      </div>
    `;
  }

  #generateChildComponents() {
    AppModel.components.init(this.#container);
  }
}