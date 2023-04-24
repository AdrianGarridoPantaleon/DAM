var gameCanvas = document.getElementById("can");
var ctx = gameCanvas.getContext("2d");

/**
     * FUNCIÓN QUE NOS PONE LOS OBSTACULOS PARA COMPLICAR EL JUEGO A NUESTRO CANVAS
     **/

function Obstaculo() {
  this.x = 200;
  this.y = 200;
  this.w = 50;
  this.h = 50;
  this.color = "red";
  // this.pauseImg.src = "assets/img/pause-circle-fill.svg";
  this.calor = "green";
  // this.playImg.src = "assets/img/play-circle-fill.svg";

  this.dibuja = function () {
     ctx.fillStyle = this.color;
     ctx.fillRect(this.x, this.y, this.w, this.h);
   // ctx.drawImage(this.pauseImg, this.x, this.y, this.w, this.h);
  };
}

/**
     * FUNCIÓN PARA DETERMINAR EL TAMAÑO DEL MUÑECO CANVAS
     **/

function Bicho() {
  this.x = 50;
  this.y = 50;
  this.w = 150;
  this.h = 150;
  this.vel = 5;
  this.img = new Image();
  this.img.src = "img/JJ.png";

  this.teclaIz = false;
  this.teclaDe = false;
  this.teclaAr = false;
  this.teclaAb = false;

  //AQUÍ LO DIBUJAMOS
  this.dibuja = function () {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  // Y CON ESTO PASAMOS AL DIRECCIONAMIENTO DE NUESTRO MUÑECO
  this.mueve = function () {
    if (this.teclaIz == true) {
      this.x -= this.vel;
    }
    if (this.teclaDe == true) {
      this.x += this.vel;
    }
    if (this.teclaAr == true) {
      this.y -= this.vel;
    }
    if (this.teclaAb == true) {
      this.y += this.vel;
    }
  };
}

 /**
     * FUNCIÓN PARA QUE EN CASO DE COLISIÓN LE DETERMINAMOS UNA NUEVA POSICIÓN RANDOM
     **/

function collision() {
  if (
    j.x < o.x + o.w &&
    j.x + j.w > o.x &&
    j.y < o.y + o.h &&
    j.y + j.h > o.y
  ) {
    const randomY = Math.floor(Math.random() * (gameCanvas.height - o.h));
    const randomX = Math.floor(Math.random() * (gameCanvas.width - o.w));

    j.x = randomX;
    j.y = randomY;

    // const video = document.getElementById("video-player");
    // const btnPlayPause = document.getElementById("btn-play-pause");

    playPause();
    // // Aquí se debería meter un if según lo que tenga el botón y pintar dentro del canvas el play/pause
    // ctx.drawImage(o.playImg, o.x, o.y, o.w, o.h);
  }
}
  /**
     * FUNCIÓN PARA QUE SE REPITA LAS VECES QUE SEAN NECESARIAS
     **/

function gameLoop() {
  gameCanvas.width = gameCanvas.width;
  o.dibuja();
  j.dibuja();
  j.mueve();
  collision();
  requestAnimationFrame(gameLoop);
}


  /**
     * LA FUNCION ONLOAD ESTÁ CON TODO LO DEL VIDEO.JS
     **/


