export default class PersonalDataController {
	constructor($log, formService, $location) {
		'ngInject';

		this.$log = $log;
		this.$location = $location;
		this.formService = formService;
	}

	$onInit = () => {
		this.heading = 'Your personal details';
		this.personal = {};
		this.education = [
			'Primary',
			'Secondary',
			'Vocational',
			'College',
			'Higher'
		];
		this.occupation = [
			'Specialist/Office worker',
			'Worker',
			'Superior specialist',
			'Middle manager',
			'Executive',
			'Owner',
			'Student',
			'Pensioner',
			'Housewife',
			'Unemployed',
			'Private entrepreneur'
		];
		this.industry = [
			'Agriculture, forestry, fishery (hunting)',
			'Construction',
			'Industry (food processing, textile, timber, paper, chemical, metal etc.)',
			'Trade, personal service (wholesale and retail trade, hotels, restaurants)',
			'Transport, haulage, communications',
			'Financial intermediation (insurance, financial interm. assistance services)',
			'Education, culture',
			'Real estate activities',
			'Information Technologies',
			'Legal assistance, auditing and other business',
			'Health and social care',
			'Public administration and national defencee'
		];
		this.timeEmployed = [
			'Trial period',
			'Up to 1 year',
			'Up to 2 years',
			'Up to 3 years',
			'Up to 4 years',
			'Up to 5 years',
			'More than 5 years'
		];
		this.typeOfContract = [
			'Open-end',
			'Fixed-term',
			'Other'
		];
		this.maritalStatus = [
			'Single',
			'Married',
			'Common law marriage',
			'Divorced',
			'Widow/Widower'
		]

		this.formService
			.getData()
			.then(data => {
				if(data && data.personalData){
						this.personal.education = data.personalData.education || '';
						this.personal.occupation = data.personalData.occupation || '';
						this.personal.industry = data.personalData.industry || '';
						this.personal.timeEmployed = data.personalData.timeEmployed || '';
						this.personal.typeOfContract = data.personalData.typeOfContract || '';
						this.personal.otherTypeOfContract = data.personalData.otherTypeOfContract || '';
						this.personal.maritalStatus = data.personalData.maritalStatus || '';

				}
			})

	};

	saveData() {
		this.formService
			.savePersonalData(this.personal)
			.then(res => {
				// console.log('saved ', res);
			})
			.then(() => {
				this.$location.path('more-info');
			})
	}

}
