export default class MoreInfoController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Additional info';
		this.$log.info('Activated more info View.');
	};
}
