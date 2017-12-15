$( document ).ready(function() {

    $('.first-owl').owlCarousel({
        loop:false,
        margin: 0,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        },
        onChanged: function(event) {
          $('.current').html(event.item.index + 1);
          $('.total').html(' 0' + event.item.count);
        },
    });
    
    $('.second-owl').owlCarousel({
        loop: false,
        margin: 0,
        nav:false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        },
    });

    var owl2 = $('.second-owl');
    var rng = $('#r1');
    owl2.owlCarousel();

    rng.on('input', function() {
        owl2.trigger('to.owl.carousel', rng.val());
    })

    
    var allItems = $('.second-carousel-item');
    var visItem = $('.section-blog-posts .owl-item.active');
    var itemL = (allItems.length / visItem.length) - 1;
    rng.prop('max', itemL);

    owl2.on('resized.owl.carousel', function(){
        var visItem = $('.section-blog-posts .owl-item.active');
        var itemL = (allItems.length / visItem.length) - 1;
        rng.prop('max', itemL);
       console.log(itemL)
    });
    

    var owl=$(".first-owl");
	owl.owlCarousel();

	$(".next").click(function(){
		owl.trigger("next.owl.carousel");
    });
    
	$(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});
    

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });


});

