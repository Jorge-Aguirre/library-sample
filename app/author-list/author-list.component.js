angular.
	module('authorList').
	component('authorList', {
		templateUrl: 'author-list/author-list.template.html',
		controller: ['Author',
			function AuthorListController(Author) {
				var self = this;
				this.authors = Author.getAll();

				function reset() {
					self.author = {
						Id: '',
						name: '',
						lastName: '',
						nationality: ''
					};

					self.displayForm = '';
				}

				function removeModal() {
					self.displayForm = '';
					$('.modal').modal('hide');
				}

				this.addAuthor = function () {
					reset();
					self.displayForm = true;
				};

				this.saveAuthor = function () {
					var author = self.author;

					var ID = function () {
					  return '_' + Math.random().toString(36).substr(2, 9);
					};

					if (author.Id.length == 0) {
						author.Id = ID();
						Author.save(author);
					} else {
						Author.edit(author);
					}

					removeModal();
				};

				this.editAuthor = function (data) {
					self.author = data;
					self.displayForm = true;
				}

				this.removeAuthor = function (data) {
					Author.remove(data);
					self.authors.splice(self.authors.indexOf(data), 1);
				}
			}
		]
	});