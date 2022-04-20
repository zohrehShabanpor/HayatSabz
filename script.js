if (window.innerWidth <= breakpoints.xSmall) {
    let button1 = Array.prototype.slice.call(document.getElementsByClassName("first-section-button"));
    let button2 = Array.prototype.slice.call(document.getElementsByClassName("seventh-section-item-button"));

    let buttons = button2.concat(button1)


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = 'بیشتر';
    }

    let button3 = Array.prototype.slice.call(document.getElementsByClassName("second-section-button-2"));
    let button4 = Array.prototype.slice.call(document.getElementsByClassName("third-section-item-button"));
    let button5 = Array.prototype.slice.call(document.getElementsByClassName("fifth-section-item-button"));
    let button6 = Array.prototype.slice.call(document.getElementsByClassName("sixth-section-item-button"));

    buttons = button3.concat(button4, button5, button6)

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = 'اضافه به سبد خرید';
    }
}