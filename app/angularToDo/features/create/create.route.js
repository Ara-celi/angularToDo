angular
	.module('angularToDo.create')
	.config(createConfig);

function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url: '/create',
		templateUrl: '/angularToDo/features/create/create.html',
		controller: 'CreateCtrl',
		controllerAs: 'CreateVM'
	})
}