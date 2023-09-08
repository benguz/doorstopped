
$(document).ready(function() {
    var animations = ['floatPath2', 'floatPath3', 'floatPath4']; // Add more animations as needed
    $('*').each(function() {
        if ($(this).height() < $(this)[0].scrollHeight) {
            $(this).scroll(function() {    

            if (Math.random() < 0.22) {

            /* Apply the animation */
            Array.from(document.querySelectorAll('.emoji-element')).forEach((element) =>
            {
                var animation = animations[Math.floor(Math.random() * animations.length)];
                let newElement = $(`<span class='floating-emoji'>💤</span>`);

                /* Apply the animation */
                newElement.css('animation', `${animation} 1s forwards`);
                
                $(element).parent().append(newElement);
                setTimeout(function() {
                newElement.remove();
                }, 2000);
            });
        }

            });
};
});
});
