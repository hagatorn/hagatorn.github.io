
  $(document).ready(function() {
	$(".product-slider").lightSlider({
		item:1,
		auto: true,
		loop:true,
		pause: 6000,
		adaptiveHeight:true
		});
	    
	$('.product-slider').hover(
	    	function(){
	    		$('.slider-desc').stop().slideDown();
	    		return false;
			},
		function(){
			$('.slider-desc').stop().slideUp();
	    		return false;
		}); 

	
	$(".product-gallery").lightSlider({
		item:1,
		loop:true,
		pause: 6000,
		adaptiveHeight:true,
		gallery:true,
		controls:false
		});
  });
