import { AppState } from './app.state.js';
import { CalculatorConfig } from './calculator.config.js';
import { Components } from './components.js';

export class AppModel {
  /**
   * @type {AppState}
   * */
  static state;
  /**
   * @type {CalculatorConfig}
   * */
  static config;

  /**
   * @type {Components}
   * */
  static components;

  static init() {
    AppModel.state = new AppState();
    AppModel.config = new CalculatorConfig();
    AppModel.components = new Components();
  }
}