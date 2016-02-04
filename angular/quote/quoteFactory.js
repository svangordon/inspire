//quoteFactory

angular.module('app')
	.factory('quoteFactory', [function(){

		var Quote = function(author, quote, metadata) {
			this.author = {
				fname : author.fname,
				lname : author.lname,
				desc : author.desc,
				id : author.id
			};

			this.quote = {
				content : quote.content,
				context : quote.context
			};

			this.metadata = {
				ratingsArray : metadata.ratings,
				id : metadata.id,
				
			};

			this.status = {
				hover : 0,
				rated : false
			}
		}

		Quote.prototype = {
			get rating() {
					function roundHalf (num) {
						return Math.round(num*2)/2;
					}
					var voteScore = this.metadata.ratingsArray.reduce( ( prev , cur , i ) => prev + cur * ( i + 1 ) );
					var rating = voteScore / this.votesNumber;
					return Math.round(rating)
			},
			get votesNumber() {
				return this.metadata.ratingsArray.reduce( ( prev , cur ) => prev + cur );
			},
			addRating : function(ratingIndex) { // Expects index of the star -- so like rating - 1
				this.metadata.ratingsArray[ratingIndex]++;
			},
			removeRating : function (ratingIndex) {
				this.metadata.ratingsArray[ratingIndex]--;
			},
			get starsArray() { // an index of whether to display each of the five stars
				var out = [];
				for (var i = 0; i < this.rating ; i++) {
					out.unshift(true);
				}
				for (var i = 0; i < 5 - this.rating; i++) {
					out.unshift(false);
				}
				return out;
			}

		}

		

		return {
			
			quotes: [
				new Quote(
					{
						fname : 'Gillian',
						lname : 'Anderson',
						desc : 'Actress',
						id : 'a100001'
					},
					{
						content : 'Buckets are good for many a thing. Make sure you empty out a dirty bucket first, if the bucket is dirty.',
						context : 'Unprompted.'
					},
					{
						ratings : [10,20,30,40,50],
						id : 'q100001'
					}
				),

				new Quote(
					{
						fname : 'Patrick',
						lname : 'Dempsey',
						desc : 'Actor',
						id : 'a100002'
					},
					{
						content : "That's easy: Pikachu!",
						context : 'On which Pokemon card his childhood friend was holding when he got hit by a bus'
					},
					{
						ratings : [10,10,20,30,50],
						id : 'q100002'
					}
				),

				new Quote(
					{
						fname : 'Janet',
						lname : 'Yellen',
						desc : 'Economist',
						id : 'a100003'
					}, 
					{
						content : "The economy can best be described as billions of tiny ants. Each ant represents a dollar, and you can use the dollars to buy things.",
						context : 'On economics'
					},
					{
						ratings : [400,10,200,200,500],
						id : 'q100003'
					}
				)
			],

			indices : function() {
				return this.quotes.map(cur => cur.metadata.id)
			},

			getRating : function(quoteID) {
				return this.quotes[this.indices().indexOf(quoteID)].rating
			},
			getById : function(quoteID) {
				return this.quotes[this.indices().indexOf(quoteID)]
			}
		}
	}])