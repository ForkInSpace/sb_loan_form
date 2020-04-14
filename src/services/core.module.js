import routerHelperService from './router-helper/router-helper.service';
import formService from './form/form.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('formService', formService);

export default coreModule;
