angular.module('app')
	.controller('randoController', ['$scope', 'quoteGetFactory', 'quoteFactory', function(scope,quoteGet,quoteFactory) {


		scope.newId = function (indices) {
			var lastId = indices[indices.length-1];
			lastId = lastId.split('');
			lastId.shift();
			var newId = 'q' + (Number(lastId.join(''))+1);
			return newId
		}

		scope.randomQuote = function () {
			var randQuote = quoteGet.newQuote();
			quoteFactory.addQuote(randQuote.author, randQuote.quote, {
					ratings : [0,0,0,0,1],
					id : scope.newId(quoteFactory.indices())
				})
		}

	}])