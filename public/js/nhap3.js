window.setTimeout("showTime()", 1000);
function getVNTime(){
    var time = new Date();
    var dow = time.getDay();
    if(dow==0)
        dow = "SUN";
    else if (dow==1)
        dow = "MON";
    else if (dow==2)
        dow = "TUE";
    else if (dow==3)
        dow = "WED";
    else if (dow==4)
        dow = "THU";
    else if (dow==5)
        dow = "FRI";
    else if (dow==6)
        dow = "SAT";  
    var day = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    day = ((day < 10) ? "0" : "") + day;
    month = ((month < 10) ? "0" : "") + month;
    hr = ((hr < 10) ? "0" : "") + hr;
    min = ((min < 10) ? "0" : "") + min;
    sec = ((sec < 10) ? "0" : "") + sec;
    return dow + " " + day + "/" + month + "/" + year + " " + hr + ":" + min + ":" + sec;
}
function showTime(){
    var vnclock = document.getElementById("vnclock");
    if (vnclock != null)
        vnclock.innerHTML = getVNTime();
    setTimeout("showTime()", 1000);
}