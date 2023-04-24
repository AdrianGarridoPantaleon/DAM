
var myCanvas = document.getElementById("myCanvas");

var ctx = myCanvas.getContext("2d");
var cir = myCanvas.getContext("2d");
var cir2 = myCanvas.getContext("2d");
var cir3 = myCanvas.getContext("2d");
var cir4 = myCanvas.getContext("2d");
var cir5 = myCanvas.getContext("2d");
var cir5 = myCanvas.getContext("2d");
var pie1 = myCanvas.getContext("2d");
var pie2 = myCanvas.getContext("2d");
var pierna1 = myCanvas.getContext("2d");
var pierna2 = myCanvas.getContext("2d");
var brazo1 = myCanvas.getContext("2d");
var brazo11 = myCanvas.getContext("2d");
var brazo2 = myCanvas.getContext("2d");
var brazo22 = myCanvas.getContext("2d");
var mano1 = myCanvas.getContext("2d");
var mano2 = myCanvas.getContext("2d");
var dedo = myCanvas.getContext("2d");
var texto = myCanvas.getContext("2d");

// Palabra Rectangulo
texto.font = "30px Arial";
texto.fillText("Juán José", 135, 50);

// Dibujamos rectángulo naranja relleno
ctx.fillStyle = "rgb(255,69,0)";
ctx.fillRect(87.5, 120, 225, 130);
ctx.strokeRect(87.5, 120, 225, 130);

// Dibujamos circulo negro 
cir.fillStyle = "rgb(255,255,255)";
cir.beginPath();
cir.arc(187, 160, 15, 0, 2 * Math.PI);
cir.stroke();
cir.fill();

// Dibujamos circulo negro 
cir2.fillStyle = "rgb(255,255,255)";
cir2.beginPath();
cir2.arc(214, 163, 12, 0, 2 * Math.PI);
cir2.stroke();
cir2.fill();

// Dibujamos circulo negro pequeño
cir3.fillStyle = "rgb(0,0,0)";
cir3.beginPath();
cir3.arc(187, 160, 8, 0, 2 * Math.PI);
cir3.stroke();
cir3.fill();

// Dibujamos circulo negro pequeño
cir4.fillStyle = "rgb(0,0,0)";
cir4.beginPath();
cir4.arc(214, 163, 6, 0, 2 * Math.PI);
cir4.stroke();
cir4.fill();

// Dibujamos boca
cir5.fillStyle = "rgb(0,0,0)";
cir5.beginPath();
cir5.arc(200, 210, 15, 0, 1 * Math.PI);
cir5.stroke();
cir5.fill();

// Dibujamos primer pie
pie1.fillStyle = "rgb(255,69,0)";
pie1.beginPath();
pie1.arc(162, 350, 18, 0, 2 * Math.PI);
pie1.stroke();
pie1.fill();

// Dibujamos segundo pie
pie2.fillStyle = "rgb(255,69,0)";
pie2.beginPath();
pie2.arc(248, 350, 18, 0, 2 * Math.PI);
pie2.stroke();
pie2.fill();

// Dibujamos piernas
pierna1.moveTo(230, 250);
pierna1.lineTo(230, 350);
pierna1.stroke();

pierna2.moveTo(180, 250);
pierna2.lineTo(180, 350);
pierna2.stroke();

//Dibujamos brazos
brazo1.moveTo(87.5, 200);
brazo1.lineTo(50, 120);
brazo1.stroke()

brazo11.moveTo(50, 120);
brazo11.lineTo(90, 80);
brazo11.stroke()

brazo2.moveTo(312.5, 200);
brazo2.lineTo(360, 120);
brazo2.stroke()

brazo22.moveTo(360, 120);
brazo22.lineTo(320, 80);
brazo22.stroke()

// Dibujamos circulo negro pequeño
mano1.fillStyle = "rgb(0,0,0)";
mano1.beginPath();
mano1.arc(320, 80, 4, 0, 2 * Math.PI);
mano1.stroke();
mano1.fill();

// Dibujamos circulo negro pequeño
mano2.fillStyle = "rgb(0,0,0)";
mano2.beginPath();
mano2.arc(90, 80, 4, 0, 2 * Math.PI);
mano2.stroke();
mano2.fill();

//Dibujamos dedos
dedo.moveTo(115, 75);
dedo.lineTo(90, 80);
dedo.stroke()
dedo.moveTo(80, 60);
dedo.lineTo(90, 80);
dedo.stroke()
dedo.moveTo(90, 60);
dedo.lineTo(90, 80);
dedo.stroke()
dedo.moveTo(100, 60);
dedo.lineTo(90, 80);
dedo.stroke()
dedo.moveTo(110, 65);
dedo.lineTo(90, 80);
dedo.stroke()


dedo.moveTo(330, 60);
dedo.lineTo(320, 80);
dedo.stroke()
dedo.moveTo(320, 55);
dedo.lineTo(320, 80);
dedo.stroke()
dedo.moveTo(310, 60);
dedo.lineTo(320, 80);
dedo.stroke()
dedo.moveTo(300, 65);
dedo.lineTo(320, 80);
dedo.stroke()
dedo.moveTo(295, 75);
dedo.lineTo(320, 80);
dedo.stroke()
