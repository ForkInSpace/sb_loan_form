export default class MoreInfoController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Small loan application';
		this.$log.info('Activated more info View.');
	};
}
