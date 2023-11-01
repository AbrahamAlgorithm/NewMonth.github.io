document.getElementById('changeMessage').addEventListener('click', function() {
    var messages = [
        "Happy New Month!",
        "Wishing you a month full of success and joy!",
        "May this month bring you happiness and prosperity!",
        "New month, new opportunities!",
        "Wishing you a fantastic month ahead!",
    ];

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('h1').textContent = randomMessage;
});
