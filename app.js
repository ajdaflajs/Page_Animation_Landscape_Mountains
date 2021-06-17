const heroImage = document.querySelector(".heroImage");
const slider = document.querySelector(".slider");
const logoText = document.querySelector("#logoText");
const mountain = document.querySelector(".mountain");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

/* Timeline animation */

tl.fromTo(heroImage, 0.9, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})

.fromTo(heroImage, 1.2, {width: "100%"},{width: "80%", ease: Power2.easeInOut});

.fromTo()

/* if we want more than one animations on the picture, we should not close the tl.fromTo with (;) but add more .fromTo elements */