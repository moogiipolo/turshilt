
   function FloatMenu()
    {
	var animationSpeed=1500;
	var animationEasing='easeOutQuint';
	var scrollAmount=$(document).scrollTop();
	var newPosition=menuPosition+scrollAmount;
	if($(window).height()<$('#fl_menu').height()+$('#fl_menu .menu').height())
	 {
	 $('#fl_menu').css('top',menuPosition);
	 $('#fp_menu').css('top',menuPosition);
	 }
	 else
	 {
	 $('#fl_menu').stop().animate({top: newPosition}, animationSpeed, animationEasing);
	 $('#fp_menu').stop().animate({top: newPosition}, animationSpeed, animationEasing);
	 }
    }
    $(window).load(function() 
	{
	menuPosition=$('#fl_menu').position().top;
	menuPosition=$('#fp_menu').position().top;
	FloatMenu();
    });
    $(window).scroll(function () { 
	FloatMenu();
    });
    jQuery(document).ready(function(){
	var fadeSpeed=500;
	$("#fl_menu").hover(
		function(){ //mouse over
			$('#fl_menu .label').fadeTo(fadeSpeed, 1);
			$("#fl_menu .menu").fadeIn(fadeSpeed);
		},
		function(){ //mouse out
			$('#fl_menu .label').fadeTo(fadeSpeed, 0.75);
			$("#fl_menu .menu").fadeOut(fadeSpeed);
		}
	);
    });