var el = document.querySelector("#text");
var text = "{ { $dev -> Kelvin Henrique Ferreira } }"
var interval = 70;
function showtext(el, text, interval) {
var char = text.split("").reverse();

var typer = setInterval(function() {

    if (!char.length) {
        return clearInterval(typer)
    }

    var next = char.pop();
    el.innerHTML += next;
    
}, interval);

}
showtext(el, text, interval);