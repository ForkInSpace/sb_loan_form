export default class HomeController {
	constructor($log, $location) {
		'ngInject';

		this.$log = $log;
		this.$location = $location;
	}

	$onInit = () => {

		this.form = {};
		this.heading = 'Consumer loan';
	}

	goToNextStep() {
		this.$location.path('calculator');
	}


}
