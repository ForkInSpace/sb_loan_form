import calculatorController from './calculator.component';

const calculatorModule = angular.module('app.calculator', []);

// loading components, services, directives, specific to this module.
calculatorModule.component('calculator', calculatorController);

// export this module
export default calculatorModule;
