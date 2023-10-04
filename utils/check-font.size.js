import { AppModel } from '../types/app.model.js';

export function CheckFontSize() {
  AppModel.components.screen.element.style.fontSize = AppModel.state.currentValue.length > 8 ? '24px' : '4rem';
  if (AppModel.state.errors) AppModel.components.screen.element.style.fontSize = "22px";
}

