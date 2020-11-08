document.addEventListener("DOMContentLoaded", function() {
    displayClock();
});

function displayClock() {
    //Gets date and time information
    var dt = new Date(); // This is variable
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var AmorPm = hours >=12 ? 'pm' : 'am';

    if (hours >= 19 || hours <= 4) {
        document.body.className = "night";
    }
    else {
        document.body.className = "day";
    }

    hours = (hours % 12) || 12;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var finalTime = `${hours}:${minutes} ${AmorPm}`;


    document.getElementById("clock").innerHTML = String(finalTime);
    setTimeout(displayClock(), 500);
};

var linkArray = ["https://www.google.com/", "https://www.google.com/"];

var startButton = document.getElementById("start");
startButton.addEventListener("click", openTabs);

function openTabs() {
    for (var i = 0; i < linkArray.length; i++) {
        chrome.tabs.create({
            url: linkArray[i]
        });
    }
};

var editButton = document.getElementById("edit");
editButton.addEventListener("click", displayMenu);

function displayMenu() {
    window.location.replace("menu.html");
}

var closeButton = document.getElementById("close");
closeButton.addEventListener("click", closePopup);

function closePopup() {
    window.close();
}