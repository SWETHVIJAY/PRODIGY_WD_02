let timerdisplay = document.querySelector('.timerdisplay');
let startbutn = document.getElementById('startbutn');
let resetbutn = document.getElementById('resetbutn');
let stopbutn = document.getElementById('stopbutn');

let hour = 00;
let mins = 00;
let sec = 00;

let timerId = null;



stopbutn.addEventListener('click', function(){
    clearInterval(timerId);
});

startbutn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

resetbutn.addEventListener('click', function(){
    clearInterval(timerId);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    hour = mins = sec = 00;
});

function startTimer(){
    hour++;
    if(hour == 100){
        hour = 0;
        mins++;
        if(mins == 60){
            mins = 0;
sec++;
        }
    }

    let hourString = hour < 10 ? `0${hour}` : hour;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let secString = sec < 10 ? `0${sec}` : sec;
    

    timerdisplay.innerHTML = `${secString} : ${minsString} : ${hourString}`;

}