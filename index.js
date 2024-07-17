const openStringNotes = ["Low E", "A", "D", "G", "B", "High E"]
const musicNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let start = new Date().getTime();
let end = new Date().getTime();

function startTimer(){
    start = new Date().getTime()
}
function endTimer(){
    end = new Date().getTime()
}

document.getElementById('play-button').addEventListener('click', function() {
    startTimer();
    let input_1 = document.getElementById('input-1');
    let input_2 = document.getElementById('input-2');
    let timer = document.getElementById('timer');
    
    input_1.innerText = openStringNotes[Math.floor(Math.random() * openStringNotes.length)]
    input_2.innerText = musicNotes[Math.floor(Math.random() * musicNotes.length)]
    
    timer.innerText = (start - end) / 1000
    endTimer()


});


// function pad(number) {
//     return number < 10 ? '0' + number : number;
// }

// function updateTimer() {
//     const now = new Date();
//     const hours = pad(now.getHours());
//     const minutes = pad(now.getMinutes());
//     const seconds = pad(now.getSeconds());

//     document.getElementById('hours').textContent = hours;
//     document.getElementById('minutes').textContent = minutes;
//     document.getElementById('seconds').textContent = seconds;
// }

// setInterval(updateTimer, 1000);
// updateTimer(); // Initial call to display the time immediately
