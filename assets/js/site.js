
  $(document).ready(function() {
	$(".product-slider").lightSlider({
		item:1,
		auto: true,
		loop:true,
		pause: 6000,
		adaptiveHeight:true
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
