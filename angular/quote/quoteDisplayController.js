angular.module('app')
	.controller('quoteDisplayController', ['$scope', 'quoteFactory', function(scope, quotes) {
		scope.quotes = quotes.quotes;
		//console.log(scope.quotes[0].author.fname)

		scope.obj = quotes.quotes[0];
		console.log(scope.obj.starsArray)
		// console.log(scope.obj.rating)
		scope.report = function (val) {
			console.log(val);
		}
		
	}])

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log('!!!')
} else {
  alert('The File APIs are not fully supported in this browser.');
}