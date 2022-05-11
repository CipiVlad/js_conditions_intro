// console.log("text");

// input-number
inputAge = document.getElementById("input-number");
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

