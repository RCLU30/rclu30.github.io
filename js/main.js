$(document).ready(function() {
	// superslides
	$('#slides').superslides({
		animation: "fade",
		play: 2500,
		pagination: false
	});

	// typed texted
	let typed = new Typed('.typed', {
		strings: ["web developer.", "engineer.", "maker."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	// typed text

	// skills carousel
	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        968:{
            items:4
        }
    }
	});
	// skills carousel

	// animation does not start until scrolling down
  var skillTopOffset = $('.skillsSection').offset().top;
  var statTopOffset = $('.statsSection').offset().top;
  var countUpFinish = false;
  $(window).scroll(function() {
	// skills section
	  if(window.pageYOffset > skillTopOffset - $(window).height()+200) {
		  $('.chart').easyPieChart({
		  	easing: 'easeInOut',
		  	barColor: '#fff',
		  	trackColor: false,
		  	scaleColor: false,
		  	lineWidth: 4,
		  	size: 152,
		  	onStep: function(from, to, percent) {
		  		$(this.el).find('.percent').text(Math.round(percent));
		  	}
		  });
	  }
	  if(!countUpFinish && window.pageYOffset > statTopOffset - $(window).height()+200) {
		   $(".counter").each(function() {
		  	var elem = $(this);
		  	var endVal = parseInt(elem.text());
		  	elem.countup(endVal);
		  });
		   countUpFinish = true;
	  }
  });

	// smooth navigation on click
	$("#navigation li a").click(function(e) {
		console.log('preventing default');
		e.preventDefault();
		let targetElem = $(this).attr("href");
		let targetPos = $(targetElem).offset().top;
		$("html, body").animate({ scrollTop: targetPos - 50 }, 500);
	});
	// end smooth navigation

	// sticky navigation
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
  	const body = $("body");
  	if ($(window).scrollTop() >= navTop) {
  		body.addClass("fixedNav");
  		body.css('padding-top', nav.outerHeight() + 'px');	
  	}
  	else {
  		body.removeClass("fixedNav");
  		body.css('padding-top', 0);
  	}
  }
	// sticky navigation

 // fancy box for projects image previewer
 $("[data-fancybox]").fancybox();
 // fancy box for projects image previewer

	var iitems = $(".items");
	console.log(iitems);
	iitems.isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

  
});

