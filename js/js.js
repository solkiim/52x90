$(document).ready(function(){
	// iterate through and make original empty days
	var totalstr = '';
	for (var year = 0; year < 90; year++) {
		var yearstr = '<div class="year"';
		
		for (var week = 0; week < 52; week++) {
			yearstr += '<div class="week unfilled"></div>';
		}
		
		totalstr += (yearstr + '</div>');
	}
	
	$("#total").html(totalstr);
});


function fill(count) {
	
}