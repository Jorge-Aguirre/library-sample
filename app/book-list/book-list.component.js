angular.
	module('bookList').
	component('bookList', {
		templateUrl: 'book-list/book-list.template.html',
		controller: [ '$routeParams',
			function BookListController ($routeParams) {
				this.authorId = $routeParams.authorId;
			}
		]
	});