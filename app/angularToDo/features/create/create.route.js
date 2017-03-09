//Links create.controller.js, create.route.js and create.html
angular
	.module('angularToDo.create')
	.config(createConfig); //takes a function as a property

function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url: '/create',
		templateUrl: '/angularToDo/features/create/create.html',
		controller: 'CreateCtrl',
		controllerAs: 'CreateVM'
	})
}