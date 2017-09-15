$(document).ready(function () {

	$('#myContainer').multiscroll({
		sectionsColor: ['', '#eeeeec', '#afb5b0', '#0FB200'],
		menu: '#menu',
		navigation: true,
		responsiveWidth: 900,
		responsiveExpand: true,
		afterLoad: function (anchorLink, index) {
			$.fn.multiscroll.setMouseWheelScrolling(true);
			$.fn.multiscroll.setKeyboardScrolling(true);
		}
	});
});