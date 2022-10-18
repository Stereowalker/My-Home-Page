function populatePre(contents, url) {
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        contents.textContent = this.responseText;
        hljs.highlightElement(contents)
    };
    console.log(url+contents.id+".json")
    xhr.open('GET', url+contents.id+".json");
    xhr.send(null);
}

var codes = document.getElementsByClassName("dynamic_file");
for (var i = 0; i < codes.length; i++) {
    populatePre(codes.item(i), 'https://stereowalker.github.io/My-Home-Page/update_files/');
}