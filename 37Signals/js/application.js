$(function(){
	
	// get all the heading elements in <header> so we can filter later.  h1 are the main headings we'll be swapping, h3 are the sub headings
	var heading = $('header').children('h1');
	var sub_heading = $('header').children('h3');
	
	// when an element with the class "button" is hovered over, figure out which button it is, and then show/hide the corresponding elements
	$('.button').hover(function() {

		var arrow = $(this).children(".no_show");											// the arrow png's original state is hidden, hence , the class "no_show"
		var identity = $(this).children().children(".btn_head");							// each button has a heading, all with the class ".btn_head".  Get current heading
		var heading_id = identity.text().toLowerCase().trim();								// and then find it's text to determine which one so we can cross-reference with heading's IDs
		
		heading.filter('#main_heading').toggleClass("no_show");								// hide/show original heading
		heading.filter('#' + heading_id).toggleClass("no_show");							// hide/show new heading based on button hovered
		sub_heading.filter('#main_para').toggleClass("no_show");							// hide/show original sub heading
		sub_heading.filter('#' + heading_id + "_sub").toggleClass("no_show");				// hide/show new heading based on button hovered
		
		// toggle the arrow png based on the current button
		arrow.toggleClass(function(){
		
			// use the attribute "src" to determine where to position the arrow png
			if ($(this).attr("src").trim() === "img/arrow-left.png") {
				return "show_lft";
			} else {
				return "show_rt";
			}

		//  old code, before using IDs for the headers in <main>

		/*
		if (identity.text().toLowerCase().indexOf("basecamp") >= 0) {
			heading.filter('.swap_heading:nth-child(2)').toggleClass("no_show");
			sub_heading.filter('.swap_sub_heading:nth-child(2)').toggleClass("no_show");
			arrow.toggleClass("show_lft");

		} else if (identity.text().toLowerCase().indexOf("highrise") >= 0) {
			heading.filter('.swap_heading:nth-child(3)').toggleClass("no_show");
			sub_heading.filter('.swap_sub_heading:nth-child(3)').toggleClass("no_show");
			arrow.toggleClass("show_lft");

		} else if (identity.text().toLowerCase().indexOf("campfire") >= 0) {
			heading.filter('.swap_heading:nth-child(4)').toggleClass("no_show");
			sub_heading.filter('.swap_sub_heading:nth-child(4)').toggleClass("no_show");
			arrow.toggleClass("show_rt");

		};
		 */
		});  
	});
});