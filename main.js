
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var currentPosX, currentPosY, lastPosX, lastPosY;

var color = "black";
var width = 1;

var screenWidth = screen.width;

var newWidth = screen.width - 70;
var newHeight = screen.height - 300;

if (screenWidth < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touchStartFn);

function touchStartFn(e) {
    console.log("Touch start");

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;


    lastPosX = e.touches[0].clientX - canvas.offsetLeft;
    lastPosY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touchMoveFn);

function touchMoveFn(e) {
    console.log("Touch Move");
    currentPosX = e.touches[0].clientX - canvas.offsetLeft;
    currentPosY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastPosX + "y = " + lastPosY);
    ctx.moveTo(lastPosX, lastPosY);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + currentPosX + "y = " + currentPosY);
    ctx.lineTo(currentPosX, currentPosY);
    ctx.stroke();

    lastPosX = currentPosX;
    lastPosY = currentPosY;
}



function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

