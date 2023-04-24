// SCRIPT CON LA FUNCIONALIDAD DE LA REPRODUCCION DEL VIDEO 

var vid, playbtn, seekslider, curtimetext, durtimetext, mute, masVolume, menosVolume, canvas, pista; // INICIALIZACION DE VARIABLES
function intializePlayer() {

  // Set object references
  pista = 0; //SE USA PARA SABER A QUÉ PELICULA CAMBIAR CUANDO SE PULSA EL BOTON DE CAMBIAR PISTA
  vid = document.getElementById("myVideo"); // SELECCION DEL VIDEO
  vid.setAttribute('poster', 'img/sintel.jpg'); // SELECCION DEL POSTER INICIAL DEL VIDEO
  canvas = document.getElementById('canvas'); // SELECCION DEL CANVAS DONDE SE MUESTRA LA CAPTURA DEL VIDEO
  playbtn = document.getElementById("playpausebtn"); // SELECCION DEL BOTON DE PLAY Y PAUSE
  mute = document.getElementById("mute"); // SELECCION DEL BOTON DE MUTE
  masVolume = document.getElementById("volume+"); // SELECCION DEL BOTON DE INCREMENTAR EL SONIDO
  menosVolume = document.getElementById("volumen-"); // SELECCION DEL BOTON DE DECREMENTAR EL SONIDO
  volume = document.getElementById("volume"); // SELECCION DE LA BARRA DEL VOLUMEN ACTUAL
  volume.value = vid.volume; // INICIALIZACION DEL VOLUMEN DEL VIDEO A LA BARRA DEL VOLUMEN, PARA QUE CUANDO SE CARGUE LA PAGINA, SI SE LE DA PLAY AL VIDEO CON UN VOLUMEN DIFERENTE DEL 100% EN LA BARRA DE VOLUMEN, SE ACTIVE UN VOLUMEN ACORDE A LA SELECCION DE LA BARRA
  seekslider = document.getElementById("seekslider"); // SELECCION DE LA BARRA DEL TIEMPO ACTUAL DEL VIDEO
  curtimetext = document.getElementById("curtimetext"); // SELECCION DE LA NUMERACION TIEMPO ACTUAL 
  durtimetext = document.getElementById("durtimetext"); // SELECCION DE LA NUMERACION TIEMPO TOTAL DEL VIDEO 
  // Add event listeners
  playbtn.addEventListener("click", playPause, false); // EVENTO QUE LLAMA A LA FUNCION PLAYPAUSE CUANDO SE HACE CLICK EN EL BOTON
  seekslider.addEventListener("change", vidSeek, false); // EVENTO QUE LLAMA A LA FUNCION VIDSEEK PARA ACTUALIZAR LA BARRA DEL TIEMPO
  vid.addEventListener("timeupdate", seektimeupdate, false); // EVENTO QUE LLAMA A LA FUNCION SEEKTIEMUPDATE PARA ACTUALIZAR LA NUMERACION DEL TIEMPO DEL VIDEO
  vid.addEventListener("ended", function () { // EVENTO QUE CARGA EL VIDEO
    vid.load();
  });
  volume.addEventListener('mousemove', (e) => { // EVENTO QUE ASIGNA AL TIEMPO DEL VIDEO, LA SELECCION QUE SE HAGA DE LA BARRA DE TIEMPO
    vid.volume = e.target.value;
  });

  //CON ESTO LE DAMOS USO A LAS TECLAS DEL TECLADO PARA MANEJAR EL VIDEOJUEGO Y LO LLAMAMOS KEYDOWN
  document.addEventListener("keydown", function (e) { // SCRIPT: juego.js -- 
    if (e.keyCode == 37) {
      j.teclaIz = true;
    }
    if (e.keyCode == 38) {
      j.teclaAr = true;
    }
    if (e.keyCode == 39) {
      j.teclaDe = true;
    }
    if (e.keyCode == 40) {
      j.teclaAb = true;
    }
  });

   //CON ESTO LE DAMOS USO A LAS TECLAS DEL TECLADO PARA MANEJAR EL VIDEOJUEGO Y LO LLAMAMOS KEYUP
  document.addEventListener("keyup", function (e) { // SCRIPT: juego.js -- 
    if (e.keyCode == 37) {
      j.teclaIz = false;
    }
    if (e.keyCode == 38) {
      j.teclaAr = false;
    }
    if (e.keyCode == 39) {
      j.teclaDe = false;
    }
    if (e.keyCode == 40) {
      j.teclaAb = false;
    }
  });

  //LLAMAMOS A NUESTRAS FUNCIONES DE .JS Y CREAMOS INSTANCAIAS
  o = new Obstaculo(); // SCRIPT: juego.js -- 
  j = new Bicho(); // SCRIPT: juego.js -- 
  gameLoop(); // SCRIPT: juego.js -- 

}
window.onload = intializePlayer; // LLAMA A LA FUNCION INITIALIZEPLAYER AL CARGAR LA PAGINA.

