angular.module('app')
	.controller('ratingsController', ['$scope', 'quoteFactory', 'userFactory', function (scope, quoteFac, userFactory) {
		scope.quotes = quoteFac.quotes;
		scope.user = userFactory.user;
		scope.starClick = function (quoteID,index) { // click handler for the rating stars
			console.log(quoteFac.getById(quoteID).metadata.ratingsArray)
			if (scope.user.hasRated(quoteID)) {
				console.log('if')
				var ratingToBeRemoved = scope.user.getRating(quoteID);
				scope.user.removeRating(quoteID);
				scope.quotes[quoteFac.indices().indexOf(quoteID)].removeRating(ratingToBeRemoved);
				scope.user.addRating(quoteID, index);
				scope.quotes[quoteFac.indices().indexOf(quoteID)].addRating(index);
			} else {
				console.log('else')
				scope.user.addRating(quoteID, index);
				scope.quotes[quoteFac.indices().indexOf(quoteID)].addRating(index);
			}
			console.log(quoteFac.getById(quoteID).metadata.ratingsArray)
		}

		scope.starsDisplay = function (quoteID) { // returns which stars should be yellow
			var out = [];
			var rating;
			if (scope.user.hasRated(quoteID)) {
				rating = scope.user.getRating(quoteID) + 1
			} else {
				rating = quoteFac.getRating(quoteID) 
			}
			for (var i = 0; i < rating ; i++) {
				out.unshift(true);
			}
			for (var i = 0; i < 5 - rating; i++) {
				out.unshift(false);
			}
			//console.log(out)
			return out;
		} 

		scope.record = function (val) {
			console.log(val)
		}

	}])

	//Okay, so this is getting increasingly complex -- I'm going to need to have a better way to do this.  Maybe there's a handler in the quote factory?  Yeah, all of this logic is being moved into the starsArray getter of the quoteFac