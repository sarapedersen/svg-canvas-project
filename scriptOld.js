var c = document.getElementById('canvas');
console.log(c);
var ctx = c.getContext("2d");
ctx.strokeStyle = 'black';
ctx.lineWidth = 1.5;

// background
ctx.fillStyle = "#faf9e3";
ctx.fillRect(0, 0, 300, 250);

// table
ctx.fillStyle = '#b87a48';
ctx.fillRect(0, 250, 300, 50); 
ctx.beginPath();
ctx.moveTo(0, 250);
ctx.lineTo(300, 250);
ctx.stroke();

// bottle
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(100, 249);
ctx.lineTo(140, 249);
ctx.lineTo(140, 150);
ctx.lineTo(130, 140);
ctx.lineTo(130, 125);
ctx.lineTo(110, 125);
ctx.lineTo(110, 140);
ctx.lineTo(100, 150);
ctx.stroke();

// water
var water = 0;
function fillWater(){
    ctx.fillStyle = '#1AA7EC';
    if (water > -92) {
        ctx.fillRect(139, 249, -38, water-=10);
    } 
    console.log(water);
    
}





