angular.module('app')
	.factory('userFactory', [ function() {

		function User (idNum) {
			this.idNum = idNum;
			this.ratings = [];
		}

		User.prototype.addRating = function(quoteID, rating) {
			this.ratings.push({quoteID : quoteID, rating : rating});
			//console.log(quoteID)
			//console.log(quotes.quotes[quotes.indices().indexOf(quoteID)])
			//quotes.quotes[quotes.indices().indexOf(quoteID)].addRating(rating);
		}

		User.prototype.getRating = function(quoteID) { // gets the user's rating of a given quote
			return this.ratings[this.ratedQuotes().indexOf(quoteID)].rating
		}

		User.prototype.removeRating = function(quoteID) {
			//var rating = this.ratings[this.ratedQuotes.indexOf(quoteID)];
			//quotes.quotes[quotes.indices().indexOf(quoteID)].removeRating(rating.rating);
			this.ratings.splice(this.ratedQuotes().indexOf(quoteID), 1)
		}

		User.prototype.hasRated = function(quoteID) {
			return this.ratedQuotes().indexOf(quoteID) !== -1
		}

		User.prototype.ratedQuotes = function() { // returns a list of all of the quotes that the user has rated
			return this.ratings.map(cur => cur.quoteID)
		}

		var user = new User('u10001');

		return {
			user : user
		}
	}])