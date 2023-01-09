if (window.outerWidth <= breakpoints.xSmall) {
    let button1 = Array.prototype.slice.call(document.getElementsByClassName("global-1-item-button"));

    for (let i = 0; i < button1.length; i++) {
        button1[i].innerText = 'اضافه به سبد خرید';
    }
}

let sec = parseInt(document.getElementById("secSpan").innerText);
let min = parseInt(document.getElementById("minSpan").innerText);
let hour = parseInt(document.getElementById("hourSpan").innerText);
let day = parseInt(document.getElementById("daySpan").innerText);

setInterval(() => {
    if (sec === 0) {
        if (min === 0) {
            if (hour === 0) {
                if (day === 0) {
                    clearInterval();
                    return;
                } else {
                    day--;
                }
                hour = 23;
            } else {
                hour--;
            }
            min = 59;
        } else {

            min--;
        }
        sec = 59;
    } else
        sec--;


    document.getElementById("daySpan").innerText = day.toString().length === 1 ? '0' + day.toString() : day.toString();
    document.getElementById("hourSpan").innerText = hour.toString().length === 1 ? '0' + hour.toString() : hour.toString();
    document.getElementById("secSpan").innerText = sec.toString().length === 1 ? '0' + sec.toString() : sec.toString();
    document.getElementById("minSpan").innerText = min.toString().length === 1 ? '0' + min.toString() : min.toString();
}, 1000)

