angular.module('app')
	.controller('ratingsController', ['$scope', 'quoteFactory', function (scope, quoteFac) {
		scope.quotes = quoteFac.quotes;
	}])