/* jQuery codes and functions used in RoseFolio Template */
(function($) {
   
   "use strict";
                    
   /* PAGE LOADER */
   $(window).load(function(){
      // the loader scrolls to the top after 1500ms
      $('#loader').delay(1500).animate({
        top: '-150%'
      }, 1000)
   });
   
   var height = 500;
   $(window).scroll(function() {
      var scroll = getCurrentScroll();
         
         if ( scroll >= height ) {
               
               $('.site-name-container')
                     .removeClass( "make-visible" );
               
               /* UPDATE 1.2 */
               $('.navbar-nav')
                     .removeClass( "make-visible" );
         }
         
         else{
            
               $('.site-name-container')
                  .addClass( "make-visible" );
               
               /* UPDATE 1.2 */ 
               $('.navbar-nav')
                     .addClass( "make-visible" );
            
         }
         
   });
   
   function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
   }

 
   /* fullpage slider config for index04-onepage.html */
   
   if ( $( "#section-home-2" ).length ){
      var slideTimeout;
         $('#section-home-2').fullpage({
            navigation: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            scrollingSpeed: 1000,
            autoScrolling: false,
            scrollBar: true,
            loopHorizontal: true,
            verticalCentered: true,
            fitToSection: false,
            afterLoad: function(anchorLink, index) {
               
                   slideTimeout = setInterval(function () {
                        $.fn.fullpage.moveSlideRight();
                    }, 5000);
            }
       });
   }


   
   /* combined display clicks for modal contents */
   $(document).on('click',
      "#display-proj-1, #display-proj-2, #display-more-aboutus, #display-bpost-1, #display-bpost-2", function () {

      $("body").css('overflow','hidden');
      
      setTimeout(
          function() 
          {

            $("#header").fadeOut(500);
            $('.project-details').fadeIn(500);
         }, 200);
       return false;
   });
   

   /* display project 1 */
   $(document).on('click', "#display-proj-1", function () {

         $("#project-1").load("projects/proj-1.html");

         setTimeout(
          function() 
          {
            $('#project-1').css('top', '0');
           
          }, 200);
  
        return false;
   });
   
      /* display project 2 */
   $(document).on('click', "#display-proj-2", function () {

        $("#project-2").load("projects/proj-2.html");

        setTimeout(
            function() 
            {
               $('#project-2').css('top', '0');
            }, 200);
  
        return false;
   });
   
   
   /* combined clicks on close btns */
   
   $(document).on('click', "#close-proj-1, #close-proj-2, #close-more-aboutus, #close-bpost-1, #close-bpost-2", function () {
      $("body").css('overflow-y','scroll');
      setTimeout(
         function() 
         {
            $("#header").delay(500).fadeIn(500);
         }, 200);
      
         return false;
   });
   
   /* close project 1 */
   $(document).on('click', "#close-proj-1", function () {
       
      $('#project-1').css('top', '-100%'); 
       setTimeout(
         function() 
         {
            $('#display-proj-1').fadeIn(500);
            
         }, 200);
       $('#display-proj-1').focus();
       return false;
   });
   
   /* close project 2 */
   $(document).on('click', "#close-proj-2", function () {

       $('#project-2').css('top', '-100%');
       setTimeout(
         function() 
         {
            $('#display-proj-2').fadeIn(500);
         }, 200);
       $('#display-proj-2').focus();
       return false;
   });
   
   /* display blog post 1 */
   $(document).on('click', "#display-bpost-1", function () {

        $("#blog-1").load("blog/blog-1.html");
        $('#display-bpost-1').fadeOut(500);
        
        setTimeout(
          function() 
          {
            $('#blog-1').css('top', '0');
          }, 200);
  
        return false;
   });
   
   /* display blog post 2 */
   $(document).on('click', "#display-bpost-2", function () {

        $("#blog-2").load("blog/blog-2.html");
        $('#display-bpost-2').fadeOut(500);
        
        setTimeout(
          function() 
          {
            $('#blog-2').css('top', '0');
          }, 200);
  
        return false;
   });
   
   /* hide blog post 1 */
   $(document).on('click', "#close-bpost-1", function () {
       
       $('#blog-1').css('top', '-100%');
       
       setTimeout(
         function() 
         {
            $('#display-bpost-1').fadeIn(500);
         }, 200);
       $('#display-bpost-1').focus();
       return false;
   });

   
   /* hide blog post 2 */
   $(document).on('click', "#close-bpost-2", function () {
       $('#blog-2').css('top', '-100%');
       setTimeout(
         function()  
         {
            $('#display-bpost-2').fadeIn(500);
         }, 200);
       $('#display-bpost-2').focus();
       return false;
   });
   
   /* display more about us */
   $(document).on('click', "#display-more-aboutus", function () {

        $("#more-aboutus").load("about/more-aboutus.html"); 
        $('#display-more-aboutus').fadeOut(500);
        
        setTimeout(
          function() 
          {
            
            $('#more-aboutus').css('top', '0');
          }, 200);
  
        return false;
   });

   
   /* close more-aboutus */
   $(document).on('click', "#close-more-aboutus", function () {
       $('#more-aboutus').css('top', '-100%');
       setTimeout(
         function() 
         {
            
            $('#display-more-aboutus').fadeIn(500);
         
         }, 200);
       $('#display-more-aboutus').focus();
       return false;
   });

   
   /* go to up button for the project 1 */
   $(document).on('click', "#go-up-1", function() {
      $("#project-1").scrollTo("#project-header-1", 1000);
   });
   
   /* go to up button for the project 2 */
   $(document).on('click', "#go-up-2", function() {
      $("#project-2").scrollTo("#project-header-2", 1000);
   });
   
   
 
   
   /* smooth scrolling */
   function scrollNav() {
      $('a[href*=#]').on("click", function(){

         if ( $( ".navbar-fixed-top" ).length ){
            $('html, body').animate({
                   scrollTop: $( $.attr(this, 'href') ).offset().top - 80
               }, 1000);
            return false;
         
         } else{
               $('html, body').animate({
                   scrollTop: $( $.attr(this, 'href') ).offset().top
               }, 1000);
            return false;
         }
         $("body").css('overflow-y','scroll');
         
      });
   }
   scrollNav();
 
   
   /* menu icon */
   if ( $( "#openMenu" ).length ){
      var openMenu = document.getElementById( 'openMenu' ),
          closeMenu = document.getElementById( 'closeMenu' ),
          body = document.body;
      
      /* menu icon open */
      openMenu.onclick = function() {
         $('.cbp-spmenu-top').addClass('cbp-spmenu-open');
         $("body").css('overflow','hidden');
      };

      /* menu icon close */
      closeMenu.onclick = function() {
         $('.cbp-spmenu-top').removeClass('cbp-spmenu-open');
         $("body").css('overflow-y','scroll');
      };
      
      $('.menu-item-links li a').on("click", function(){
        
         $(".selected").removeClass("selected");      
         $(this).closest('li').addClass("selected");
         var theClass = $(this).attr("class");
         $('.'+theClass).parent('li').addClass('selected');
         $('.cbp-spmenu-top').removeClass('cbp-spmenu-open');
         $("body").css('overflow-y','scroll');
      }); 
   }
   
   
   /* open search form */
   if ( $( "#open-search" ).length ){
   var  openSearch = document.getElementById( 'open-search' ),
         searchContainer = document.getElementById( 'search-container' )
         body = document.body;
         

      openSearch.onclick = function() {
         classie.toggle( this, 'active' );
         classie.toggle( searchContainer, 'cbp-spmenu-open' );
         $("body").css('overflow','hidden');
      };
      
      /* menu icon close */
      closeSearch.onclick = function() {
         $('.cbp-spmenu-top').removeClass('cbp-spmenu-open');
         $("body").css('overflow-y','scroll');
      };
      
   }
      
      
   /* JCAROUSEL RESPONSIVENESS */
   $(function() {
       if ( $( ".jcarousel" ).length ) {
         var jcarousel = $('.jcarousel');
       
         jcarousel
             .on('jcarousel:reload jcarousel:create', function () {
                 var width = jcarousel.innerWidth();
       
                 if (width >= 992) {
                     width = width / 4;
                  } else if (width >= 768) {
                     width = width / 3;                                     
                 
                  } else if (width >= 500) {
                     width = width / 2;                                     
                  } 
       
                 jcarousel.jcarousel('items').css('width', width + 'px');
             })
             .jcarousel({
                 wrap: 'circular',
                 animation: {
                     duration: 1000,
                     easing:   'linear'
                 }
             });
   
         $('.jcarousel-control-prev')
             .jcarouselControl({
                 target: '-=1'
             });
       
         $('.jcarousel-control-next')
             .jcarouselControl({
                 target: '+=1'
             });
   
         $('.jcarousel-pagination')
             .on('jcarouselpagination:active', 'a', function() {
                 $(this).addClass('active');
             })
             .on('jcarouselpagination:inactive', 'a', function() {
                 $(this).removeClass('active');
             })
             .on('click', function(e) {
                 e.preventDefault();
             })
             .jcarouselPagination({
                 perPage: 1,
                 item: function(page) {
                     return '<a href="#' + page + '">' + page + '</a>';
                 }
             });
       }
   });
   

   // select the first item visible on jcarousel
   $('.jcarousel').on('jcarousel:firstin', 'li', function(event, carousel) {
      $(".jcarousel li").removeClass('info-visible');
      $(this).addClass('info-visible');
   });
   
   /* TESTIMONIAL CAROUSEL */ 
   if ( $( ".testi-carousel" ).length ) {
      $('.testi-carousel').owlCarousel({
         items:1,
         margin:10,
         loop: true,
         autoplay: true,
         autoplayHoverPause: true,
         autoplaySpeed: 1000,
         dotsSpeed: 1000,
         animateOut: 'fadeOut'
      });
   }
   
   /* IMAGE CAROUSEL */
   if ( $( ".collection-carousel" ).length ) {  
      $('.collection-carousel').owlCarousel({
         items:1,
         //margin:10,
         loop: true,
         animateOut: 'fadeOut',
         autoplay: true
      });
   }

   /* ISOTOPE FOR PORTFOLIO ITEMS */

   if ( $( ".grid-layout" ).length ) {
      var $container = $('.grid-layout').imagesLoaded( function() {
         var isotope = function () {
            $container.isotope({
                    resizable: false,
                    itemSelector: '.entry' 
            });
         };
         isotope();
      });
      

      $('.grid-filter a').on("click", function(){
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                     duration: 750,
                     easing: 'linear',
                     queue: false
                  },
                  
                  
                  // slow transitions
                  transitionDuration: '0.8s',
                  hiddenStyle: {
                     opacity: 0
                   },
                   visibleStyle: {
                     opacity: 1
                   }
              });
        return false;
      });
   
      var $optionSets = $('.grid-filter'),
             $optionLinks = $optionSets.find('a');
             $optionLinks.on("click", function(){
                var $this = $(this);
                // don't proceed if already selected
                if ( $this.hasClass('selected') ) {
                    return false;
                }
         var $optionSet = $this.parents('.grid-filter');
         $optionSet.find('.selected').removeClass('selected');
         $this.addClass('selected'); 
      });
             
   }
   
   /* GALLERY OF IMAGES */
   if ( $( "#image-gallery" ).length ) {
      var $gallery = $('#image-gallery').imagesLoaded( function() {
         var isotope = function () {
            $gallery.isotope({
                     animationOptions: {
                     duration: 1000,
                     easing: 'swing'
                   },
                   itemSelector: '.item',
                   transitionDuration: '0.8s'
            });
         };
         isotope();
      });
   }

      
   $('.gallery-info').click(function() {
      var $inner = $(this).parent();
      var $item = $inner.parent();
      
      if ($inner.hasClass('expanded')) {
         $inner.removeClass('expanded')
         $item.removeClass('expanded')
       
      } else {
         $inner.addClass('expanded')
         $item.addClass('expanded')
      }
      
      $(this).toggleClass('expanded');
      $gallery.isotope('layout');
   });
   
   
      /* FUN FACTS COUNTERS */	

     if ( $( ".counter" ).length ) {
       $('.counter').counterUp({
           delay: 10,
           time: 3000
       });
     }
