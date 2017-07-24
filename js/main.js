$(document).ready(function(){
	$('.slider').slider();
	
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background","whitesmoke");
	    $(".navbar  ul li a").css("color", "grey");
	    $(".brand-logo").css("color", "grey");
	  }

	  else{
		  $(".navbar").css("background" , "transparent"); 
		  $(".navbar  ul li a").css("color", "white");
	    $(".brand-logo").css("color", "white"); 	
	  }
  })
});