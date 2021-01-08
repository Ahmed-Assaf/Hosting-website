/* wow.js */
new WOW().init();

$(function(){
    $('#testi-carousel').owlCarousel({
        loop:true,
        margin: 50,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});

$(function(){
    $('#customer-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    
    $('.slick-carousel').slick({
        ltr: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 2000,
        pauseOnFocus: false,

      });

      $('.nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });

      $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
      });


});

$(document).ready(function () {
	var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll == 0) {
			pure();
		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
			if (currentScroll > previousScroll) {
				hideNav();
            } else {
				showNav();
			}
			previousScroll = currentScroll;
        }

	});

	function hideNav() {
		$(".navbar").removeClass("is-visible").addClass("is-hidden");
	}

	function showNav() {
		$(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
    }

    function pure() {
		$(".navbar").removeClass("is-visible").addClass("nav-pure");
    }

    $('#toggler').click(function(){
        if ($(window).width() <= 500){
            mobileSize();
        } else {
            openNav();
        }
    });
    


    
});

  $(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});




/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("sideOverlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sideOverlay").style.display = "none";
}

function mobileSize() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("sideOverlay").style.display = "block";
}


 