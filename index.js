const openStringNotes = ["L-E", "A", "D", "G", "B", "H-E"]
const openStringNotesBass = ["L-E", "A", "D", "G"]
const musicNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let button = document.getElementById('play-button') 
let after_button = document.getElementById('after-button') 
// let selectTypeGuitar = document.getElementById('type-guitar')
// let selectedValue = selectTypeGuitar.value
let countdownTime = 4;
let counter = 0;
// let resets = 0;
button.addEventListener('click', function() {    
    startGame();
});
function startGame(){
    button.style.display = "none";
    after_button.style.display = "block";
    setInterval(updator, 1000)
    updator()
}
// function resetGame(){
//     countdownTime = 0
//     counter = 0
//     button.style.display = "block";
//     after_button.style.display = "none";
// }
function changeNotes(){
    // if(selectedValue == )
    let input_1 = document.getElementById('input-1');
    let input_2 = document.getElementById('input-2');
    
    input_1.innerText = openStringNotes[Math.floor(Math.random() * openStringNotes.length)]
    input_2.innerText = musicNotes[Math.floor(Math.random() * musicNotes.length)]
}
function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updator() {
    if (countdownTime > 0) {
        countdownTime--;
        const seconds = pad(countdownTime);
        document.getElementById('timer').innerText = seconds;
    }
    else{
        if(counter === 2){

            alert("Refresh to play again.")
        }else {
            changeNotes()
            counter++
            countdownTime = 4;
        }
    }
}




