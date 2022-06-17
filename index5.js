function stringAnimate(id) {
    let elem = document.getElementById(id);
    let textItem = elem.childNodes[0];
    let text = textItem.data;

    setInterval(function() {
        text = text[text.length -1] + text.substring(0, text.length -1);
        textItem.data = text;
    }, 200); 
}