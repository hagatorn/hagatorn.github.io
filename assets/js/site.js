
  $(document).ready(function() {
    $(".product-slider").lightSlider({
	item:1,
	auto: true,
	loop:true,
	pause: 6000,
	adaptiveHeight:true
	});
    
    $('.product-slider').hover(function(){
    $('.slider-desc').slideDown();
    return false;
}); 
  });
