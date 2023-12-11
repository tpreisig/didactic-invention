document.addEventListener("DOMContentLoaded", () => {
    const front = document.getElementById("front");
    const back = document.getElementById("back");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const top = document.getElementById("top");
    const bottom = document.getElementById("bottom");
    const box = document.querySelector(".box");
    const button = document.querySelector("button");
    let counter = 0;

    console.log(front, back, left, right, top);
    console.log(button);

    box.addEventListener("click", () => {
        counter++;
        if (counter % 2 == 0) {
            front.style.transform = "translateZ(125px)";
            back.style.transform = "translateZ(-125px)";
            left.style.right = "125px";
            right.style.left = "125px";
            top.style.bottom = "125px";
            top.style.background = "rgba(0,0,0,0.668)";
            bottom.style.top = "125px";
            bottom.style.background = "rgba(0,0,0,0.668)";
        } else {
            front.style.transform = "translateZ(200px)"
            back.style.transform = "translateZ(-200px)"
            left.style.right = "200px"
            right.style.left = "200px"
            top.style.bottom = "200px"
            top.style.background = "darkslateblue"
            bottom.style.top = "200px"
            bottom.style.background = "rebeccapurple"
        }
    });

    button.addEventListener("click", () => {
        counter++;
        if (counter % 2 == 0) {
            front.style.transform = "translateZ(125px)";
            back.style.transform = "translateZ(-125px)";
            left.style.right = "125px";
            right.style.left = "125px";
            top.style.bottom = "125px";
            top.style.background = "rgba(0,0,0,0.668)";
            bottom.style.top = "125px";
            bottom.style.background = "rgba(0,0,0,0.668)";
        } else {
            front.style.transform = "translateZ(200px)"
            back.style.transform = "translateZ(-200px)"
            left.style.right = "200px"
            right.style.left = "200px"
            top.style.bottom = "200px"
            top.style.background = "darkslateblue"
            bottom.style.top = "200px"
            bottom.style.background = "rebeccapurple"
        }
    });
});