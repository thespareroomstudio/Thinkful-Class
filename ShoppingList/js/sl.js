$(function() {
	$('.button').click(function(e){																	// turn off reloading the page on form submits
		e.preventDefault();
	});
	$('#the_list ul').sortable({
		axis: "y", 
		stop: styleList,
		cursor: "move",
		opacity: ".50"
	});
	flexInput();
	$('input[name="submit-add_item"]').click(addItem);
	$('input[name="submit-delete_item"]').click(delItems);
	$('#pin').click(function() {
		console.log('hi');
		$(this).parent().remove();
	});
	$('#user_name').css("width", $('#user_name').siblings('span').first().width());
	$('#user_name').change('input', flexInput);
	

	function addItem() {
		var items = $('#input-list_item').val().split(",");
		for (var item = 0; item < items.length; item++)
			if (items[item].trim() != "") {
				$('#the_list ul').append('<li><a href="#" id="pin"><img src="img/thumbtack-odd.png" /></a><input type="checkbox" name=""><label>' + items[item].trim() + '</label><a href="" class="mini_controls ui-icon-cirlce-close"></a></li>');
			}
		$('#input-list_item').val('');
		styleList();
	}

	function delItems() {
		$('#the_list input:checked').parent().remove();
		styleList();
		
	}

	function styleList() {
		$('#the_list ul li:odd').css("background", "url('img/paper-odd.png?ver=1.3') repeat-x");
		$('#the_list ul li:even').css("background", "url('img/paper-even.png?ver=1.3') repeat-x");

	}

	function flexInput() {
		var textFromInput = $('#user_name').val().trim();
		var span = $('#user_name').siblings('span').first();
		span.text(textFromInput);
		$('#user_name').css("width", span.width());
	}


	$('#blur').blurjs({
	source: 'body',
	radius: 3
});

});