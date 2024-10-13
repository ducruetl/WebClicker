let clickCounter = 0;
let key = false;
var id = null;
var speaker = true;
var hitSound = new Audio("audio/hit.mp3");

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
    hitSound.pause();
    hitSound.currentTime = 0;
    hitSound.play();
    animation();
}

function settings() {
    document.getElementById("settings-menu").style.display = "flex";
}

function selectTarget(event) {
    document.getElementById("target").src = event.currentTarget.src;
    document.getElementById("settings-menu").style.display = "none";
}

function sound() {
    if (speaker) {
        speaker = false;
        document.getElementById("sound").src = "images/speaker_off.png";
        hitSound.volume = 0.0;
    } else {
        speaker = true;
        document.getElementById("sound").src = "images/speaker_on.png";
        hitSound.volume = 1.0;
    }
}

function animation() {
    var elem = document.getElementById("target");
    var size = 250;
    clearInterval(id);
    id = setInterval(frame, 1);
    
    function frame() {
        if (size == 240) {
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