/**
 * FUNCION QUE SE ENCARGA DE REPETIR EL VIDEO CUANDO SE ACTIVA EL BOTON DE REPETICION. TAMBIEN CAMBIA LA IMAGEN DEL BOTON AL ACTIVARLO PARA NOTAR QUE ESTA ACTIVADO.
 **/
function repeat() {
  if (typeof vid.loop == 'boolean') { // loop supported
    if (vid.loop == true) {
      document.getElementById("imgRepeat").src = "img/repeat.png";
      vid.loop = false;
    } else {
      document.getElementById("imgRepeat").src = "img/repeatOne.png";
      vid.loop = true;
    }
  } else { // loop property not supported
    alert("no supported");
    vid.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }
}

/**
 * FUNCION QUE SE ENCARGA DE AUMENTAR EL VOLUMEN DEL VIDEO Y ASIGNAR A LA BARRA DE SONIDO EL VALOR DEL VOLUMEN ACTUAL
 **/
function increaseVolume() {
  if (vid.muted == true) {
    document.getElementById("imgMute").src = "img/mute.png"
    vid.muted = false;
  }
  vid.volume += 0.2;
  volume.value = vid.volume;
}

/**
 * FUNCION QUE SE ENCARGA DE REDUCIR EL VOLUMEN DEL VIDEO Y ASIGNAR A LA BARRA DE SONIDO EL VALOR DEL VOLUMEN ACTUAL
 **/
function decreaseVolume() {
  if (vid.muted == true) {
    document.getElementById("imgMute").src = "img/mute.png"
    vid.muted = false;
  }
  vid.volume -= 0.2;
  volume.value = vid.volume;
}

/**
 * FUNCION QUE SE ENCARGA DE REPRODUCIR Y PAUSAR EL VIDEO, A LA VEZ QUE CAMBIA LAS IMAGENES DEL BOTON
 **/
function playPause() {
  if (vid.paused) {
    vid.play();
    document.getElementById("imgPlay").src = "img/pause.png";
  } else {
    vid.pause();
    document.getElementById("imgPlay").src = "img/play.png";
  }
}

/**
 * FUNCION QUE SE ENCARGA DE AUMENTAR EN 10 EL TIEMPO ACTUAL DE REPRODUCCION
 **/
function adelantar() {
  vid.currentTime = vid.currentTime + 10;
}
/**
 * FUNCION QUE SE ENCARGA DE REDUCIR EN 10 EL TIEMPO ACTUAL DE REPRODUCCION
 **/
function atrasar() {
  vid.currentTime = vid.currentTime - 10;
}

/**
 * FUNCION QUE SE ENCARGA DE MUTEAR O DESMUTEAR EL VOLUMEN DEL VIDEO. AL DESMUTEARLO SE LE ASIGNA EL VOLUMEN QUE TENIA ANTES DEL MUTEO.
 **/
function enableMute() {
  if (vid.muted == true) {
    document.getElementById("imgMute").src = "img/mute.png"
    vid.muted = false;
    volume.value = vid.volume;
  } else {
    document.getElementById("imgMute").src = "img/highVolume.png"
    vid.muted = true;
    volume.value = 0;
  }
}

