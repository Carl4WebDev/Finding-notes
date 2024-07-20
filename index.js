let form = document.forms['my-form']  
const openStringNotes = ["L-E", "A", "D", "G", "B", "H-E"]
const openStringNotesBass = ["L-E", "A", "D", "G"]
const musicNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const cheerUpPhrases = [
    "Good job!",
    "Well done!",
    "Keep it up!",
    "Great effort!",
    "Nice work!",
    "You're doing amazing!",
    "Fantastic!",
    "Awesome!",
    "Keep going!",
    "Excellent!",
    "You're a star!",
    "Brilliant!",
    "Way to go!",
    "You rock!",
    "Impressive!",
    "Outstanding!",
    "Superb!",
    "You're crushing it!",
    "Marvelous!",
    "Terrific!"
];
const cheerUpEmojis = [
    "👍", "🎉", "💪", "👏", "🌟",
    "😃", "🎊", "🌈", "🚀", "🏆",
    "⭐", "💡", "🙌", "🤘", "🤩",
    "🥇", "👌", "💥", "🎈", "💫"
];

let input_1 = document.getElementById('input-1');
let input_2 = document.getElementById('input-2');


let button = document.getElementById('play-button') 
let reset_button = document.getElementById('reset-button') 
let after_button = document.getElementById('after-button') 
let selection_options = document.getElementById("selection-options")
let submit = document.getElementById("submit")

let label = document.getElementById("label")
let mode = document.getElementById("mode")



let countdownTime = 4;
let counter = 0;
let repeat = 5
let intervalId;

button.disabled = true;
input_1.style.opacity = 0.5;
input_2.style.opacity = 0.5;
form.onsubmit = function(e) {
    e.preventDefault();
    let optionVal = this.typeGuitar.value;
    submit.disabled = true;
    selection_options.style.display = "none";
    submit.style.display = "none"
    
    label.style.display = "flex"
    label.innerText = "Refresh page to change mode"
    mode.style.display = "flex"
    mode.innerText= "Mode: " + optionVal
    
    button.disabled = false;
    input_1.style.opacity = 1;
    input_2.style.opacity = 1;

    button.addEventListener('click', function() {    
        startGame();
    });
    
    reset_button.addEventListener('click', function() {    
        resetGame();
    });
    function startGame(){
        changeNotes()
        button.style.display = "none";
        reset_button.style.display = "none";
        after_button.style.display = "block";
        updator()
        intervalId = setInterval(() =>{
            updator()
        }, 1000)
    }
    function resetGame() {
        clearInterval(intervalId);
        countdownTime = 4;
        counter = 0;
        repeat = 5;
        document.getElementById('repeat').innerText = repeat + "x"
        startGame();
    }
    
    function changeNotes(){  
        if(optionVal == "six-string-guitar"){
            input_1.style.color = "blue"
            setTimeout(() => {
                input_1.style.color = "black";
            }, 500)
            input_2.style.color = "blue"
            setTimeout(() => {
                input_2.style.color = "black";
            }, 500)
            input_1.innerText = openStringNotes[Math.floor(Math.random() * openStringNotes.length)]
            input_2.innerText = musicNotes[Math.floor(Math.random() * musicNotes.length)]

        }
        else if(optionVal == "four-string-bass"){
            input_1.style.color = "blue"
            setTimeout(() => {
                input_1.style.color = "black";
            }, 500)
            input_2.style.color = "blue"
            setTimeout(() => {
                input_2.style.color = "black";
            }, 500)
            input_1.innerText = openStringNotesBass[Math.floor(Math.random() * openStringNotesBass.length)]
            input_2.innerText = musicNotes[Math.floor(Math.random() * musicNotes.length)]
        }
        else{
            input_1.style.color = "blue"
            setTimeout(() => {
                input_1.style.color = "black";
            }, 500)
            input_2.style.color = "blue"
            setTimeout(() => {
                input_2.style.color = "black";
            }, 500)
            input_1.innerText = openStringNotes[Math.floor(Math.random() * openStringNotes.length)]
            input_2.innerText = musicNotes[Math.floor(Math.random() * musicNotes.length)]
        }
                
    }
    function pad(number) {
        return number < 10 ? '0' + number+ 's' : number + 's';
    }
            
    function updator() {
    
        if (countdownTime > 0) {
            countdownTime--;
            const seconds = pad(countdownTime);
            document.getElementById('timer').innerText = seconds;
        }
        else{
            changeNotes()
            counter++
            countdownTime = 4;
            repeat--
            document.getElementById('repeat').style.color = "blue"
            document.getElementById('repeat').innerText = repeat + "x"
            setTimeout(() => {
                document.getElementById('repeat').style.color = "black";
            }, 500)
            
            if(counter >= 5){
                clearInterval(intervalId)
                input_1.innerText = cheerUpEmojis[Math.floor(Math.random() * cheerUpEmojis.length)]
                input_2.innerText = cheerUpPhrases[Math.floor(Math.random() * cheerUpPhrases.length)]
                reset_button.style.display = "block";
                after_button.style.display = "none"
            }
        }
    }

}    
