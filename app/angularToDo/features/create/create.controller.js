angular
	.module('angularToDo.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl(){
	var vm = this;

	vm.todo = '';
	vm.dueDate = '';
}	