function populatePre(contents, url) {
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        contents.textContent = this.responseText;
        hljs.highlightElement(contents)
        resizeCodeBlocks(contents.parentElement.parentElement, true);
    };
    console.log(url+contents.id)
    xhr.open('GET', url+contents.id);
    xhr.send(null);
}

var codes = document.getElementsByClassName("dynamic_file");
for (var i = 0; i < codes.length; i++) {
    populatePre(codes.item(i), 'https://stereowalker.github.io/My-Home-Page/files_to_load/');
    //populatePre(codes.item(i), 'http://myhomepage/files_to_load/');
}