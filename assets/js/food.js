
let slider = document.getElementById("myRange");
let sliderText = document.getElementById("slider-text");

// slider.oninput = function() {
//   sliderText.innerHTML = "Text " + this.value;
// }
if (slider) {


slider.oninput = function() {

// if (flag == 'left') {
if(this.value == 1) {
    sliderText.innerHTML = "";
}
else if(this.value == 2) {
    sliderText.innerHTML = "";
}
else if(this.value == 3) {
    sliderText.innerHTML = "";
}

else if(this.value == 4) {
    sliderText.innerHTML = "This is healthy for me.";
}
else if(this.value == 5) {
    sliderText.innerHTML = "";
}
else if(this.value == 6) {
    sliderText.innerHTML = "";
}

else if(this.value == 7) {
    sliderText.innerHTML = "";
}
else if(this.value == 8) {
    sliderText.innerHTML = "";
}
else if(this.value == 9) {
    sliderText.innerHTML = "";
}
// }

// else {
if(this.value == 1) {
    sliderText.innerHTML = "Thanks! I'm fine. How about you? Did you try the food? Was it good? Did you see (whatever) on TV last night? How is your (BFF/aunt/dog) these days?";
}
else if(this.value == 2) {
    sliderText.innerHTML = "I'm working on listening to my body's hunger signals. I really trust my doctor about health stuff, and that was their advice.";
}
else if(this.value == 3) {
    sliderText.innerHTML = "I don't need to, I want to. Your comment makes me feel weird, even though I know you really care about me.";
}

else if(this.value == 4) {
    sliderText.innerHTML = "This is healthy for me.";
}
else if(this.value == 5) {
    sliderText.innerHTML = "I’m happy with what’s on my plate right now — all the food looks great! We might have different values around what a healthy body looks like.";
}
else if(this.value == 6) {
    sliderText.innerHTML = "I’m working on making peace with my body and food because dieting has caused me some trauma. Would we be able to not talk about dieting while I’m here? ";
}

else if(this.value == 7) {
    sliderText.innerHTML = "Your focus on my body makes me uncomfortable.";
}
else if(this.value == 8) {
    sliderText.innerHTML = "I think we should stop making comments like that. They're really minor, but I've seen them add up for friends and they can be really painful.";
}
else if(this.value == 9) {
    sliderText.innerHTML = "Wow. You were really comfortable saying that out loud.";
}
}
}