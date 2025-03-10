let intervalId;
const btn1 = document.getElementById("tstart");
const btn2 = document.getElementById("tstop");
function timer (){
let hrs = parseInt(document.getElementById("hours").value) || 0;
let min = parseInt(document.getElementById("minutes").value) || 0;
let sec = parseInt(document.getElementById("seconds").value) || 0;
document.getElementById("tools").style.display="none";
document.getElementById("remainder").style.display="flex";
const hr = document.getElementById("heading3");
const mn = document.getElementById("heading2");
const se = document.getElementById("heading");
intervalId = setInterval(function (){
    if (hrs > 0 || min > 0 || sec > 0 ){
        if (sec > 0 && sec < 61){
            sec--;
        }
        else if (min > 0 && min < 61){
            min --;
            sec = 59;
        }
        else if (hrs > 0){
            hrs --;
            min = 59;
            sec = 59;
        }
    }
    else{
        clearInterval(intervalId);
        window.alert("Time's Up !!!");
        
    }
    audio2 = document.getElementById("audio1");
    if(hrs === 0 && min === 0 && sec === 3){
        audio2.setAttribute('src', 'audio.mp3');
        audio2.play();
    }
    hr.innerHTML = hrs < 10 ? "0" + hrs + ":" : hrs + ":";
    mn.innerHTML = min < 10 ? "0" + min + ":" : min + ":";
    se.innerHTML = sec < 10 ? "0" + sec : sec;
  },1000);
}
btn1.addEventListener("click", timer);
function stop_t(){
    clearInterval(intervalId);
}
