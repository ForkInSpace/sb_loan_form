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
			income: 350,
			debt: 0
		};
		this.getFromSession(this.info);
	};

	saveToSession(obj){
		return Object.keys(obj).forEach((item) => {
			this.$window.sessionStorage.setItem(item, this.info[item]);
		})
	}

	getFromSession(obj){
		return Object.keys(obj).forEach((item) => {
			this.info[item] = this.$window.sessionStorage.getItem(item);
		})
	}

	storeTheValue() {
		this.saveToSession(this.info);
	}

}
