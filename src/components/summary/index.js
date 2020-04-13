import summaryComponent from './summary.component';

const summaryModule = angular.module('app.summary', []);

// loading components, services, directives, specific to this module.
summaryModule.component('summary', summaryComponent);

// export this module
export default summaryModule;
