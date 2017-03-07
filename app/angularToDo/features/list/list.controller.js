angular
	.module('angularToDo.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl($stateParams){
	var vm = this;

	vm.list = {
		todo: $stateParams.todo,
		dueDate: $stateParams.dueDate
	}
}
