// get stored link array
chrome.storage.sync.get('linkArray', function(data){
    if (data.linkArray == null) {
        linkArray = [];
    } else {
        linkArray = data.linkArray;
    }
    displayLinkArray(linkArray);});

// add ul element to contain list
ul = document.createElement("ul");
document.getElementById("listContainer").appendChild(ul);

// display link array
function displayLinkArray(inputArray) {
    inputArray.forEach(function (link) {
        let li = document.createElement('li');
        li.setAttribute("id",link);
        ul.appendChild(li);
        li.innerHTML += link + " <button>remove</button>";
    });
}

// add button
var addButton = document.getElementById("add");
addButton.addEventListener("click", addLink);

function addLink() {
    var link = document.getElementById("textField").value;
    if (link.length === 0 || !link.trim()) {
        alert("that's empty bro");
    } else {
        linkArray.push(document.getElementById("textField").value);
        let li = document.createElement('li');
        li.setAttribute("id",link);
        ul.appendChild(li);
    
        li.innerHTML += link + " <button>remove</button>";
        document.getElementById("textField").value="";
    }
}

// manages deleting links of list
$("ul").on("click", "button", function(e) {
    e.preventDefault();
    var linkToDelete = $(this).closest("li").attr("id");
    var index = linkArray.indexOf(linkToDelete);
    if (index >= 0) {
        linkArray.splice(index, 1);
        $(this).parent().remove();
    }
});

// close button
var closeButton = document.getElementById("closeMenu");
closeButton.addEventListener("click", closeMenu);

function closeMenu() {
    chrome.storage.sync.set({'linkArray': linkArray}, function() {})
    window.location.replace("popup.html");
}