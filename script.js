//documentation

function hideShowDoc() {
    var btnDoc = document.getElementById("btnDoc");
    btnDoc.innerHTML == "Show documentation" ? btnDoc.innerHTML="Hide documentation" : btnDoc.innerHTML="Show documentation";
}

// svg-script
var time = 11;
var remaining = 12;


function hideSandLine() {
    $("#sandLine").hide();
}
setInterval(function() {
    $(".arrows").hide();
    $("#initialSand").hide();
    $("#sandLine").show();
    $("#countdown").text("Time remaining: " + remaining.toFixed(0));
}, 500);

setInterval(function() {
    $(".arrows").show();
}, 12000)

hideSandLine();



// canvas script
var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");
c.addEventListener('click', changeBackground);


var top_x1 = 92;
var top_x2 = 198;
var top_y = 111;
var bottom_x1 = 199;
var bottom_x2 = 91;
var bottom_y = 250;

var animationId;
var bgColor = ["#FFE9C4", "#87fbff", "#ff7142", "#95e364"];
var i = 0;

ctx.lineWidth = 1.5;
ctx.font = "25px  verdana";
drawScene(bgColor[i]);
flipHourglass();

// fills bottom with sand
ctx.fillStyle = '#fccf7c';
ctx.beginPath();
ctx.moveTo(91, 250);
ctx.lineTo(199, 250);
ctx.lineTo(145, 182);
ctx.fill();


function drawScene(color) {
    // background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 300, 300);

    // hour glass
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.fillStyle = '#303030';
    ctx.fillRect(89, 110, 112, -10);
    ctx.fillRect(89, 250, 112, 10);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(90, 110);
    ctx.lineTo(200, 110);
    ctx.lineTo(90, 250);
    ctx.lineTo(200, 250);
    ctx.lineTo(90, 110);
    ctx.stroke();
    ctx.fillStyle = '#e8feff';
    ctx.fill();

}

function changeBackground() {
    i = (i+1)%3;
}



function flipHourglass() {
    // resets sand, cancel previous animation and displays arrows
    cancelAnimationFrame(animationId);
    remaining = 12;
    top_x1 = 92;
    top_x2 = 198;
    top_y = 111;
    bottom_x1 = 199;
    bottom_x2 = 91;
    bottom_y = 250;

    flipArrows();
    setTimeout(pourSand, 500);
}

function flipArrows() {
    // draws arrows to simulate flipping the hour glass
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(98, 150);
    ctx.bezierCurveTo(80, 150, 80, 200, 98, 200);
    ctx.moveTo(90, 147);
    ctx.lineTo(98, 150);
    ctx.lineTo(97, 160);

    ctx.moveTo(190, 150);
    ctx.bezierCurveTo(208, 150, 208, 200, 190, 200);
    ctx.moveTo(190, 190);
    ctx.lineTo(190, 200);
    ctx.lineTo(199, 204);
    ctx.stroke();
}

function pourSand () {
    animationId = requestAnimationFrame(pourSand);
    remaining -= 0.017;

    
    //if top not empty
    if (top_y < 180) {
        // ctx.clearRect(0,0, 300, 300);
        drawScene(bgColor[i]);

        // top sand triangle
        ctx.fillStyle = '#fccf7c';
        ctx.beginPath();
        ctx.moveTo(top_x1, top_y);
        ctx.lineTo(top_x2, top_y); 
        ctx.lineTo(145, 178);
        ctx.fill();

        // bottom sand triangle
        ctx.beginPath();
        ctx.moveTo(91, 250);
        ctx.lineTo(199, 250);
        ctx.lineTo(bottom_x1, bottom_y);
        ctx.lineTo(bottom_x2, bottom_y);
        ctx.fill();

        // increases bottom triangle, decreases top triangle
        top_x1 += 0.078;;
        top_y += 0.1;
        top_x2 -= 0.078;;
        
        bottom_x1 -= 0.078;
        bottom_x2 += 0.078;
        bottom_y -= 0.1;
        
        // timer
        ctx.fillStyle = 'black';
        // ctx.fillText("Time remaining: " + remaining.toFixed(0), 30, 50);

        // sand pouring line
        ctx.strokeStyle = '#fccf7c';
        ctx.beginPath();
        ctx.moveTo(145, 183);
        ctx.lineTo(145, 250);
        ctx.stroke();

    } else {
        flipHourglass();
    }
}

