console.log("main.js loaded");


function init() {

	var navStatus = 0;

	// HEAD ROOM

	var header = document.querySelector("header");
	
	var headroom  = new Headroom(header);

	headroom.init(); 

	// RESPONSIVE MENU

	$("#nav-icon").click(function() {
		$("nav ul").toggleClass("swing");
		$(this).toggleClass("open");
	});

	$("nav ul li a").click(function() {
		$("nav ul li a").removeClass("active");
		$(this).toggleClass("active");
	});

	// FLICKER PLATE

	$(".hero").flicker({
		arrows: true,
		auto_flick_delay: 15,
		auto_flick: true,
		theme: 'light'
	});

	// SCROLL IT

	$.scrollIt();

	// LIGHT GALLERY

	$(".herd").lightGallery({
        mode:"fade",
        caption: true,
        desc: true,
        rel: true
    });

	$(".sale1").lightGallery({
        mode:"fade",
        caption: true,
        desc: true,
        rel: true
    });

	$(".sale2").lightGallery({
		mode:"fade",
		caption: true,
		desc: true,
		rel: true
	});

	$(".sale3").lightGallery({
	    mode:"fade",
	    caption: true,
	    desc: true,
	    rel: true
	});

    $(".nannies").lightGallery({
        mode:"fade",
        caption: true,
        desc: true,
        rel: true
    });

    $(".sire").lightGallery({
        mode:"fade",
        caption: true,
        desc: true,
        rel: true
    });

    // MIX IT UP

    $(".gallery-wrap").mixItUp({
    	layout: {
    		display: 'list-item'
    	}
    });

};

$(document).ready(init);