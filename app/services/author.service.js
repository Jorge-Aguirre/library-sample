angular.
	module('authorService', []).
	service('Author', function () {
		var self = this;
		this.authorList = [];
		this.bookList = [];

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

		this.getById = function getById(id) {
			var index = self.authorList.findIndex(e => e.Id === id);
			return self.authorList[index];
		};

		this.getBooksByAuthor = function getBooksByAuthor(idAuthor) {
			var subset = self.bookList.filter(function (book) {
				return book.authorId == idAuthor
			});
			return subset;
		}

		this.saveBook = function save(book) {
			self.bookList.push(book);
		};

		this.editBook = function edit(book) {
			var index = self.bookList.indexOf(book);
			self.bookList[index] = book;
		};

		this.removeBook = function remove(book) {
			self.bookList.splice(self.bookList.indexOf(book), 1);
		};
	});