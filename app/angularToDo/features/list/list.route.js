angular
	.module('angularToDo.list')
	.config(listConfig);

function listConfig($stateProvider) {
	$stateProvider.state({
		name: 'list',
		url: '/',
		templateUrl: '/angularToDo/features/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}