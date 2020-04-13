export default class PersonalDataController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
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



	};
}
