window.onload = function () {
    var allPre, i, j;
    allPre = document.getElementsByTagName("code");
    for (i = 0, j = allPre.length; i < j; i++) {
        hljs.highlightElement(allPre[i]);
    }
};
//
var divs = document.getElementsByClassName("parent_cb");
for (var i = 0; i < divs.length; i++) {
    var parent = divs.item(i);
    var thisDiv = parent.children[0];
    for (var j = 0; j < thisDiv.children.length; j++) {
        var thatDiv = thisDiv.children[j];
        if (thatDiv.classList.contains('child_cb')) {
            var padding = Math.ceil(2*parseFloat(getStyle(thatDiv).padding.slice(0, -2)))
            var contentH = parseInt(getStyle(thisDiv).height.slice(0, -2)) + (padding*2)
            var maxH = parseInt(getStyle(parent).maxHeight.slice(0, -2))
            if (contentH > maxH)
                parent.style.height = maxH+"px"
            thisDiv.style.height = "calc(100% - "+padding+"px)"
        }
    }
}

function getStyle(element) {
    if (typeof getComputedStyle !== "undefined") {
        return getComputedStyle(element);
    }
    return element.currentStyle; // Old IE
}