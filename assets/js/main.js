// console.log("text");

// input-Age
let inputAge = document.getElementById("input-number");
// Deklariere die Funktion adult()

function adult() {
    inputAge = document.getElementById("input-number").value;
    console.log(inputAge);

    if (inputAge >= 18) {
        console.log('true');
        document.getElementById('status').innerHTML = 'volljährig';
    } else if (inputAge <= 18) {
        console.log('false');
        document.getElementById('status').innerHTML = 'minderjährig';
    }
};


// input-Weather-Quality
let inputQ = document.getElementById('input-number');

function weather() {
    inputQ = document.getElementById("input-qualitynumber").value;
    // console.log(inputQ);

    if (inputQ >= 8 && inputQ <= 10) {
        console.log('super');
        document.getElementById('qstatus').innerHTML = 'super';
    } else if (inputQ >= 6 && inputQ <= 7) {
        console.log('gut');
        document.getElementById('qstatus').innerHTML = 'gut';
    }
    else if (inputQ >= 3 && inputQ <= 5) {
        console.log('okay');
        document.getElementById('qstatus').innerHTML = "okay";
    } else if (inputQ >= 0 && inputQ <= 2) {
        console.log('miserabel');
        document.getElementById('qstatus').innerHTML = "miserabel";
    } else {
        console.log('invalid number');
        document.getElementById('qstatus').innerHTML = "invalid number, try again!"
    }
};


