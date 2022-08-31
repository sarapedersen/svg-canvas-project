var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
var top_x1 = 92;
var top_x2 = 198;
var top_y = 111;
var bottom_x1 = 199;
var bottom_x2 = 91;
var bottom_y = 250;

ctx.lineWidth = 1.5;
drawScene();

// fills bottom with sand
ctx.fillStyle = '#fccf7c';
ctx.beginPath();
ctx.moveTo(91, 250);
ctx.lineTo(199, 250);
ctx.lineTo(145, 182);
ctx.fill();



function drawScene() {
    // background
    ctx.fillStyle = '#87fbff';
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


function flipHourglass() {
    top_x1 = 92;
    top_x2 = 198;
    top_y = 111;
    bottom_x1 = 199;
    bottom_x2 = 91;
    bottom_y = 250;

    flipArrows();
    window.setTimeout(pourSand, 500);
    
}

function flipArrows() {
    console.log("flipp");
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
    requestAnimationFrame(pourSand);

    if (top_y < 180) {
        //if top isn't full, move triangle downwards
        ctx.clearRect(0,0, 300, 300);
        drawScene();


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
        
        top_x1 += 0.078;
        top_y +=0.1;
        top_x2 -= 0.078;

        bottom_x1 -= 0.078;
        bottom_x2 += 0.078;
        bottom_y -= 0.1;
        
        // sand line
        ctx.strokeStyle = '#fccf7c';
        ctx.beginPath();
        ctx.moveTo(145, 183);
        ctx.lineTo(145, 250);
        ctx.stroke();
    } 
}