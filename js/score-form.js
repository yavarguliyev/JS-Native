"use strict";

// Show Score Inputs Starts

modalScoreClickButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    colScore.append(formScore);

    document.getElementById('core-form').addEventListener('submit', function (ev) {
        ev.preventDefault();
    });
});

modalScoreRemoveButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    colScore.removeChild(formScore);
});

// Show Score Inputs Ends