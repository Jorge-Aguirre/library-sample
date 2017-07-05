angular.
	module('authorService', []).
	service('Author', function () {
		var self = this;
		this.authorList = [];

		this.getAll = function getAll () {
			return self.authorList;
		};

		this.save = function save(author) {
			self.authorList.push(author);
		};

		this.edit = function edit(author) {
			var index = self.authorList.indexOf(author);
			self.authorList[index] = author;
		};

		this.remove = function remove(author) {
			self.authorList.splice(self.authorList.indexOf(author), 1);
		};
	});