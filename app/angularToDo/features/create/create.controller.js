angular
	.module('angularToDo.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, todos){
	var vm = this;

	vm.todosList = {
		todo: '',
		dueDate: ''
	}

    vm.addToList = function() {
    	var todo = new todos.Todo(
    		vm.todosList.todo,
    		vm.todosList.dueDate
    		);

    	todos.todos.push(todo);
    	console.log(todos.todos)
    }		
}	