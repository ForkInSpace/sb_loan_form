import personalDataComponent from './personal-data.component';

const personalDataModule = angular.module('app.personal-data', []);

// loading components, services, directives, specific to this module.
personalDataModule.component('personalData', personalDataComponent);

// export this module
export default personalDataModule;
