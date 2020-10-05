var captura;

function setup() {
  createCanvas(640, 480);
  //criar a captura de video
  captura = createCapture(VIDEO);
  captura.size(640, 480);
  //usar o comando hide porque a captura é um elemento separado no DOM
  //delete a linha abaixo para ver a diferença
  captura.hide();
}

function draw() {
  //colocar a imagem da captura no canvas
  image(captura, 0, 0, 640, 480);
}
