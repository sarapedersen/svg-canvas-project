//documentation

function hideShowDoc() {
    var btnDoc = document.getElementById("btnDoc");
    if (btnDoc.innerHTML == "Show documentation") {
        btnDoc.innerHTML = "Hide documentation";
        $("#documentation").show();
        document.getElementById('documentation').scrollIntoView();


    } else {
        btnDoc.innerHTML="Show documentation";
        $("#documentation").hide();
    }
}


// svg-script
var i = 0;
var colors = ["#fccf7c","#912641", "#4b056e"];

$(".sand, #hourglass").click(changeSvgColor);

function changeSvgColor() {
    i = (i+1) % colors.length;
    $("#sandLine").css({stroke: colors[i]});
    $("#topSand, #bottomSand").css({fill: colors[i]});
}

function hideSandLine() {
    $("#sandLine").hide();
}
setInterval(function() {
    $(".arrows").hide();
    $("#initialSand").hide();
    $("#sandLine").show();
}, 500);

setInterval(function() {
    $(".arrows").show();
}, 12000)

hideSandLine();



// canvas script
var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");
c.addEventListener('click', changeCanvasColor);

var top_x1 = 91;
var top_x2 = 198;
var top_y = 111;
var bottom_x1 = 198;
var bottom_x2 = 91;
var bottom_y = 250;

var animationId;
var j = 0;

ctx.lineWidth = 1.5;
ctx.font = "25px  verdana";
drawScene(colors[j]);
flipHourglass();

// fills bottom with sand
ctx.fillStyle = '#fccf7c';
ctx.beginPath();
ctx.moveTo(91, 250);
ctx.lineTo(198, 250);
ctx.lineTo(145, 182);
ctx.fill();


function drawScene() {
    // background
    ctx.fillStyle = "#FFE9C4";
    ctx.fillRect(0, 0, 300, 300);

    // hourglass
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.beginPath();
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
    ctx.fillStyle = "#e8feff";
    ctx.fill();

}

function changeCanvasColor() {
    j = (j+1) % colors.length;
}



function flipHourglass() {
    // resets sand, cancel previous animation and displays arrows
    cancelAnimationFrame(animationId);
    top_x1 = 91;
    top_x2 = 199;
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

function drawSand(sandColor) {
    // top sand triangle
    ctx.fillStyle = sandColor;
    ctx.beginPath();
    ctx.moveTo(top_x1, top_y);
    ctx.lineTo(top_x2, top_y); 
    ctx.lineTo(145, 178);
    ctx.fill();

    // bottom sand
    ctx.beginPath();
    ctx.moveTo(91, 250);
    ctx.lineTo(199, 250);
    ctx.lineTo(bottom_x1, bottom_y);
    ctx.lineTo(bottom_x2, bottom_y);
    ctx.fill();

    // sand pouring line
    ctx.strokeStyle = sandColor;
    ctx.beginPath();
    ctx.moveTo(145, 183);
    ctx.lineTo(145, 250);
    ctx.stroke();
}

function pourSand () {
    animationId = requestAnimationFrame(pourSand);
    
    //if top not empty
    if (top_y < 180) {
        // ctx.clearRect(0,0, 300, 300);
        drawScene();
        drawSand(colors[j]);

        // increases bottom triangle, decreases top triangle
        top_x1 += 0.078;;
        top_y += 0.1;
        top_x2 -= 0.078;;
        bottom_x1 -= 0.078;
        bottom_x2 += 0.078;
        bottom_y -= 0.1;

    } else {
        flipHourglass();
    }

    function handleClick(e) {
        var mouseX = parseInt(e.clientX);
        var mouseY = parseInt(e.clientY);
        var svg = document.getElementById("svg")
        var svgX = svg.getBoundingClientRect().left;
        var svgY = svg.getBoundingClientRect().top;
        // console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
        // console.log(mouseX - svgX);

        // if ((mouseX - svgX > 91 && mouseX-svgX < 200) && (mouseY - svgY )) {
        //     console.log("inside X");
        // }

    }

    $("#myCanvas").mousedown(function(e) {handleClick(e);})
}

