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
    resizeCodeBlocks(divs.item(i), false)
}
function resizeCodeBlocks(parent, resizedPadding) {
    var thisDiv = parent.children[0];
    for (var j = 0; j < thisDiv.children.length; j++) {
        var thatDiv = thisDiv.children[j];
        if (thatDiv.classList.contains('child_cb')) {
            var contentPadding = 0;
            if (!resizedPadding)
                contentPadding = Math.ceil(2*parseFloat(getStyle(thatDiv).padding.slice(0, -2)))
            else
                contentPadding = Math.ceil(parseFloat(getStyle(thatDiv).padding.slice(0, -2)))
            var contentH = parseInt(getStyle(thisDiv).height.slice(0, -2)) + (contentPadding*2)
            var maxH = parseInt(getStyle(parent).maxHeight.slice(0, -2))
            if (contentH > maxH)
                parent.style.height = maxH+"px"
            thisDiv.style.height = "calc(100% - "+contentPadding+"px)"
        }
    }
}

function getStyle(element) {
    if (typeof getComputedStyle !== "undefined") {
        return getComputedStyle(element);
    }
    return element.currentStyle; // Old IE
}