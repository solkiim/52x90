var birthday = new Date("August 13, 1997 00:00:00");

$(document).ready(function(){
	makeYear(19);
	makeMonth(145);
	makeWeek(1017);
	
	// olympics left
	// number of books left to read
	// average travels
});


/* ------------------------- FILL IN YEARS ------------------------- */
function makeYear(yearcount) {
	// iterate through and make original empty days
	var totalstr = '';
	for (var decade = 1; decade <= 9; decade++) {
		var decadestr = '<div class="decade">';
		
		for (var year = 1; year <= 10; year++) {
			decadestr += '<div class="year unfilled"></div>';
		}
		
		totalstr += (decadestr + '</div>');
	}
	
	$(".pt-page-2 #total").html(totalstr);
	
	fillYear(yearcount);
}

function fillYear(yearcount) {
	var wholedecades = Math.floor(yearcount / 10);
	var remainderyears = yearcount % 10;
	for (var decade = 1; decade <= wholedecades; decade++) {
		$(".pt-page-2 #total .decade:nth-child(" + decade + ") .year").removeClass("unfilled").addClass("filled");
	}
	for (var year = 1; year <= remainderyears; year++) {
		$(".pt-page-2 #total .decade:nth-child(" + (wholedecades + 1) + ") .year:nth-child(" + year + ")").removeClass("unfilled").addClass("filled");
	}
}


/* ------------------------- FILL IN MONTHS ------------------------- */
function makeMonth(monthcount) {
	// iterate through and make original empty days
	var totalstr = '';
	for (var years3 = 1; years3 <= 30; years3++) {
		var years3str = '<div class="years3">';
		
		for (var month = 1; month <= 36; month++) {
			years3str += '<div class="month unfilled"></div>';
		}
		
		totalstr += (years3str + '</div>');
	}
	
	$(".pt-page-3 #total").html(totalstr);
	
	fillMonth(monthcount);
}

function fillMonth(monthcount) {
	var wholeyears3 = Math.floor(monthcount / 36);
	var remaindermonths = monthcount % 36;
	for (var years3 = 1; years3 <= wholeyears3; years3++) {
		$(".pt-page-3 #total .years3:nth-child(" + years3 + ") .month").removeClass("unfilled").addClass("filled");
	}
	for (var month = 1; month <= remaindermonths; month++) {
		$(".pt-page-3 #total .years3:nth-child(" + (wholeyears3 + 1) + ") .month:nth-child(" + month + ")").removeClass("unfilled").addClass("filled");
	}
}


/* ------------------------- FILL IN WEEKS ------------------------- */
function makeWeek(weekcount) {
	// iterate through and make original empty days
	var totalstr = '';
	for (var year = 1; year <= 90; year++) {
		var yearstr = '<div class="year">';
		
//		// if decade marking
//		if (year % 10 == 1) {
//			//yearstr += '<p class="decade">' + year + '</p>'
//			yearstr += '<hr style="height:8px; margin:0; visibility:hidden;" />'
//		}
		
		for (var week = 1; week <= 52; week++) {
			yearstr += '<div class="week unfilled"></div>';
		}
		
		totalstr += (yearstr + '</div>');
	}
	
	$(".pt-page-4 #total").html(totalstr);
	
	fillWeek(weekcount);
}

function fillWeek(weekcount) {
	var wholeyears = Math.floor(weekcount / 52);
	var remainderweeks = weekcount % 52;
	for (var year = 1; year <= wholeyears; year++) {
		$(".pt-page-4 #total .year:nth-child(" + year + ") .week").removeClass("unfilled").addClass("filled");
	}
	for (var week = 1; week <= remainderweeks; week++) {
		$(".pt-page-4 #total .year:nth-child(" + (wholeyears + 1) + ") .week:nth-child(" + week + ")").removeClass("unfilled").addClass("filled");
	}
}