$(function(){
	var heading = $('main').children('h1');
	var sub_heading = $('main').children('h3');
	$('.button').hover(function() {
		var arrow = $(this).children(".no_show");
		var identity = $(this).children().children(".btn_head");
		heading.filter('#main_heading').toggleClass("no_show");
		sub_heading.filter('#main_para').toggleClass("no_show");
		if (identity.text().toLowerCase().indexOf("basecamp") >= 0) {
			heading.filter('.no_show:nth-child(3)').toggleClass("no_show");
			//alert(heading.filter('.no_show:nth-child(2)'));
			sub_heading.filter('.no_show:nth-child(3)').toggleClass("no_show");
			arrow.toggleClass("show_lft");

		} else if (identity.text().toLowerCase().indexOf("highrise") >= 0) {
			heading.filter('.no_show:nth-child(4)').toggleClass("no_show");
			sub_heading.filter('.no_show:nth-child(4)').toggleClass("no_show");
			arrow.toggleClass("show_lft");

		} else if (identity.text().toLowerCase().indexOf("campfire") >= 0) {
			heading.filter('.no_show:nth-child(5)').toggleClass("no_show");
			sub_heading.filter('.no_show:nth-child(5)').toggleClass("no_show");
			arrow.toggleClass("show_rt");

		};
		/* 
		arrow.toggleClass(function(){
			//alert($(this).attr("src"));
			var value = $(this).attr("src");
			//alert(value);
			if ($(this).attr("src").trim() === "img/arrow-left.png") {
				return "show_lft";
			} else {
				return "show_rt";
			}
		});  */
	});
});