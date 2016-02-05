angular.module('app')
	.controller('quoteDisplayController', ['$scope', 'quoteFactory', function(scope, quotes) {
		scope.quotes = quotes.quotes;
		scope.report = function (val) {
			console.log(val);
		}
		
	}])
