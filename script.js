function digitalclock ()
{
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    var meridian = "AM";

    if (hour == 0)
    {
        hour = 12;
    }
    if (hour>12)
    {
        hour = hour - 12;
        meridian = "PM"
    }

    hour = hour<10 ? "0" + hour : hour;
    min = min<10 ? "0" + min : min;
    sec = sec<10 ? "0" + sec : sec;

    var time = hour + ":" + min + ":" + sec + " " + meridian;
    document.getElementById("clock").innerText=time;
    document.getElementById("clock").textContent=time;

    setTimeout(digitalclock, 1000);
    
}

digitalclock();


