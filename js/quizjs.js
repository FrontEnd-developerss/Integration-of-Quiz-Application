$(document).ready(function() {
	$('.btnNext').click(function(){
  $('.science> .active').next('li').find('a').trigger('click');
});

  $('.btnPrevious').click(function(){
  $('.science> .active').prev('li').find('a').trigger('click');
});

$('.btnNexts').click(function(){
  $('.social> .active').next('li').find('a').trigger('click');
});

  $('.btnPreviouss').click(function(){
  $('.social> .active').prev('li').find('a').trigger('click');
});

$('.btnNextg').click(function(){
  $('.general> .active').next('li').find('a').trigger('click');
});

  $('.btnPreviousg').click(function(){
  $('.general> .active').prev('li').find('a').trigger('click');
});

});