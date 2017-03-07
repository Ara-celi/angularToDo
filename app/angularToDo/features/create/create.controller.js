angular
	.module('angularToDo.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl(){
	var vm = this;

function resetView() {}
	vm.todo = '';
	vm.dueDate = '';
}	