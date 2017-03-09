angular
	.module('angularToDo.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl($http, todos){
	var vm = this;

	vm.todosList = {
		todo: '',
		dueDate: ''
	}

    vm.addToList = function() {
        console.log("its working")
    	$http.post('/create', vm.todosList)
        .then(function(response){
            console.log(response)
        })
    }		
}	