/* Google map visibility button */

   $('#hide-map').hide('slow');
   $('#display-map').show('slow');
   
   /* display map */
   $(document).on('click', "#display-map", function () {
        $(".intro-absolute").addClass('display-map')
        
        $('#hide-map').show();
        $('#display-map').hide();
        return false;
   });
   
   /* hide map */
   $(document).on('click', "#hide-map", function () {
        $(".intro-absolute").removeClass('display-map');
        $('#hide-map').hide();
        $('#display-map').show();
        return false;
   });
 
   /* CONTACT FORM VALIDATION SCRIPT */

   if ( $( "#contact" ).length ) {
     $('#contact').validate({
         
         errorElement: "em", 
         rules: {
             name: {
                 required: true
             },
             email: {
                 required: true,
                 email: true
             },
             message: {
                 required: true
             }
         },
         messages: {
             name: {
                 required: ""
             },
             email: {
                 required: ""
             },
             message: {
                 required: ""
             }
         },

           submitHandler: function(form) {
               $(form).ajaxSubmit({
                   type:"POST",
                   data: $(form).serialize(),
                   url:"include/process.php",
             
                   success: function() {
                      
                       $('#success').fadeIn('slow', function() {
                               setTimeout("$('#success').fadeOut('slow');", 2000);
                               $('#contact :input').val('');
                             
                       })
                   },
   
                   error: function() {
                       
                           $('#contact').fadeTo( "slow", 0.15, function() {
                           $('#error').fadeIn();
                       });
                   }
               });
           }
       });
   }
       
       
   /* GOOGLE MAP WITH single LOCATION MARKER */
   
   if ( $( "#map-alt" ).length ) {
      google.maps.event.addDomListener(window, 'load', init);
   }
   var map_alt;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(46.311604, -79.448484),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                     {
                       "featureType": "water",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "color": "#d3d3d3" }
                       ]
                     },{
                       "featureType": "transit",
                       "stylers": [
                         { "color": "#808080" },
                         { "visibility": "off" }
                       ]
                     },{
                       "featureType": "road.highway",
                       "elementType": "geometry.stroke",
                       "stylers": [
                         { "visibility": "on" },
                         { "color": "#b3b3b3" }
                       ]
                     },{
                       "featureType": "road.highway",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "color": "#ffffff" }
                       ]
                     },{
                       "featureType": "road.local",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "visibility": "on" },
                         { "color": "#ffffff" },
                         { "weight": 1.8 }
                       ]
                     },{
                       "featureType": "road.local",
                       "elementType": "geometry.stroke",
                       "stylers": [
                         { "color": "#d7d7d7" }
                       ]
                     },{
                       "featureType": "poi",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "visibility": "on" },
                         { "color": "#ebebeb" }
                       ]
                     },{
                       "featureType": "administrative",
                       "elementType": "geometry",
                       "stylers": [
                         { "color": "#a7a7a7" }
                       ]
                     },{
                       "featureType": "road.arterial",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "color": "#ffffff" }
                       ]
                     },{
                       "featureType": "road.arterial",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "color": "#ffffff" }
                       ]
                     },{
                       "featureType": "landscape",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "visibility": "on" },
                         { "color": "#efefef" }
                       ]
                     },{
                       "featureType": "road",
                       "elementType": "labels.text.fill",
                       "stylers": [
                         { "color": "#696969" }
                       ]
                     },{
                       "featureType": "administrative",
                       "elementType": "labels.text.fill",
                       "stylers": [
                         { "visibility": "on" },
                         { "color": "#737373" }
                       ]
                     },{
                       "featureType": "poi",
                       "elementType": "labels.icon",
                       "stylers": [
                         { "visibility": "off" }
                       ]
                     },{
                       "featureType": "poi",
                       "elementType": "labels",
                       "stylers": [
                         { "visibility": "off" }
                       ]
                     },{
                       "featureType": "road.arterial",
                       "elementType": "geometry.stroke",
                       "stylers": [
                         { "color": "#d6d6d6" }
                       ]
                     },{
                       "featureType": "road",
                       "elementType": "labels.icon",
                       "stylers": [
                         { "visibility": "off" }
                       ]
                     },{
                     },{
                       "featureType": "poi",
                       "elementType": "geometry.fill",
                       "stylers": [
                         { "color": "#dadada" }
                       ]
                     }
                   ],
        }
        var mapElement = document.getElementById('map-alt');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['North Bay', 'Rosefolio First Launch', '1 (705) 491 5656', 'email@rosefolio.com', 'undefined', 46.311604, -79.448484, 'https://mapbuildr.com/assets/img/markers/solid-pin-black.png']
        ];
         var description,
            telephone,
            email,
            web,
            markericon,
            marker,
            link;
        for (var i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
         if (web.substring(0, 7) != "http://") {
         link = "http://" + web;
         } else {
         link = web;
         }
            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
      function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
           var infoWindowVisible = (function () {
                   var currentlyVisible = false;
                   return function (visible) {
                       if (visible !== undefined) {
                           currentlyVisible = visible;
                       }
                       return currentlyVisible;
                    };
                }());
                var iw = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function() {
                    if (infoWindowVisible()) {
                        iw.close();
                        infoWindowVisible(false);
                    } else {
                        var html= "<div style='color:#000;background-color:#fff;padding:5px;width:220px;border-radius: 0'><h5 class='box-h4' style='font-size: 18px'>"+title+"</h5><p>"+desc+"</p><p>"+telephone+"</p><a class='color-text' href='mailto:"+email+"' >"+email+"</a><a class='color-text' href='"+link+"'' >"+web+"</a></div>";
                        iw = new google.maps.InfoWindow({content:html});
                        iw.open(map,marker);
                        infoWindowVisible(true);
                    }
             });
             google.maps.event.addListener(iw, 'closeclick', function () {
                 infoWindowVisible(false);
             });
      }
}



})(jQuery);