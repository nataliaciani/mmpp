class Aventura {
  constructor(estado) {
    this.botoncito= new Boton();
    this.estado= 0;
    //this.juegop= new Juego();
    //this.e= 200;
    //this.d=50;
  }
  dibujar(imgArray, textos, m, b, estado) {
    if (this.estado == 0) {
      image(imgArray[0], 0, 0);
      this.botoncito.dibujar(imgArray[16], 500, 300); //dibujo la imagen llamando el metodo y le agrego el indice del array
      fill(255);
      textSize(40);
      text(textos[15], 150, 500);
    } else if (this.estado == 1 ) {
      image(imgArray[1], 0, 0);
      this.botoncito.dibujar(imgArray[16], 500, 300);
      this.visual(20, 0, 490, 600, 100);
      text(textos[0], 10, 500, 600);
    } else if (this.estado == 2 ) {
      image(imgArray[2], 0, 0);
      this.botoncito.dibujar(imgArray[16], 500, 300);
      this.visual(20, 0, 490, 600, 100);
      text(textos[1], 10, 500, 600);
    } else if (this.estado == 3 ) {
      image(imgArray[3], 0, 0);
      this.botoncito.dibujar(imgArray[16], 500, 300);
      this.visual(20, 0, 490, 600, 80);
      text(textos[2], 5, 500, 600);
    } else if (this.estado == 4 ) {
      image(imgArray[4], 0, 0);
      this.botoncito.dibujar(imgArray[16], 500, 300);
      this.visual(20, 0, 495, 600, 100);
      text(textos[3], 10, 500, 600);
    } else if (this.estado == 5 ) {
      image(imgArray[5], 0, 0);
      this.botoncito.dibujar(imgArray[16], 500, 300);
      this.visual(20, 0, 490, 600, 100);
      text(textos[4], 10, 500, 600);
    } else if (this.estado == 6 ) {
      image(imgArray[6], 0, 0);
      //image(imgArray[17],20,305);
      //image(imgArray[18],510,305);
      this.botoncito.dibujar(imgArray[17], 20, 305, this.estado);
      this.botoncito.dibujar(imgArray[18], 510, 305, this.estado);
      this.visual(20, 0, 490, 590, 70);
      text(textos[5], 10, 500, 600);
    } else if (this.estado == 7 ) {
      image(imgArray[7], 0, 0);
      this.visual(20, 0, 490, 600, 100);
      text(textos[6], 10, 500, 600);
      this.botoncito.dibujar(imgArray[16], 500, 300);
    } else if (this.estado == 8 ) {
      image(imgArray[11], 0, 0); // decision
      this.visual(20, 0, 490, 598, 80);
      text(textos[10], 5, 500, 600);
      this.botoncito.dibujar(imgArray[16], 500, 300);
    } else if (this.estado ==9 ) {
      image(imgArray[8], 0, 0);
      this.visual(20, 0, 490, 598, 80);
      text(textos[7], 5, 500, 600);
      this.botoncito.dibujar(imgArray[16], 500, 300);
    } else if (this.estado ==10 ) {
      image(imgArray[9], 0, 0);
      this.visual(20, 0, 500, 610, 90);
      text(textos[8], 5, 510, 600);
      this.botoncito.dibujar(imgArray[16], 500, 300);
    } else if (this.estado ==11 ) {
      image(imgArray[12], 0, 0);
      this.visual(20, 0, 490, 598, 60);
      text(textos[11], 3, 500, 700);
      this.botoncito.dibujar(imgArray[19], 500, 520);
    } else if (this.estado ==12) { //aca va el juego!!
    background(200,0,0);
      //this.juegop.dibujar(imgArray, textos);
      //this.juegop.teclado(imgArray);
      //this.juegop.actualizar();
      //this.juegop.time();
    }
  }
  botonPresionado() {
    if (this.botoncito.inicio (530, 340, 20) && (this.estado==0)) {
      this.botoninicio= true;
      this.estado = 1;
    } else if (this.botoncito.inicio (530, 340, 20) && (this.estado ==1)) {
      this.botoninicio = true;
      this.estado= 2;
    } else if (this.botoncito.inicio (530, 340, 20) &&(this.estado ==2)) {
      this.botoninicio = true;
      this.estado= 3;
    } else if (this.botoncito.inicio (530, 340, 20)&&(this.estado ==3)) {
      this.botoninicio = true;
      this.estado= 4;
    } else if (this.botoncito.inicio (530, 340, 20) && (this.estado ==4)) {
      this.botoninicio = true;
      this.estado= 5;
    } else if (this.botoncito.inicio (530, 340, 20) && (this.estado ==5)) {
      this.botoninicio = true;
      this.estado= 6;
    } else if (this.botoncito.inicio(550, 340, 20) && (this.estado ==6)) {//opcion
      this.botoninicio=true;
      this.estado=7;
    } else if (this.botoncito.inicio(50, 340, 20) && (this.estado ==6)) {//opcion
      this.botoninicio=true;
      this.estado=8;
    } else if (this.botoncito.inicio (530, 340, 20)&&(this.estado ==7)) {
      this.botoninicio = true;
      this.estado= 9;
    } else if (this.botoncito.inicio (530, 340, 20)&&(this.estado ==9)) {
      this.botoninicio = true;
      this.estado= 10;
    } else if (this.botoncito.inicio (530, 340, 20)&&(this.estado ==8)) {
      this.botoninicio = true;
      this.estado= 11;
    } else if (this.botoncito.inicio (530, 560, 20)&&(this.estado ==11)) {
      this.botoninicio = true;
      this.estado= 0;
    } else if (this.botoncito.inicio (530, 340, 20)&&(this.estado ==10)) {
      this.botoninicio = true;
      this.estado= 12;
    } else if (this.botoncito.inicio(530, 560, 20) && (this.estado == 12)) {
      this.botoninicio= true;
      this.estado =12;
      //this.juegop.estado= 12;
    }
  }
  visual(t, a, b, c, d) { //tamaño de la letra, rect (fondo del texto)
    stroke(156, 222, 252);
    fill (0, 128, 255, 150);
    rect (a, b, c, d);
    noStroke();
    fill(0);
    textSize(t);
  }
}
