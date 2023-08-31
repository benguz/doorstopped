function animatePoop(newElement) {
    /* Choose an animation randomly */
var animations = ['floatPath2', 'floatPath3', 'floatPath4']; // Add more animations as needed

var animation = animations[Math.floor(Math.random() * animations.length)];


/* Apply the animation */
newElement.css('animation', `${animation} 1s forwards`);

setTimeout(function() {
newElement.remove();
}, 2000); // Remove the emoji after the animation completes (2 seconds)
}

$("#tampon-element").click(function() {
var newElement ="";
var tears = ["TAMPONS", "TAMPONS!!", "tampons", "Tampons 💅💅", "TAMPONS 💗", "💖 tampons"]
var tear = tears[Math.floor(Math.random() * tears.length)]
newElement = $(`<span class='floating-emoji'>${tear}</span>`);
$(this).parent().append(newElement);
animatePoop(newElement);

});

$(".poop-element").click(function() {
var newElement ="";
var tears = ["GUYS I POOPED", "febreze time", "everybody poops 💖", "successful poo 💅💅", "wipe it down WIPE", "time 2 poo 🏃💨",  "🧻🧻🧻"]
var tear = tears[Math.floor(Math.random() * tears.length)]
newElement = $(`<span class='floating-emoji'>${tear}</span>`);
$(this).parent().append(newElement);
animatePoop(newElement);

});

let last;
let lastArray = ["dividers", "hygiene", "gross", "vandal", "vaping", "time", "nuclear"];
let closeit = "";
let div = ""
function actPoop(section) {

if (last) {
closeit = document.getElementById(last + "-label");
document.getElementById(last).style.display = "none";
}
if (closeit) {
closeit.style.backgroundColor = 'white';
}

div = document.getElementById(section + "-label");
document.getElementById(section).style.display ="block";
if (section === "gross" || section === "vandal") {
  document.getElementById("5-steps").style.display ="block";
} else {
  document.getElementById("5-steps").style.display ="none";
}
last = section;

 div.style.backgroundColor = 'hsl(234, 44%, 88%)';

} 