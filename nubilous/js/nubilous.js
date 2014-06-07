$(document).ready(function(){

	$('#red-section-waypoint').waypoint(function() {
	  $('.red-section .banner-title').addClass('animated fadeInRight');
	  $('.red-section .banner-title2').addClass('animated fadeInLeft');
	  $('.red-section .white-btn').addClass('animated pulse');
	}, { offset: 400 });

	$('#blue-section-waypoint').waypoint(function() {
	  $('.blue-section .banner-title').addClass('animated fadeInRight');
	  $('.blue-section img').addClass('animated fadeInRight');
	}, { offset: 400 });

});

