angular
	.module('angularToDo.completed')
	.config(completedConfig);

function completedConfig($stateProvider) {
	$stateProvider.state({
		name: 'completed',
		url: '/',
		templateUrl: '/angularToDo/features/completed/completed.html',
		controller: 'CompletedCtrl',
		controllerAs: 'CompletedVM'
	})
}