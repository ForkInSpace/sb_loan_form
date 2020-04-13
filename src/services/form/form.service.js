export default class FormService {
	constructor(
		$http,
    $q
	) {
		'ngInject';

    this.$q = $q;
	}
  static form = {};

	getData = () => {
    let defer = this.$q.defer();
    defer.resolve(this.form);
		return defer.promise;
	};

  saveData = (res) => {
		let defer = this.$q.defer();
		this.form = res;
		defer.resolve(this.form);
		// console.log(this.form);
		return defer.promise;
  }


}
