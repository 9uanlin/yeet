//var linkArray = chrome.storage.sync.get(["linkArray"], function(result) {
//    console.log(result.key);
//})

var linkArray = ["banana", "banana"];

ul = document.createElement("ul");
document.getElementById("listContainer").appendChild(ul);

displayLinkArray();

function displayLinkArray() {
    linkArray.forEach(function (link) {
        let li = document.createElement('li');
        ul.appendChild(li);
    
        li.innerHTML += link;
    });
}




var closeButton = document.getElementById("close");
closeButton.addEventListener("click", closeMenu);

function closeMenu() {
    chrome.storage.sync.set({"linkArray": linkArray}, function() {
        message("Settings saved");
    })
    window.location.replace("popup.html");
}