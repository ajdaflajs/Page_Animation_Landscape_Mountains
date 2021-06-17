const heroImage = document.querySelector(".heroImage");
const slider = document.querySelector(".slider");
const logoText = document.querySelector("#logoText");
const mountain = document.querySelector(".mountain");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(heroImage, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});