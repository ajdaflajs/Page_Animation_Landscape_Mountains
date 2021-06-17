const heroImage = document.querySelector(".heroImage");
const slider = document.querySelector(".slider");
const logoText = document.querySelector("#logoText");
const mountain = document.querySelector(".mountain");
const headline = document.querySelector(".headline");

const wrapper = document.querySelector(".wrapper");


/* Timeline animation (tl = timeline) */

const tl = new TimelineMax();

tl.fromTo(heroImage, 0.9, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})

.fromTo(heroImage, 1, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})

.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")

.fromTo(logoText, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5")

.fromTo(mountain, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5")

.fromTo(wrapper, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5");

/* if we want more than one animations on the picture, we should not close the tl.fromTo with (;) but add more .fromTo elements in between */

/* "-=seconds" means that the animation will start sooner, the same amount of seconds as specified */