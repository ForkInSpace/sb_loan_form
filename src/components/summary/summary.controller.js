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
		this.moreData = {
			name: '',
			income: null,
			debt: null
		};

		this.formService.getData().then((res) => {
			if(res){
				this.data = res;
			}
		});

		this.getFromSession(this.moreData);
	};

	getFromSession(obj){
		return Object.keys(obj).forEach((item) => {
			this.moreData[item] = this.$window.sessionStorage.getItem(item);
		})
	}

	submit() {
		this.$log.log('Application successfully submited');
	}

}
