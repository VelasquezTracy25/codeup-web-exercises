"use strict";

(function () {
    "use strict";


    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b',
        13: 'enter'

    };

    let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
    let konamiCodePosition = 0;

    $(document).keydown(function (e) {
        let key = allowedKeys[e.keyCode];
        let requiredKey = konamiCode[konamiCodePosition];

        if (key == requiredKey) {
            konamiCodePosition++;
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function activateCheats() {
        document.body.style.backgroundImage = "url('img/konami/sun.gif')";

        let audio = new Audio('sound/8bit_keyboard_cat.mp4');
        audio.play();

        $('#cheat-content').append("<span class='blinking'>Cheat Activated: Nocturnal Mode</span>");

        $("#cat-gif").remove();

        $('.cat-night').append("<div id='cat-night'></div>");
    }
})();