/**
 * FUNCION QUE SE ENCARGA CAPTURAR UN FRAM DEL VIDEO
 **/
function capture() {
  canvas.width = vid.videoWidth;
  canvas.height = vid.videoHeight;
  canvas.getContext('2d').drawImage(vid, 0, 0, vid.videoWidth, vid.videoHeight); // for drawing the video element on the canvas
}

  /**
 * FUNCION QUE SE CAMBIAR LA PELICULA QUE ESTÁ REPRODUCIENDOSE, POR OTRA QUE SE ENCUENTRE POSTERIORMENTE
 **/
function cambiarPista(img) {
  var source1 = document.getElementById("source1");
  var source2 = document.getElementById("source2");

  if (pista == 0) {
    vid.setAttribute('poster', 'img/cl.jpg');
    document.getElementById("imgPlay").src = "img/play.png";
    source1.src = "pelis/cl.mp4";
    source2.src = "pelis/cl.mkv";
    pista = 1;
  } else if (pista == 1) {
    vid.setAttribute('poster', 'img/ed.jpg');
    document.getElementById("imgPlay").src = "img/play.png";
    source1.src = "pelis/ed.mp4";
    source2.src = "pelis/ed.avi";
    pista = 2;
  } else if (pista == 2) {
    vid.setAttribute('poster', 'img/sintel.jpg');
    document.getElementById("imgPlay").src = "img/play.png";
    source1.src = "pelis/sintel.mp4";
    source2.src = "pelis/sintel.mkv";
    pista = 0;
  }

  if (img == 3) {
    vid.setAttribute('poster', 'img/cl.jpg');
    document.getElementById("imgPlay").src = "img/play.png";
    source1.src = "pelis/cl.mp4";
    source2.src = "pelis/cl.mkv";
    pista = 1;
  } else if (img == 2) {
    vid.setAttribute('poster', 'img/ed.jpg');
    document.getElementById("imgPlay").src = "img/play.png";
    source1.src = "pelis/ed.mp4";
    source2.src = "pelis/ed.avi";
    pista = 2;
  } else if (img == 1) {
    vid.setAttribute('poster', 'img/sintel.jpg');
    document.getElementById("imgPlay").src = "img/play.png";
    source1.src = "pelis/sintel.mp4";
    source2.src = "pelis/sintel.mkv";
    pista = 0;
  }
  vid.load();
}

/**
 * FUNCION QUE SE ENCARGA DE ASIGNAR AL TIEMPO DEL VIDEO, AL VALOR QUE TENGA EN LA BARRA DE TIEMPO. SI SE CLICKA SOBRE ELLA, SE ASIGNARA EL TIEMPO AL VIDEO DE DONDE
 * SE LE HAYA HECHO CLICK.
 **/
function vidSeek() {
  var seekto = vid.duration * (seekslider.value / 100);
  vid.currentTime = seekto;
}

/**
 * FUNCION QUE SE ENCARGA DE CALCULAR EL TIEMPO ACTUAL DE REPRODUCCION E IR ACTUALIZANDOLO CADA SEGUNDO. TAMBIEN CALCULA EL TIEMPO TOTAL DEL VIDEO.
 **/
function seektimeupdate() {
  var nt = vid.currentTime * (100 / vid.duration);
  seekslider.value = nt;
  var curmins = Math.floor(vid.currentTime / 60);
  var cursecs = Math.floor(vid.currentTime - curmins * 60);
  var durmins = Math.floor(vid.duration / 60);
  var dursecs = Math.floor(vid.duration - durmins * 60);
  if (cursecs < 10) { cursecs = "0" + cursecs; }
  if (dursecs < 10) { dursecs = "0" + dursecs; }
  if (curmins < 10) { curmins = "0" + curmins; }
  if (durmins < 10) { durmins = "0" + durmins; }
  curtimetext.innerHTML = curmins + ":" + cursecs;
  durtimetext.innerHTML = durmins + ":" + dursecs;
}
