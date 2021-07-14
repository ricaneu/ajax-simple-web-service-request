window.onload = function() {
    load()
}

function next() {
    load()
}

function load() {
    const xhttp = new XMLHttpRequest();


    xhttp.onload = function() {
        let content = JSON.parse(this.responseText);
        document.getElementById("quote").innerHTML = content.quote
        document.getElementById("author").innerHTML = content.author
        document.getElementById("image").src = content.photo
    }
    xhttp.onerror = function() {
        alert("page not found, try again later")
    }
    xhttp.open("GET", "https://thatsthespir.it/api", true);
    xhttp.send();
}