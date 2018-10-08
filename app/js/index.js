var regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
var input = document.querySelector("#mail"),
	button = document.querySelector("#btn1");

button.addEventListener('click', function(e){
	e.preventDefault();
	if(regExp.test(input.value)){
		input.style.border = "2px solid green"
		input.value = "";
		input.parentNode.submit();
		setTimeout(function(){
			input.style.border = 'none';
		},500)	
	} else {
		input.style.border = "2px solid red"
		input.value = "";
		setTimeout(function(){
			input.style.border = 'none';
		},2000)
	}
})

$(document).ready(function(){
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
            preload: [0,1],
            arrowMarkup: '<button title="%title%" type="button" class="carousel-arrow-%dir%"></button>',
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
	});
	var $menu = $(".menu");
	var $hamburger = $(".hamburger");
  		$hamburger.on("click", function(e) {
			$hamburger.toggleClass("is-active");
			console.log($menu);
			$menu.toggleClass("nav-active menu");
  });
})