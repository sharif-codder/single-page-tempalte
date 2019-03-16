(function($) {
    $('.carousel').carousel({
      pause: "false"
    });

  	//go to next section and fixing header//
  	var menu_top = $("header").offset().top;
  	$(".go-to-next-section").click(function(){
          $("body,html").animate({scrollTop:menu_top},1000);
  	})
    $(window).scroll(function(){
       var scrolled_val = $(window).scrollTop();
       if(scrolled_val >= menu_top)
       {
          $("header").addClass('position-fixed');
       }
       else{
       	 $("header").removeClass('position-fixed');
       }
       animateElements(scrolled_val)
    });
    var animateElements= function(val) {	
	    $('.top-skill .section-item').each(function(){
	    	var elementPos = $(this).offset().top;
	        var topOfWindow = val;
	    	var percent = $(this).find('.circle-area').attr('data-percent');
	        var percentage = parseInt(percent, 10) / parseInt(100, 10);
	        var animate = $(this).data('animate');
	        if (elementPos < topOfWindow + $(window).height() - 30 && !animate){
	        	$(this).data('animate', true);
	        	$(this).find('.circle-area').circleProgress({
				    value: percent / 100,
				    startAngle: -Math.PI / 2,
				    size: 200,
				    thickness: 8,
				    emptyFill: '#eddddd'
			    }).on('circle-animation-progress', function (event, progress, stepValue) {
			    $(this).find('.circle-inner').html('<div>'+(stepValue*100).toFixed(0)+'</div>' + '<i>%</i>');
			});
	        }
	    })
    }
    $('.top-skill .col-md-3:nth-child(1) .circle-area').circleProgress({
    	fill:{
			    color: '#e12444'
			}
    });
    $('.top-skill .col-md-3:nth-child(2) .circle-area').circleProgress({
    	fill:{
			    color: '#e0c124'
			}
    });
    $('.top-skill .col-md-3:nth-child(3) .circle-area').circleProgress({
    	fill:{
			    color: '#9324e1'
			}
    });
    $('.top-skill .col-md-3:nth-child(4) .circle-area').circleProgress({
    	fill:{
			    color: '#1fb538'
			}
    });

    //owl carousel
		$('.team-slider').owlCarousel({
        items: 3,
        loop:true,
        margin:20,
        slideBy:3,
        rewind:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          380:{
            items:1
          },
          480:{
              items:1
          },
          500:{
              items:2
          },
          768:{
              items:3
          },
          990:{
              items:3
          }
       }
      });
    //countdown 
        $('.counter').counterUp({
            delay: 6,
            time: 1000
        });
    // ISOTOP
    // Activate isotope in container
        $(".port-folio-items").isotope({
            itemSelector: '.port-folio-item',
            layoutMode: 'fitRows'
        });


        // Add isotope click function
        
        $(".portfolio-menu ul li").click(function(){
            $(".portfolio-menu ul li").removeClass("is_selected");
            $(this).addClass("is_selected");
     
            var selector = $(this).attr('data-filter');
            $(".port-folio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                },
            });
            return false;
        });
    //owl carousel
    $('.client-slider').owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        margin:10,
        smartSpeed:600,
        autoplayHoverPause:true
      });
    //light-case
    $('a[data-rel^=lightcase]').lightcase();  
    //mobile menu display
     $('.mobile-bar').on('click', function(e) {
        $('body').toggleClass('open-mobile-menu')
        e.preventDefault();
      });
      //scroll to div
       function movesection(tn){
          var link = $(tn).attr('href');
          var posi = $(link).offset().top;
          console.log(posi)
          $('body,html').animate({scrollTop:posi},1500);
        }
       $('.main-menu>ul>li>a[href^="#"]').click(function(e){
          e.preventDefault();
          movesection($(this));
        });   

       $('.mobile-menu>li>a').click(function(e){
          movesection(this);
          e.preventDefault();
        }); 

        function initMap() {
          var myLatLng = {lat:23.739296, lng:90.389254};
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 23.739296, lng: 90.389254},
          zoom: 8
        });
        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
      }
      initMap();
})(jQuery);