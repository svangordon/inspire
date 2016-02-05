angular.module('app')
	.factory('quoteGetFactory', [function(){

		function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
        }

		function fortune() {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://cdn.rawgit.com/bmc/fortunes/master/fortunes', false);
                xhr.send(null);

                if (xhr.status === 200) {
                        var fortunes = xhr.responseText.split("%");
                        var fortune = fortunes[getRandomInt(0, fortunes.length)].trim();
                        console.log(fortune.indexOf(String.fromCharCode(8213)))
                        return fortune.indexOf(String.fromCharCode(8213)) === fortune.lastIndexOf(String.fromCharCode(8213)) ? fortune : fortune()
                }
        }

        //console.log(fortune())

        function processQuote() {
        	var quote = fortune()
        	var out = {
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

			}

			function parseName(str) {
				var name = []
				str = str.split(' ');
				name.push(str.pop());
				name.unshift(str.join(' '));
				out.author.fname = name[0];
				out.author.lname = name[1]
			}

			quote = quote.replace(/\n/g, ' ');
			quote = quote.split(' ').filter(cur => cur).join(' ');
			console.log(quote)
			// console.log(quote.indexOf(String.fromCharCode(8213)))
			//quote = quote.replace(/\u2013|\u2014/g, "-");
			//quote.split(' ').forEach(function(cur) {console.log(cur.charCodeAt(0))})
			var bar = String.fromCharCode(8213)

        	if (quote.indexOf(bar) === -1) {
        		out.author.fname = 'Anonymous';
        		out.quote.content = quote;
        		//console.log(out);
        		return out;
        	} else {
        		out.quote.content = quote.split(bar)[0];
        		quote = quote.split(bar)[1];
        		if (quote.indexOf(',') === -1) {
        			parseName(quote);
        		} else {
        			parseName(quote.split(',')[0]);
        			quote = quote.split(',');
        			quote.shift();
        			out.quote.context = quote.join(',')
        			//out.quote.context = quote.split(',')[1]
        		}
        	}
        	return out
        }

        return {
	    	newQuote : processQuote
	    }


	}])

	// Things to be returned : 
		// newQuote = {
		// 	author : {
		// 		fname : fname,
		// 		lname : lname,
		// 		desc : desc,
		// 		id : id
		// 	},
		// 	quote : {
		// 		content : content,
		// 		context : context
		// 	},
		// 	metadata : {
		// 		irrelevant (ish)
		// 	}
		// }