//class Juego {
//  constructor(estado) {
//    // creo los objetos de mis otras clases
//    this.raton =  new Ratoncito();
//    this.tacos = [];

//    this.maxTacos= 6;
//    this.interval= 800; //que aparezcan cada
//    this.ultimoTiempoAparicion= 0;

//    this.tiempo=0;
//    this.duracion=20;
//    this.jugando=true; //time
//    this.estado= 0;
//    this.puntos= 0;
//    this.boton = true;
//    for (let i=0; i< this.maxTacos; i++) {
//      this.tacos.push(new Zapatos()); //array de tacos
//    }
//  }
//  dibujar(imgArray, textos) {
//    if (this.estado ==12 ) {
//      image(imgArray[4], 0, 0);
//      image(imgArray[5], 0, 0);
//      this.raton.dibujar(imgArray); //dibujo mis objetos con sus metodos
//      for (let i=0; i< this.tacos.length; i++) {
//        this.tacos[i].dibujar(imgArray);
//        fill(255);
//        text("puntos: "+this.puntos, 440, 45);
//      }
//    }
//  }

//  teclado(imgArray) {
//    if (this.estado == 12) {
//      this.raton.flechas(keyCode, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
//    }
//    //if (key=== ' ' ) {
//    // if (this.estado=== "instrucciones") {
//    //   this.estado = 12;
//    // }
//  }


//  actualizar () {
//    if (this.estado ==12) {
//      let tiempoActual = millis();
//      if (tiempoActual - this.ultimoTiempoAparicion > this.interval) { //comparacion tiempo actual con el tiempo del ultimo aparecimiento del taco
//        if (this.tacos.length === this.maxTacos) {
//          this.tacos.splice(0, 1); //si la longitud del arreglo tacos es igual a el nro de tacos asignado se elimina el primer elemento del arreglo para dar espacio a otro (taco)
//          this.tacos.push (new Zapatos()); //aca se agrega uno nuevo
//        }
//        this.ultimoTiempoAparicion = tiempoActual;
//      }
//    }

//    let distanciaColision = 30 ;
//    for ( let i = 0; i < this.tacos.length; i++ ) {  //recorro cada posicion de la lista
//      let distanciaTacoRaton = dist( this.raton.x, this.raton.y, this.tacos[i].x, this.tacos[i].y);
//      //
//      if ( distanciaTacoRaton < distanciaColision && !this.tacos[i].colision) {
//        this.puntos++;
//        this.tacos[i].colision=true;
//        this.reubicarTaco(this.tacos[i]);
//      }
//    }

//    if (   this.puntos > 5) {
//      this.estado="ganaste";
//    }
//  }

//  reubicarTaco(taco) {

//    taco.x = random(taco.size, width- taco.size);
//    taco.y = random(100, height - taco.size- 80);
//    taco.colision= false;
//  }

//  time() { //tiempo del juego
//    if (this.estado == 12) {
//      if (this.jugando) {
//        this.tiempo += deltaTime / 1000;
//        let tiempoRestante = this.duracion - this.tiempo;
//        if (tiempoRestante <= 0) {
//          this.jugando = false;
//          this.estado = "perdiste";
//        }
//        fill(255);
//        textSize(30);
//        let tiempoFormateado = nf(tiempoRestante, 1, 1);
//        text( "        " + tiempoFormateado, 5, 50);
//      }
//    }
//  }

//  reiniciar() { //reinicio variables
//    this.estado = 0;
//    this.raton =  new Ratoncito();
//    this.tacos = [];
//    this.maxTacos= 6;
//    this.interval= 800;
//    this.ultimoTiempoAparicion= 0;
//    this.tiempo=0;
//    this.boton = true;
//    this.duracion=20;
//    this.jugando=true;
//    this.puntos= 0;
//    for (let i=0; i< this.maxTacos; i++) {
//      this.tacos.push(new Zapatos());
//    }
//  }
//}
