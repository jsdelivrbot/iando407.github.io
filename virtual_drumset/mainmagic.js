function makeCrash() {
    var crash = new Audio("crash.mp3"); 
    crash.play();
}

function makeHihat() {
    var hihat = new Audio("hihat.mp3");
    hihat.play();
}

function makeKick() {
    var kick = new Audio("kick.mp3");
    kick.play();
}

function makeride() {
    var ride = new Audio("ride.mp3");
    ride.play();
}

function makesnare() {
    var snare = new Audio("snare.mp3");
    snare.play();
}

function maketom1() {
    var tom1 = new Audio("tom1.mp3");
    tom1.play();
}

function maketom2() {
    var tom2 = new Audio("tom2.mp3");
    tom2.play();
}

$("#crash").on("click", makeCrash); 
$("#hihat").on("click", makeHihat);
$("#kick").on("click", makeKick);
$("#ride").on("click", makeride);
$("#snare").on("click", makesnare);
$("#tom1").on("click", maketom1);
$("#tom2").on("click", maketom2)

$(document).keypress(delegateKeypress);

    function delegateKeypress(event) {
        console.log(event.keyCode)
        if (event.keyCode ==101) {
            $("#crash").trigger("click");
        }
    
        if (event.keyCode ==116) {
            $("#hihat").trigger("click");
        }
        
        if (event.keyCode ==97) {
            $("#snare").trigger("click");
        }
        
        if (event.keyCode ==32) {
            $("#kick").trigger("click");
        }
        
        if (event.keyCode ==105) {
            $("#ride").trigger("click");
        }
        
        if (event.keyCode ==121) {
            $("#tom1").trigger("click");
        }
        
        if (event.keyCode ==117) {
            $("#tom2").trigger("click");
    }
}