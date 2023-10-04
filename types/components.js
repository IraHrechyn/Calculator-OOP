import { ScreenComponent } from '../components/screen.component.js';
import { KeyboardComponent } from '../components/keyboard.component.js';

export class Components {
  /**
   * @type{ScreenComponent}
   * */
  screen;

  /**
   * @type{KeyboardComponent}
   * */
  keyBoard;

  init(container) {
    this.screen = new ScreenComponent()
    this.keyBoard = new KeyboardComponent(container);
  }
}