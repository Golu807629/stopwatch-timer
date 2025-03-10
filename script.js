let intervalId;
const btn1 = document.getElementById("startbtn");
const btn2 = document.getElementById("stopbtn");
const a = document.getElementById("heading");
const b = document.getElementById("heading2");
const c = document.getElementById("heading3");
const d = document.getElementById("heading-milli");
function stopwatchh(){
    let milli = 0;
    let sec = 0;
    let min = 0;
    let hrs = 0;
    var result = " ";
    var audio1 = document.getElementById("audio2");
    audio1.loop = true;
    audio1.setAttribute('src', 'stopwatch.mp3');
    audio1.play();
    function stopwatch (){
        milli ++;
        if(milli == 100){
            sec++;
            milli = 0;
        }
        if (sec==60){
            sec = 0;
            min++;
        if (min == 60){
            min = 0;
            hrs++;
        if (hrs == 60){
            hrs = 0;
            min = 0;
            sec = 0;
                }
            }
        }
        if (milli.toString().length == 1){
            d.innerHTML = "00"+milli;
        }
        else if(milli.toString().length ==2){
            d.innerHTML = "0"+milli;
        }
        else{
                d.innerHTML = milli;
        }
        if (sec.toString().length == 1){
            a.innerHTML = "0"+sec+":";
        }
        else{
            a.innerHTML = sec+":";
        }
        if (min.toString().length == 1){
            b.innerHTML = "0"+min+":";
        }
        else{
            b.innerHTML = min+":";
        }
        if (hrs.toString().length == 1){
            c.innerHTML = "0"+hrs+":";
        }
        else{
            c.innerHTML = hrs+":";
        }
        c.innerHTML = hrs+ ":";
    }
    intervalId = setInterval(stopwatch, 10);
   
}
btn1.addEventListener("click", stopwatchh);
function stop_watch(){
   clearInterval(intervalId);
   audio2.pause();
}
