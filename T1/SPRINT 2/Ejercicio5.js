document.addEventListener("click", function (event) {
    var clickedElement = event.target;
    var xpath = getXPath(clickedElement);
    alert("XPath del elemento clickeado:\n\n" + xpath);
});

function getXPath(element) {
    var path = '';
    while (element && element.nodeType === Node.ELEMENT_NODE) {
        var selector = element.tagName.toLowerCase();
        if (element.id) {
            selector += '#' + element.id;
            path = '/' + selector + path;
            break; // No es necesario seguir subiendo
        } else {
            var siblings = Array.from(element.parentNode.children);
            var sameTagSiblings = siblings.filter(function (e) {
                return e.tagName === element.tagName;
            });
            if (sameTagSiblings.length > 1) {
                var index = sameTagSiblings.indexOf(element) + 1;
                selector += ':nth-child(' + index + ')';
            }
        }
        path = '/' + selector + path;
        element = element.parentNode;
    }
    return path;
}