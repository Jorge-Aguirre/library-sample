angular.
	module('bookList').
	component('bookList', {
		templateUrl: 'book-list/book-list.template.html',
		controller: [ '$routeParams', 'Author',
			function BookListController ($routeParams, Author) {
				var self = this;

				var authorId = $routeParams.authorId;
				var author = Author.getById(authorId);

				self.authorName = author.name + ' - ' + author.lastName;

				this.books = Author.getBooksByAuthor(authorId);

				function reset() {
					self.book = {
						Id: '',
						name: '',
						year: '',
						editorial: ''
					};

					self.displayForm = '';
				}

				function removeModal() {
					self.displayForm = '';
					$('.modal').modal('hide');
				}

				this.addBook = function () {
					reset();
					self.displayForm = true;
				};

				this.saveBook = function () {
					var book = self.book;

					var ID = function () {
					  return '_' + Math.random().toString(36).substr(2, 9);
					};

					if (book.Id.length == 0) {
						book.Id = ID();
						Author.saveBook(book);
					} else {
						Author.editBook(book);
					}

					removeModal();
				};

				this.editBook = function (data) {
					self.book = data;
					self.displayForm = true;
				}

				this.removeBook = function (data) {
					Author.removeBook(data);
					self.books.splice(self.books.indexOf(data), 1);
				}
			}
		]
	});