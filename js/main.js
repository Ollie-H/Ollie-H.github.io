var cv = {
	init: function(){
		// Bind events -- Add other bound events in this method
		cv.bindEvents();
	},
	bindEvents: function(){
		// Toggle recent work visibility
		$('.toggle-dropdown').click(function(e){
			var openText = "Close recent work";
			var closedText = "Open recent work";
			var elem = $(this).attr("href");
			alert(elem);
			var html = ($(this).text().indexOf("Open") > -1) ? openText : closedText;
			$(this).text(html);
			$(elem).slideToggle("slow");
			e.preventDefault();
		});
	}
} 

// Call cv init on DOM ready
$(document).ready(cv.init);