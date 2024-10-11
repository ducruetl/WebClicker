let clickCounter = 0;
let key = false;
var id = null;

document.getElementById("clickCounter").innerHTML=clickCounter;

document.onkeydown = function () {
    if (!key) {
        onTargetClick();
        key = true;
    }
}

document.onkeyup = function () {
    key = false;
}

function onTargetClick() {
    clickCounter++;
    document.getElementById("clickCounter").innerHTML=clickCounter;
    animation();
}

function animation() {
    var elem = document.getElementById("target");
    var size = 250;
    clearInterval(id);
    id = setInterval(frame, 1);
    
    function frame() {
        if (size == 200) {
            clearInterval(id);
            id = setInterval(frame2, 1);
        } else {
            size--;
            elem.style.height = size + 'px';
            elem.style.width = size + 'px';
        }
    }

    function frame2() {
        if (size == 250) {
            clearInterval(id);
        } else {
            size++;
            elem.style.height = size + 'px';
            elem.style.width = size + 'px';
        }
    }
}