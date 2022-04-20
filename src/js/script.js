function CollapseNavBar() {
    let control = document.getElementById('nav');
    control.style.transition = `height 0.3s , opacity 0.3s`;
    control.style.transitionTimingFunction = `ease-in`;

    let height = 0;

    if (window.innerWidth > breakpoints.xxLarge)
        height = 155;
    else if (window.innerWidth > breakpoints.xLarge)
        height = 145;
    else if (window.innerWidth > breakpoints.large)
        height = 135;
    else if (window.innerWidth > breakpoints.medium)
        height = 120;
    else if (window.innerWidth > breakpoints.small)
        height = 100;
    else
        height = 80;


    if (control.style.opacity !== `0`) {
        control.style.opacity = `0`;
        control.style.height = `0`;
    } else {
        control.style.opacity = `1`;
        control.style.height = `${height}px`;
    }
}