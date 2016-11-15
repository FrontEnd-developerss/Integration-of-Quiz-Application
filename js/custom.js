$(window).on('load',function() {
        // will first fade out the loading animation
   $("#status").delay(2900).fadeOut();

        // will fade out the whole DIV that covers the website.
    $("#preloader").delay(3000).fadeOut("slow");
});

$(document).ready(function(){
    $('.accordion').click(function() {
 $('#spinner').show();
		animate:1500;
  var $this = $(this).toggleClass('active');
  var $panel = $this.next().toggleClass('show');
   $('.accordion.active').not(this).removeClass("active").next().removeClass('show');

});
$(".logo").mouseover(function()
{
$(".logo").attr("src","images/2.jpg");
});
$(".logo").mouseout(function()
{
$(".logo").attr("src","images/1.jpg");
});

});