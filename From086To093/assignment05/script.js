let elements = document.querySelectorAll('img');
elements.forEach(function(element) {
    return element.hasAttribute('alt')?element.alt='old':element.setAttribute('alt','ELzero new');
});