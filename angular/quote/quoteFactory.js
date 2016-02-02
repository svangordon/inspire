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
				get rating() {
					function roundHalf (num) {
						return Math.round(num*2)/2;
					}
					roundedBool = roundedBool === undefined ? true : false
					var voteCount = arr.reduce( ( prev , cur ) => prev + cur );
					var voteScore = arr.reduce( ( prev , cur , i ) => prev + cur * i );
					var rating = voteScore / voteCount;
					return roundedBool ? roundHalf(rating) : rating;
				},
				
			};
		}

		Object.defineProperty(Quote.prototype, 'rating', {
			get : function ( arr, roundedBool ) {
					function roundHalf (num) {
						return Math.round(num*2)/2;
					}
					roundedBool = roundedBool === undefined ? true : false
					var voteCount = arr.reduce( ( prev , cur ) => prev + cur );
					var voteScore = arr.reduce( ( prev , cur , i ) => prev + cur * i );
					var rating = voteScore / voteCount;
					return roundedBool ? roundHalf(rating) : rating;
				}
		});

		Object.defineProperty(Quote.prototype, 'votesNumber', {
			get : function () {
				return this.metadata.ratingsArray.reduce( ( prev , cur ) => prev + cur );
			}
		})

		

		return {
			aQuoteObj : new Quote({
						fname : 'Gillian',
						lname : 'Anderson',
						desc : 'Actress',
						id : 'a100001'
					}, {content : 'Buckets are good for many a thing. Make sure you empty out a dirty bucket first, if the bucket is dirty.',
						context : 'Unprompted.'},
						{ratings : [10,20,30,40,50], id : 'a100001'})
			,

			quotes: [
				{
					author : {
						fname : 'Gillian',
						lname : 'Anderson',
						desc : 'Actress',
						id : 'a100001'
					},
					
					content : "Buckets are good for many a thing. Make sure you empty out a dirty bucket first, if the bucket is dirty.",
					context : 'Unprompted.',
					ratings : [10,20,30,40,50],
					id : 'q100001'
				},
				{
					author : {
						fname : 'Patrick',
						lname : 'Dempsey',
						desc : 'Actor',
						id : 'a100002'
					},
					content : "That's easy: Pikachu!",
					context : 'On which Pokemon card his childhood friend was holding when he got hit by a bus',
					ratings : [10,10,20,30,50],
					id : 'q100002'
				},
				{
					author : {
						fname : 'Janet',
						lname : 'Yellen',
						desc : 'Economist',
						id : 'a100003'
					},
					content : "The economy can best be described as billions of tiny ants. Each ant represents a dollar, and you can use the dollars to buy things.",
					context : 'On economics',
					ratings : [400,10,200,200,500],
					id : 'q100003'
				},
			]
		}
	}])