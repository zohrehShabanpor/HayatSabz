function switchInput(id) {
    let control = document.getElementById(id);

    if (control.style.justifyContent !== `end`)
        control.style.justifyContent = `end`;
    else
        control.style.justifyContent = `start`;
}

if (window.innerWidth <= breakpoints.xSmall) {
    let button1 = Array.prototype.slice.call(document.getElementsByClassName("first-section-item-button"));

    for (let i = 0; i < button1.length; i++) {
        button1[i].innerText = 'اضافه به سبد خرید';
    }
}