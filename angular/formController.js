angular.module('app')
	.controller('formController', ['$scope', 'quoteFactory', 'quoteGetFactory', function (scope, quoteFactory, quoteGet) {
		

		scope.initForm = function() {
			scope.form = {
				author : {
					fname : '',
					lname : '',
					desc : '',
					id : ''
				},
				
				quote : {
					content : '',
					context : '',
				},

				metadata : {
					ratings : [0,0,0,0,1],
					id : scope.newId(quoteFactory.indices())
				},

			}
		}

		scope.initFormStatus = function() {
			scope.formStatus = {
				fname : 0,
				lname : 0,
				content : 0,
			}
		}

		scope.validateForm = function() {
			function validateField (key1, key2) {
				return scope.form[key1][key2].length > 0 ? 1 : -1
			}
			scope.form.author.fname = scope.form.author.fname || 'Anonymous';
			scope.formStatus.content = validateField('quote','content');
		}

		scope.formIsValid = function() {
			for (key in scope.formStatus) {
				if (scope.formStatus[key] === -1) {
					return false
				}
			}
			return true;
		}

		scope.newId = function (indices) {
			var lastId = indices[indices.length-1];
			lastId = lastId.split('');
			lastId.shift();
			var newId = 'q' + (Number(lastId.join(''))+1);
			return newId
		}

		scope.initForm();
		scope.initFormStatus();

		scope.pushForm = function() {
			quoteFactory.addQuote(scope.form.author, scope.form.quote, scope.form.metadata);
			scope.initForm();
		}

		scope.submitButton = function () {
			scope.validateForm()
			if (scope.formIsValid()) {
				scope.pushForm()
				scope.initFormStatus()
			}
			console.log('else')
		}

		scope.randomQuote = function () {
			var randQuote = quoteGet.newQuote();
			quoteFactory.addQuote(randQuote.author, randQuote.quote, {
					ratings : [0,0,0,0,1],
					id : scope.newId(quoteFactory.indices())
				})
		}

		console.log(quoteGet.newQuote())

		//scope.record = function(val) { console.log( val ) }
	}])