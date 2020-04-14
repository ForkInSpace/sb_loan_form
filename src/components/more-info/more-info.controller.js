export default class MoreInfoController {
	constructor($log, $window) {
		'ngInject';

		this.$log = $log;
		this.$window = $window;
	}

	$onInit = () => {
		this.heading = 'Additional info';
		this.info = {
			name: '',
			income: null,
			debt: null
		};
		if(Object.values(this.info).length == 3)
			this.getFromSession(this.info);
	};

	saveToSession(obj){
		return Object.keys(obj).forEach((item) => {
			this.$window.sessionStorage.setItem(item, this.info[item]);
		})
	}

// TODO move this to a service
	getFromSession(obj){
		return Object.keys(obj).forEach((item) => {
			this.info[item] = this.$window.sessionStorage.getItem(item);
		})
	}

	storeTheValue() {
		this.saveToSession(this.info);
	}

}
