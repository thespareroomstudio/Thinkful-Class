$(function() {
	var itemAdded = false;
	
	$('input[name="submit-add_item"]').attr('disabled', true);
	$('input[name="submit-delete_item"]').attr('disabled', true);
	$('input[name="submit-add_item"]').click(addItem);
	$('input[name="submit-delete_item"]').click(delItems);
	$('#user_name').css("width", $('#user_name').siblings('span').first().width());
	$('#user_name').change('input', flexInput);
	
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
	
	$(this).on('click', '.ckbox', function() {
		$(this).parent().find('label').toggleClass('complete');	
		if ($(this).parent().find('input[type="checkbox"]').prop('checked')) {
			$(this).parent().find('input[type="checkbox"]').prop('checked', false);
		}	else {
			$(this).parent().find('input[type="checkbox"]').prop('checked', true);
		}
		stillChecked();
	});

	$(this).on('click', '#pin', function() {
		$(this).parent().remove();
		styleList();
	});
		
	$('#input-list_item').keyup(function() {
		if ($(this).val().length > 0) {
		$('input[name="submit-add_item"]').attr('disabled', false);
	}	else {
		$('input[name="submit-add_item"]').attr('disabled', true);
	}
	});

	$('#input-list_item').on('focus', function () {
		if (!itemAdded) {
			$(this).val('');
		}
	})

	$('#edit_name').click(function() {
		$('#user_name').focus();
		$('#user_name').val('');
	})
	
	function addItem() {
		var items = $('#input-list_item').val().split(",");
		for (var item = 0; item < items.length; item++)
			if (items[item].trim() != "") {
				$('#the_list ul').append('<li><a href="#" id="pin"><img src="img/thumbtack-odd.png" /></a><input type="checkbox" name=""><label>' + items[item].trim() + '</label><a href="#" class="ckbox"><img src="img/check.png" /></a></li>');
			}
		itemAdded = true;
		$('#input-list_item').val('');
		styleList();
	}

	function delItems() {
		$('#the_list input:checked').parent().remove();
		stillChecked();
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
		console.log(span.text());
		console.log(span.width());
		$('#user_name').css("width", span.width());
	}

	function stillChecked() {
		if ($('#the_list input:checked').parent().length > 0) {
			$('input[name="submit-delete_item"]').attr('disabled', false);		
		} else {
			$('input[name="submit-delete_item"]').attr('disabled', true);
		}
	}


	/*$('#blur').blurjs({
	source: 'body',
	radius: 3
});*/

});