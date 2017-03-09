angular
	.module('angularToDo.component.todos')
	.service('todos', TodosService);

function TodosService() {
	var todos = [];

    function List(todo, dueDate) {
        this.todo = todo;
        this.dueDate = dueDate;
    }
        
    return {
        todos: todos,
        List: List
    }
}
