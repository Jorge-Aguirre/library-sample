angular.
	module('librarySampleApp').
	component('authorList', {
		templateUrl: 'author-list/author-list.template.html',
		controller: function AuthorListController() {
			var self = this;

			this.authors = [];

			function reset() {
				self.author = {
					id: '',
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

				if (author.id.length == 0) {
					author.id = ID();
					self.authors.push(author);
				}

				removeModal();
			};

			this.editAuthor = function (data) {
				self.author = data;
				self.displayForm = true;
			}

			this.removeAuthor = function (data) {
				self.authors.splice(self.authors.indexOf(data), 1);
			}
		}
	});