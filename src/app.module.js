// for loading styles we need to load main scss file
import './styles/styles.scss';

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';
// loading all module directives

const appModule = angular
	.module('credit-app', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		'rzSlider',
		// application specific modules
		'app.header',
		'app.breadcrumb',
		'app.home',
		'app.calculator',
		'app.personal-data',
		'app.more-info',
		'app.summary'
	]);
export default appModule;
