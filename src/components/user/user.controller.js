export default class UserController {
	constructor(
		$log,
		userService
	) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
	}

	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
			// console.log(this.users);
		});

		this.$log.info('Activated User View.');
	};
}
