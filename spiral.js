"use strict"
var canvas = document.getElementById('spiral');
var ctx = canvas.getContext('2d');
var i = 0;
var x = 0;
var y = 0;

window.onload = function() {
  for (var l = 300; (l < window.innerWidth * 0.8) && (l < window.innerHeight * 0.8); l += 50) {
    canvas.width = l
  }
  canvas.height = canvas.width;
  ctx.fillStyle = "white";
  ctx.translate(canvas.width/2,canvas.height/2);
  ctx.scale(canvas.width/300 * 2, canvas.height/300 * 2);
  ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
  init();
}

function init() {
  setTimeout(
    function() {
      requestAnimationFrame(init);
      draw();
  },100);
}

function draw() {
  ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
  ctx.beginPath();
  x = 0;
  y = 0;
  for (var j = 0; j <= i; j++) {
    if ((j % 2) == 0) {
      x = (j/2 + ((j/2)%2))*Math.pow(-1,j/2)
      // x = (j)*Math.pow((-1),j/2);
    }

    if ((j % 2) == 1) {
      // y = j * Math.pow((-1),(j+1)/2);
      y += Math.pow((-1),(j+1)/2 - 1) * j;
    }
    ctx.lineJoin= "round";
    ctx.lineTo(x,y);
    // ctx.quadraticCurveTo(x,y,x,y);
  }
  ctx.closePath();
  ctx.stroke();
  if (i < 100) {i++;}
  else {i = 1;}
}
