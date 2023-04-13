var milis= 0;
var second = 0;
var minus = 0;
var INTERVAL;

function start(){
    INTERVAL = setInterval(timer,10);
}
function timer(){
    milis++;
    if(milis < 10){
        milis = "0" + milis;
    }
    document.getElementById("milis").innerHTML = milis;
    if(milis == 60){
        milis = 00;
        second++;
        if(second < 10){
            second = "0" + second;
        }
        document.getElementById("second").innerHTML = second;
        if(second == 60){
            second = 00;
            minus++;
            if(minus < 10){
                minus = "0" + minus;
            }
            document.getElementById("minus").innerHTML = minus;
        }
    }   
}
function stop(){
    clearInterval(INTERVAL);
    alert("Stop here!");
}
function reset(){
    clearInterval(INTERVAL);
    milis = "00";
    second = "00";
    minus = "00";
    document.getElementById("milis").innerHTML = milis;
    document.getElementById("second").innerHTML = second;
    document.getElementById("minus").innerHTML = minus;
    alert("Reset all times by zero!")
}