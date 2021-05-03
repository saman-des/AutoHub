
function grayFunction() {
        document.getElementById("main-cover").style.filter = "grayscale(100%)";
}

function fontFunction(){
    document.getElementById("main-cover").style.fontSize = "large";
}
function invertFunction(){
    document.getElementById("main-cover").style.filter = "invert(1)";
}
function resetFunction(){
    document.getElementById("main-cover").style.filter = "none";
    document.getElementById("main-cover").style.fontSize = "initial"
}
function brightFunction(){
    document.getElementById("main-cover").style.filter = "brightness(120%)";
}
function dimFunction(){
    document.getElementById("main-cover").style.filter = "brightness(80%)";
}