angular.module('app')
	.controller('quoteDisplayController', ['$scope', 'quoteFactory', function(scope, quotes) {
		scope.quotes = quotes.quotes;
		console.log(scope.quotes[0].author.fname)

		scope.obj = quotes.aQuoteObj;
		console.log(scope.obj)
	}])