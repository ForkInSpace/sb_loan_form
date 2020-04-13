export default class calculatorController {
	constructor($log, formService, $location) {
		'ngInject';

		this.$log = $log;
		this.$location = $location;
		this.formService = formService;
	}

	$onInit = () => {

		this.form = {};
		this.heading = 'Calculate your loan possibilities';
		this.settings = {
			income: {
				value: 350,
				options: {
					floor: 350,
					ceil: 5000,
					step: 50,
					showSelectionBar: true,
					translate: function(value) {
						return value + ' €';
					}
				}
			},
			liability: {
				value: 0,
				options: {
					floor: 0,
					ceil: 1000,
					step: 50,
					showSelectionBar: true,
					translate: function(value) {
						return value + ' €';
					}
				}
			},
			loan: {
				value: 500,
				options: {
					floor: 500,
					ceil: 20000,
					step: 100,
					showSelectionBar: true,
					translate: function(value) {
						return value + ' €';
					}
				}
			},
			term: {
				value: 5,
				options: {
					floor: 1,
					ceil: 5,
					step: 1,
					showSelectionBar: true,
					translate: function(value) {
						return value + ' yr.';
					}
				}
			}
		}

		this.formService.getData().then((form) => {
			if(form){
				this.settings.income.value = form.income;
				this.settings.liability.value = form.monthlyLiability;
				this.settings.loan.value = form.loanAmount;
				this.settings.term.value = form.loanTermYears;
			}
		});


	};


	requestLoan() {
		this.form = {
			income: this.settings.income.value,
			monthlyLiability: this.settings.liability.value,
			loanAmount: this.settings.loan.value,
			loanTermYears: this.settings.term.value
		}

		this.formService
			.saveData(this.form)
			.then(res => {
				// console.log(res);
			})
			.then(res => {
				this.$location.path('personal-data');
			})

	}

}
