let clickCounter = 0;
let key = false;
document.getElementById("clickCounter").innerHTML=clickCounter;

document.onkeydown = function () {
    if (!key) {
        onTargetClick();
        document.getElementById("target").focus;
        key = true;
    }
}

document.onkeyup = function () {
    key = false;
}

function onTargetClick() {
    clickCounter++;
    document.getElementById("clickCounter").innerHTML=clickCounter;
}