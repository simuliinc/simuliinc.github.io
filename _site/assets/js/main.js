/* ===================================================================

    Author          : Themetum
    Template Name   : Aing Creative Consulting & Business Agency HTML Template
    Version         : 1.0

* ================================================================= */
(function($) {
    "use strict";

    $(document).on('ready', function() {

    /* -------------------------------------------------------------------
        MailChimp js
     ------------------------------------------------------------------ */

        if($('#mc-form').length){

            $('#mc-form').ajaxChimp();
        }





		/* ==================================================
			# Data Background
		 ===============================================*/

		$("[data-background]").each(function(){
			$(this).css("background-image","url(" + $(this).attr("data-background") +")");
		});

        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();



        /* ==================================================
            # Smooth Scroll
         =============================================== */

        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


		 /* ==================================================
            # Scroll to top
         =============================================== */
			//Get the button
			var mybutton = document.getElementById("scrtop");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			  } else {
				mybutton.style.display = "none";
			  }
			}

		 /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();

		/* ==================================================
			# Accordion Menu
		 =============================================== */

		  $(document).on('click','.panel-group .panel',function(e) {
			e.preventDefault();
			$(this).addClass('panel-active').siblings().removeClass('panel-active');
		});

        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

            /* Filter active */
            $('.blog-masonry').isotope({
                itemSelector: '.blog-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.blog-item',
                }
            });

        });


        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });


        /* ==================================================
            # Partner Carousel
         ===============================================*/

        $('.brand-wrapper').owlCarousel({
            loop: true,
            margin:30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });


        /* ==================================================
            # Hero Slider Carousel
         ===============================================*/

        $('.hero-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
			autoplayTimeout:5000,
            items: 1,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
        });



        /* ==================================================
         # Review Carousel
        ===============================================*/

		var swiper = new Swiper('.review-wpr', {
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		});

		/* ==================================================
        # Feedback Carousel
        ===============================================*/

		var swiper = new Swiper('.feed-active', {
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			},
		  	pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  	},
		});

        /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });


        /* ==================================================
            Preloader Init
         ===============================================*/
        $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });


		 /* ==================================================
            Contact Form Validations
        ================================================== */
        $("#contact-form").submit(function(e){
            e.preventDefault();
            var action = $(this).attr("action");
            $.ajax({
                type: "POST",
                url: action,
                crossDomain: true,
                data: new FormData(this),
                dataType: "json",
                processData: false,
                contentType: false,
                headers: {
                    "Accept": "application/json"
                }
        }).done(function() {
            //$('.success').addClass('is-active');

            $(".form-message").html("Message Sent Succesfully");

        }).fail(function() {
            alert('An error occurred! Please try again later.')
        });
        });

		 /* ==================================================
            Mouse Animation
        ================================================== */

			function theme_tm_cursor(){

				var myCursor	= jQuery('.mouse-cursor');

				if(myCursor.length){
					if ($("body")) {
					const e = document.querySelector(".cursor-inner"),
						t = document.querySelector(".cursor-outer");
					let n, i = 0,
						o = !1;
					window.onmousemove = function (s) {
						o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
					}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
					}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
						$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
					}), e.style.visibility = "visible", t.style.visibility = "visible"
				}
				}
			};
			theme_tm_cursor()

		/* ==================================================
		# Slick nav
		 ===============================================*/

		 $('.testimonial-active').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.test-img-active',
			autoplay: true,
			autoplaySpeed: 5000,
		});

		$('.test-img-active').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.testimonial-active',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: false,
		});

		$(".testimonial-active").slick({
			lazyLoad: 'ondemand', // ondemand progressive anticipated
			infinite: true
		});

    }); // end document ready function
})(jQuery); // End jQuery
