angular.
	module('librarySampleApp').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/authors', {
					template: '<author-list></author-list>'
				}).
				when('/authors/:authorId/books', {
					template: '<book-list></book-list>'
				}).
				otherwise('/authors');
		}]);
