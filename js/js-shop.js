function shop(){
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none", duration: 2});

	var container = $(".container").height();

	$("#container").css('height', ' ' + container + 'px ');
	$("#footer").css('height', ' ' + (container+height*.55) + 'px ');
	console.log(container);


	gsap.to(".navigation", {
		scrollTrigger: {
			trigger: ".container",
			start: "top bottom",
			end: "bottom center",
			markers: false,
			toggleClass: {
				targets: ".navigation",
				className: "lg-at-small",
			}
		},
	});

	$(".navigation .custom-fragment").hover(function() {
		if ($(".navigation").hasClass("lg-at-small")) {
			$(".navigation").addClass("hover-to-big")
		}
	}, function() {
		if ($(".navigation").hasClass("lg-at-small")) {
			$(".navigation").removeClass("hover-to-big")
		}
		$(".navigation").removeClass("hover-to-big")
	})
}

// function polygon() {
// 	const root = document.querySelector(':root');

// 	var w = $(window).innerWidth(),
// 		h = $(window).innerHeight(),
// 		sr = $(window).scrollTop(),
// 		b = 50;

// 	var	s3 = $(".section3").offset().top - sr,
// 		sh3 = s3 + $(".section3 .text").height() + b*2,
// 		s4 = $(".section4").offset().top - sr,
// 		sh4 = s4 + $(".section4").height();

// 	var tl1 = "0px ".concat(s3, "px"),
// 		tr1 = "".concat(w, "px ").concat(s3, "px"),
// 		br1 = "".concat(w, "px ").concat(sh3, "px"),
// 		bl1 = "0px ".concat(sh3, "px"),
// 		tl2 = "0px ".concat(s4, "px"),
// 		tr2 = "".concat(w, "px ").concat(s4, "px"),
// 		br2 = "".concat(w, "px ").concat(sh4, "px"),
// 		bl2 = "0px ".concat(sh4, "px");

// 	var p1 = "".concat(tl1, ", "),
// 		p2 = "".concat(bl2, ", "),
// 		p3 = "".concat(bl1, ", "),
// 		p4 = "".concat(br1, ", "),
// 		p5 = "".concat(tr2, ", "),
// 		p6 = "".concat(tl2, ", "),
// 		p7 = "".concat(bl2, ", "),
// 		p8 = "".concat(br2, ", "),
// 		p9 = "".concat(tr1);

// 	var polygon = "".concat(p1).concat(p2).concat(p3).concat(p4).concat(p5).concat(p6).concat(p7).concat(p8).concat(p9);
// 	document.documentElement.style.setProperty("--polygon", "polygon(".concat(polygon, ")"))

// 	// console.log($(".section2").offset().top - sr);
// } 


window.addEventListener('load', function() {
	shop();
	// polygon();
	window.addEventListener('scroll', function(){
		// polygon();
	});
	window.addEventListener('resize', function() {
		shop();
		// polygon()
	});
})