const lenis = new Lenis({
	duration: 1.5,
	easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
	direction: "vertical",
	gestureDirection: "vertical",
	smooth: true,
	smoothTouch: false,
	touchMultiplier: 2,
	// infinite: true,
});

window.lenis = lenis;
//get scroll value
// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
// 	console.log({ scroll, limit, velocity, direction, progress })
// })


function raf(time){
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



