$("document").ready(function(){

	var random = function(){

		var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"
		$.getJSON(url, function(data){
			$("#quote").text(data.quoteText);

			if (data.quoteAuthor === "") {
				$("#author").text(data.quoteAuthor = "Unknown");
			}else { 
				$("#author").text(data.quoteAuthor);
			}
			tweetUpdate(data.quoteText, data.quoteAuthor)
		})
			

		
	}
	var tweetUpdate = function(quote, author){
				$("#tweet-content").empty()
			
			
			
			twttr.widgets.createHashtagButton(window.location.href, document.getElementById("tweet-content"),
 			{
 			text: (quote + "\n" + "by " + author),
  			size:"large"
 			}
			);
		}
			$("#btn-new").click(function(){
			random()
			})
	random()

})
