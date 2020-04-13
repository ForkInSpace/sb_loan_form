export default class summaryController {
	constructor($log, formService, $window) {
		'ngInject';

		this.$log = $log;
		this.$window = $window;
		this.formService = formService;
	}

	$onInit = () => {
		this.heading = 'Summary';
		this.date = new Date();
		this.data = {}

		this.formService.getData().then((res) => {
			console.log(res);
			if(res){
				this.data = res;
			}
		});
	};

	submit() {
		this.$window.alert('Application successfully submited');
	}

}
