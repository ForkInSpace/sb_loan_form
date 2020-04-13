import moreInfoComponent from './more-info.component';

const moreInfoModule = angular.module('app.more-info', []);

// loading components, services, directives, specific to this module.
moreInfoModule.component('moreInfo', moreInfoComponent);

// export this module
export default moreInfoModule;
