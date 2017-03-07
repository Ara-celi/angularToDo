angular
	.module('angularToDo',[
		'ui.router',
		'angularToDo.create',
		'angularToDo.list',
		'angularToDo.completed'
	])
	.config(angularToDoConfig);//may also be called (app)

function angularToDoConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}	