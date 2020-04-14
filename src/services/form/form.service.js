export default class FormService {
	constructor(
		$http,
    $q
	) {
		'ngInject';

    this.$q = $q;
	}
  static form = {};
	static personalData = {};

	getData = () => {
    let defer = this.$q.defer();
    defer.resolve(this.form);
		return defer.promise;
	};

  saveData = (res) => {
		let defer = this.$q.defer();
		this.form = res;
		if(this.personalData){
			this.form.personalData = this.personalData;
		}
		defer.resolve(this.form);
		// console.log(this.form);
		return defer.promise;
  }

	savePersonalData = (res) => {
		let defer = this.$q.defer();
		this.personalData = res;
		if(this.form){
			this.form.personalData = this.personalData;
		}
		defer.resolve(this.form);
		return defer.promise;
	}


}
