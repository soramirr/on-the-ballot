$(document).ready(function() {
	$('.petition-content').hide();
	$('.fourty-five').hide();
});

getContent = function(target) {
	$('.petition-content').hide("medium");
	$('.fourty-five').hide("medium");
	$('.starting-content').hide("medium");
	setTimeout(function() {
		$(target).show("medium");
	}, 700);
}