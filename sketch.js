function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);

  background(30, 33, 61);
  let numeroGlifi = 60;
  let numeroColonne = ceil(sqrt(numeroGlifi)); 
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe * 1.05; //aumento di 1.5 la distanza verticale teorica

  //coordinate posizioni iniziali
  let xCorrente = 0;
  let yCorrente = 0;

  for(let g =0; g<numeroGlifi; g++) {
  //ciclo parte da zero, continua finché g è minore di 60, incrementa il contatore a ogni interazione

    mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.8); //aggiungo metà altezza e metà larghezza per posizionare il glifo al centro della cella
    xCorrente = xCorrente + dimColonna; //passo a colonna successiva

    if(xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga*1.05;
    }
    //if controlla se coordinata x ha raggiunto o superato larghezza finestra
    //se la condizione è vera, x torna a 0
    //y aumenta, facendo iniziare una nuova riga
  } 
}

function mioGlifo(x, y, size) {
  push();
  translate(x, y); //sposta origine delle coordinate al centro del glifo

  // palette di colori
  let colori = [
    color(249, 255, 233),
    color(254, 160, 109),
    color(237, 226, 115),
    color(36, 194, 229),
    color(65, 37, 167),
    color(201, 54, 56)
  ];

  // ordine casuale dei colori per ogni glifo
  shuffle(colori, true);

  // dimensioni casuali dei cerchi
  let d1 = random(size * 0.85, size); //dimensione random compresa tra min (primo valore) e max (secondo valore)
  let d2 = random(d1 * 0.78, d1 * 0.90);
  let d3 = random(d2 * 0.72, d2 * 0.88);
  let d4 = random(d3 * 0.65, d3 * 0.82);
  let d5 = random(d4 * 0.55, d4 * 0.75);
  let d6 = random(d5 * 0.45, d5 * 0.70);

  noStroke();

  // cerchio principale
  fill(colori[0]);
  circle(0, 0, d1); //cerchio centrato nell'origine con diametro d1

  // anelli concentrici
  fill(colori[1]);
ellipse(
  random(-size * 0.03, size * 0.03),
  random(-size * 0.03, size * 0.03),
  d2,
  d2 * random(0.95, 1.05)
); //coordinate x e y che fanno spostare centro in modo casuale

  fill(colori[2]);
 ellipse(0, 0, d3, d3 * random(0.95, 1.05));

  fill(colori[3]);
ellipse(
  random(-size * 0.05, size * 0.05),
  random(-size * 0.05, size * 0.05),
  d4,
  d4 * random(0.95, 1.05)
);

  fill(colori[4]);
  ellipse(0, 0, d5, d5 * random(0.95, 1.05));

  fill(colori[5]);
  ellipse(0, 0, d6, d6 * random(0.95, 1.05));


  // triangoli 
  let numeroTriangoli = int(random(2, 4)); //prendo numero intero compreso tra questi

  for (let i = 0; i < numeroTriangoli; i++) {
  push(); //se numeroTriangoli vale 2, il ciclo viene eseguito due volte, se vale 3, viene eseguito tre volte. ogni iterazione crea un triangolo in una posizione e con una rotazione diverse

  // posizione triangoli variabile, anche oltre il bordo dei cerchi
  let angolo = random(360);
  let distanza = random(size * 0.28, size * 0.58);

  rotate(angolo); //ruota attorno al glifo
  translate(distanza, 0); //sposto origine su nuovo asse x
  rotate(random(360)); //ruota il triangolo sul posto: la sua orientazione non dipende solo dalla posizione del cerchio

  // dimensioni più importanti
  let dimensione = random(size * 0.14, size * 0.27);

  noStroke();

  // triangolo esterno
  fill(random(colori));
  triangle(
    0, -dimensione,
    -dimensione * 0.85, dimensione * 0.65,
    dimensione * 0.85, dimensione * 0.65
  ); //tre vertici, coordinate

  // triangolo interno più piccolo
  fill(random(colori));
  triangle(
    0, -dimensione * 0.55,
    -dimensione * 0.47, dimensione * 0.35,
    dimensione * 0.47, dimensione * 0.35
  ); //triangolo più piccolo, coordinate proporzionali al primo

  pop();
}

  
  pop();
}