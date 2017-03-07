angular
	.module('angularToDo',[
		'ui.router',
		'angularToDo.create'
	])
	.config(angularToDoConfig);//may also be called (app)

function angularToDoConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}	