function populatePre(contents, url) {
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        contents.textContent = this.responseText;
        hljs.highlightElement(contents)
        resizeCodeBlocks(contents.parentElement.parentElement, true);
    };
    console.log(url+contents.id)
    xhr.open('GET', url+contents.id);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    //xhr.setRequestHeader("x-filename", photoId);
    xhr.send(null);
}

var codes = document.getElementsByClassName("dynamic_file");
for (var i = 0; i < codes.length; i++) {
    //Figure out cross domain transfers when you're using server software
    populatePre(codes.item(i), '../files_to_load/');
    //populatePre(codes.item(i), 'https://stereowalker.com/files_to_load/');
    //populatePre(codes.item(i), 'http://myhomepage/files_to_load/');
}
