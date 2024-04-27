setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let Meridiem = "AM";

    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        Meridiem = "PM";
    }
    else if (hour == 0) {
        hour = 12;
        Meridiem = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let CurrentTime = hour + ":" + min + ":" + sec + Meridiem;

    document.getElementById("clock").innerHTML = CurrentTime;
}
showTime();




