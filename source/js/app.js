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
        loop: true,
        margin: 0,
        nav:false,
        responsive:{
            0:{
                items:4
            }
        },
    });

    
    // var rng = document.getElementById('r1');
    // owl2.owlCarousel();

    // rng.addEventListener('input', function(){
    //         rng.value = owl2.event.index
    // }, false);

    var owl2 = $('.second-owl');
    var rng = $('#r1');
    owl2.owlCarousel();

    rng.on('input', function() {
        owl2.trigger('to.owl.carousel', rng.val());
    })


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

