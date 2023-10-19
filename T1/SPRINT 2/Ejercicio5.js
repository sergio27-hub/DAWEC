const iframe = document.getElementById('myIframe');

iframe.addEventListener('load', function() {
    const iframeDocument = iframe.contentDocument;

    iframeDocument.addEventListener("click", function(event) {
        const clickedElement = event.target;

        const iframeXPath = getXPath(clickedElement);
        alert("XPath del elemento en el iframe:\n" + iframeXPath);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        const clickedElement = event.target;

        const mainXPath = getXPath(clickedElement);

        
        alert("XPath del elemento en la página principal:\n" + mainXPath);
    });
});


function getXPath(element) {
    if (!element) return '';

    const parts = [];
    while (element && element !== document.body) {
        let part = element.localName;
        if (element.id) {
            part += `[@id="${element.id}"]`;
        } else {
            const siblings = element.parentNode ? element.parentNode.children : [];
            if (siblings.length > 1) {
                let count = 0;
                for (let i = 0; i < siblings.length; i++) {
                    const sibling = siblings[i];
                    if (sibling.localName === element.localName) {
                        count++;
                    }
                    if (sibling === element) {
                        part += `[${count + 1}]`;
                        break;
                    }
                }
            }
        }
        parts.unshift(part);
        element = element.parentNode;
    }
    return parts.length ? '/' + parts.join('/') : null;
}
