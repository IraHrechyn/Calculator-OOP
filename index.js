import { AppModel } from './types/app.model.js';
import { CalculatorComponent } from './components/calculator.component.js';

AppModel.init();

new CalculatorComponent("#calc");
