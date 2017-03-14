$(document).ready(function(){
	$('.toggle-menu').click(function(){
		$(this).toggleClass('toggle-active');
		$('.header-nav').toggleClass('nav-active');
	});
	$('.action-panel span').click(function(){
		$(this).children('.action-panel-icon').toggleClass('checked-icon');
	});
});