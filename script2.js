var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
var top_x1 = 92;
var top_x2 = 198;
var top_y = 111;
var bottom_x1 = 199;
var bottom_x2 = 91;
var bottom_y = 250;

ctx.lineWidth = 1.5;
flipHourglass();
drawScene();

// // fills bottom with sand
// ctx.fillStyle = '#fccf7c';
// ctx.beginPath();
// ctx.moveTo(91, 250);
// ctx.lineTo(199, 250);
// ctx.lineTo(145, 182);
// ctx.fill();

function drawScene() {
    // background
    ctx.fillStyle = '#87fbff';
    ctx.fillRect(0, 0, 300, 300);

    // hour glass
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(90, 110);
    ctx.lineTo(200, 110);
    ctx.lineTo(90, 250);
    ctx.lineTo(200, 250);
    ctx.lineTo(90, 110);
    ctx.stroke();
    ctx.fillStyle = '#e8feff';
    ctx.fill();

    // decoration


}


function flipHourglass() {
    if (top_y <= 180) {
        requestAnimationFrame(flipHourglass);
        ctx.clearRect(0,0, 300, 300);
        drawScene();
        ctx.fillStyle = '#fccf7c';
        ctx.beginPath();
        ctx.moveTo(top_x1, top_y);
        ctx.lineTo(top_x2, top_y); 
        ctx.lineTo(145, 178);
        ctx.fill();

        top_x1 += 0.078;
        top_y +=0.1;
        top_x2 -= 0.078;

        ctx.beginPath();
        ctx.moveTo(91, 250);
        ctx.lineTo(199, 250);
        ctx.lineTo(bottom_x1, bottom_y);
        ctx.lineTo(bottom_x2, bottom_y);
        ctx.fill();

        bottom_x1 -= 0.078;
        bottom_x2 += 0.078;
        bottom_y -= 0.1;

        ctx.strokeStyle = '#fccf7c';
        ctx.beginPath();
        ctx.moveTo(145, 183);
        ctx.lineTo(145, 250);
        ctx.stroke();
    } 

    
    // console.log("Time is up!");
    
    
}
