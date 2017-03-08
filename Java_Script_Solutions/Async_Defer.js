console.log('starting async & defer');
alert('first');
alert('second');
alert('thrid');
// defer alerts
console.log('starting defer');
alert('defer one');
function addScript(src) {
    console.log('starting function add script');
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // be careful at this line.
    document.head.appendChild('script');
    console.log('add script is ended.')
}
addScript("Simple.js");