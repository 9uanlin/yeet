// clock
document.addEventListener("DOMContentLoaded", function() {
    displayClock();
});

function displayClock() {
    var dt = new Date();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var AmorPm = hours >=12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var finalTime = hours + ":" + minutes + " " +AmorPm;
    
    document.getElementById("clock").innerHTML = finalTime;
    setTimeout(displayClock(), 500);
};

// get stored link array
chrome.storage.sync.get('linkArray', function(data){
    linkArray = data.linkArray;});

// start button
var startButton = document.getElementById("start");
startButton.addEventListener("click", openTabs);

function openTabs() {
    if (linkArray == null || linkArray.length == 0) {
        alert("you have no saved websites!")
    } else {
        for (var i = 0; i < linkArray.length; i++) {
            chrome.tabs.create({
                url: linkArray[i]
            });
        }
    }
};

// edit button
var editButton = document.getElementById("edit");
editButton.addEventListener("click", displayMenu);

function displayMenu() {
    window.location.replace("menu.html");
}

// close button
var closeButton = document.getElementById("close");
closeButton.addEventListener("click", closePopup);

function closePopup() {
    window.close();
}