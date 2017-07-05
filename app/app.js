var librarySampleApp = angular.module('librarySampleApp', []);

librarySampleApp.controller('AuthorListController', function AuthorListController($scope) {
	$scope.authors = [];

	function reset() {
		$scope.author = {
			id: '',
			name: '',
			lastName: '',
			nationality: ''
		};

		$scope.displayForm = '';
	}

	function removeModal() {
		$('.modal').modal('hide');
	}

	$scope.addAuthor = function () {
		reset();
		$scope.displayForm = true;
	};

	$scope.saveAuthor = function () {
		var author = $scope.author;

		var ID = function () {
		  return '_' + Math.random().toString(36).substr(2, 9);
		};

		if (author.id.length == 0) {
			author.id = ID();
			$scope.authors.push(author);
		} else {
			$scope.displayForm = '';
		}

		removeModal();
	};

	$scope.editAuthor = function (data) {
		console.log(data);
		$scope.author = data;
		$scope.displayForm = true;
	}

	$scope.removeAuthor = function (data) {
		$scope.authors.splice($scope.authors.indexOf(data), 1);
	}
});

librarySampleApp.controller('AddAuthorController', function AddAuthorController($scope) {

});