$(document).ready(function(){
	// iterate through and make original empty days
	var totalstr = '';
	for (var year = 1; year <= 90; year++) {
		var yearstr = '<div class="year">';
		
		// if decade marking
		if (year % 10 == 1) {
			//yearstr += '<p class="decade">' + year + '</p>'
			yearstr += '<hr style="height:8px; margin:0; visibility:hidden;" />'
		}
		
		for (var week = 1; week <= 52; week++) {
			yearstr += '<div class="week unfilled"></div>';
		}
		
		totalstr += (yearstr + '</div>');
	}
	
	$("#total").html(totalstr);
	
	fill(1017);
});


function fill(count) {
//	var filler = setInterval(function(){
//		// done filling
//		if (count === -1) clearInterval(filler)
//		
//		
//		alert("Hello");
//	}, 100);
	var wholeyears = Math.floor(count / 52);
	var remainderweeks = count % 52;
	for (var year = 1; year <= wholeyears; year++) {
		$("#total .year:nth-child(" + year + ") .week").removeClass("unfilled").addClass("filled");
	}
	for (var week = 1; week <= remainderweeks; week++) {
		$("#total .year:nth-child(" + (wholeyears + 1) + ") .week:nth-child(" + week + ")").removeClass("unfilled").addClass("filled");
	}
}