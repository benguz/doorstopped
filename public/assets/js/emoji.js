
$(".emoji-element").click(function() {
    var newElement ="";
    var tears = ["🤨", "🙄", "😳😳😳", "💅💅", "❤️", "💗", "💖💖💖", "💚", "🧡", "💛", "🤍", "💙"]
    // 😤😠
    // 🤬
    // 😈
    // 👿 
    // if (emoji === "😡") {
    //     var rages = ["🤬", "👺", "😈😈", "F*******CK", "#@$&^#", "LOSER", "😡", "L+RATIO", "YOU'RE TRASH"]
    //     var rage = rages[Math.floor(Math.random() * rages.length)];
    //     newElement = $(`<span class='floating-emoji'>${rage}</span>`);
    
    //   } else if (emoji === "🤦") {
    //     var tears = ["mid", "😐", "🤢🤢", "wtf😕", "🤨", "uhhh gross 🤮", "🤦", "ick", "mmmm no..."]
    //     var tear = tears[Math.floor(Math.random() * tears.length)];
    //     newElement = $(`<span class='floating-emoji'>${tear}</span>`);
    //   } else if (emoji === "🙄") {
    //     var tears = ["😳😳😳", "👎", "🙄", "😒", "😤😤", "drama", "💅💅", "nah girl", "spill the ☕"]
    //     var tear = tears[Math.floor(Math.random() * tears.length)];
    //     newElement = $(`<span class='floating-emoji'>${tear}</span>`);
    
    //   } else if (emoji === "❤️") {
    //     var tears = ["LOVE THIS", "❤️", "💗", "💖💖💖", "ILYYY", "💚", "🧡", "💛", "🤍", "💙"]
    //     var tear = tears[Math.floor(Math.random() * tears.length)];
    //     newElement = $(`<span class='floating-emoji'>${tear}</span>`);
    
    //   } else if (emoji === "😢") {
    //     var tears = ["😭", "😓", "😞", "😨", "😰", "😭😭😭", "noooo", "all the feels"]
    //     var tear = tears[Math.floor(Math.random() * tears.length)];
    //     newElement = $(`<span class='floating-emoji'>${tear}</span>`);
    
    //   } else {
    //     newElement = $(`<span class='floating-emoji'>${emoji}</span>`);
    //   }
    var tear = tears[Math.floor(Math.random() * tears.length)]
    newElement = $(`<span class='floating-emoji'>${tear}</span>`);
  
    $(this).parent().append(newElement);
  
    /* Choose an animation randomly */
    var animations = ['floatPath2', 'floatPath3', 'floatPath4']; // Add more animations as needed
  
    var animation = animations[Math.floor(Math.random() * animations.length)];
  
  
    /* Apply the animation */
    newElement.css('animation', `${animation} 1s forwards`);
  
    setTimeout(function() {
      newElement.remove();
    }, 2000); // Remove the emoji after the animation completes (2 seconds)
  });
  
  

  
  
  