let x, y;
let diamparticula;
let velX, velY;
let gravedadparticula = 9.8;
let formaparticula = 0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(77, 25, 77);

  // Dividir el fomdo en cuatro partes
  let mitadX = width / 2;
  let mitadY = height / 2;
  stroke(77, 25, random(77, 155));
  line(mitadX, 0, mitadX, height); // Línea vertical
  line(0, mitadY, width, mitadY); // Línea horizontal

  // modulos para cambiar de forma
  switch (formaparticula) {
    case 0: //circulo inical
      noStroke(255);
      fill(39, 38, 64);
      ellipse(x, y, diamparticula);
      break;
    case 1: //cuadrado
      noStroke(255);
      fill(20, 69, 82);
      rect(
        x - diamparticula / 2,
        y - diamparticula / 2,
        diamparticula,
        diamparticula
      );
      break;
    case 2: //triangulo
      noStroke(255);
      fill(0, 100, 102);
      triangle(
        x,
        y - diamparticula / 2,
        x - diamparticula / 2,
        y + diamparticula / 2,
        x + diamparticula / 2,
        y + diamparticula / 2
      );
      break;
    case 3: //gota
      noStroke(255);
      fill(11, 82, 91);
      rect(
        x - diamparticula / 2,
        y - diamparticula / 2,
        diamparticula,
        diamparticula,
        0,
        20,
        20,
        20
      );
      break;
  }

  // Mover la forma crwada,
  velY += gravedadparticula * 0.01;
  y += velY;
  x += velX;

  // para cambiar las formas con los modulos
  if (x < width / 2 && y < height / 2) {
    formaparticula = 0; // primer cuadrante=circulo
  } else if (x > width / 2 && y < height / 2) {
    formaparticula = 1; // Segundo cuadrante = cuadrado
  } else if (x < width / 2 && y > height / 2) {
    formaparticula = 2; // Tercer cuadrante=triangulo
  } else {
    formaparticula = 3; // Cuarto cuadrante gota
  }

  // Rebotar en los bordes horizontal y vertical
  if (
    (x > width - diamparticula / 2 && velX > 0) ||
    (x < diamparticula / 2 && velX < 0)
  ) {
    velX *= -1;
  }
  if (y > height - diamparticula / 2) {
    velY *= -0.8;
    y = height - diamparticula / 2; //suelo para que la froma reboter
  }
}
//funcion para crear la particula en la parte superior cada que hacemos click, tamaño aleatorio
function mouseClicked() {
  x = mouseX;
  y = 0;
  diamparticula = random(20, 40);

  // Velocidades para que la forma rebote a 45 grados
  let angle = random(PI / 4, PI / 2);
  velX = cos(angle) * 5;
  velY = sin(angle) * 5;
}
