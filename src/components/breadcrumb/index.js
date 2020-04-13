import breadcrumbComponent from './breadcrumb.component';

const breadcrumbModule = angular.module('app.breadcrumb', []);

// loading components, services, directives, specific to this module.
breadcrumbModule.component('appBreadcrumb', breadcrumbComponent);

// export this module
export default breadcrumbModule;
