const ipad= window.matchMedia("screen and (max-width: 767px")
const menu = document.querySelector(".menu");
const burguerButton = document.querySelector(".burguer-button");
const body = document.querySelector("body");
const theme = document.getElementById("label");
const items = document.getElementsByClassName("theme");
var circleChart = document.getElementById("circlechart");
var lienzoCChart = circleChart.getContext("2d");
var barras = document.getElementsByClassName("bar");
var themeBool = false;
// console.log(body);

const LOW = 50;
const MEDIUM = 100;
const ADVANCE = 180;

const indiceBar = {
  HTML: 0,
  CSS: 1,
  JS: 2,
  JAVA: 3,
  GIT: 4,
  PHP: 5,
  ANGULAR: 6,
  REACT: 7,
  NODE:8,
  MYQSL: 9,
  SASS: 10,
  PUG: 11
};
const rWidth= 10, rHeight=10;
var maxX = circleChart.width - 1, maxY = circleChart.height - 1,
      pixelSize = Math.max(rWidth/maxX, rHeight/maxY),
      centerX = maxX/2, centerY = maxY/2;
      
function iX( x){return Math.round(centerX + x/pixelSize);}
function iY( y){return Math.round(centerY - y/pixelSize);}
    
function dibujoCChart(theme){
  lienzoCChart.beginPath();
  if(theme){
    circleChart.style.backgroundColor = 'rgb(68,53,68)';
    lienzoCChart.strokeStyle = 'white';
    lienzoCChart.fillStyle = 'white';
  }else{
    circleChart.style.backgroundColor = 'rgb(220,229,225)';
    lienzoCChart.strokeStyle = 'black';
    lienzoCChart.fillStyle = 'black';
  }
  
  lienzoCChart.arc(iX(0), iY(0), Math.abs(iX(4)-iX(0)), 0,2*Math.PI, false);
  lienzoCChart.stroke();

  lienzoCChart.fillText("AUTODIDACTA 25%", iX(2), iY(3.7));
  lienzoCChart.fillText("Estar a la vanguardia y nunca ", iX(2.7), iY(3.1));
  lienzoCChart.fillText("dejar de aprender, me define", iX(3.1), iY(2.7));

  lienzoCChart.fillText("DINAMICO 15%", iX(4), iY(1.2));
  lienzoCChart.fillText("Moverse, fisica y tecnologica-", iX(4), iY(0.6));
  lienzoCChart.fillText("mente, cada dia es mas facil.", iX(4.1), iY(.2));

  lienzoCChart.fillText("CREATIVO 20%", iX(3.5), iY(-2.3));
  lienzoCChart.fillText("Usar la imaginación para generar", iX(3.1), iY(-2.9));
  lienzoCChart.fillText("ideas originales", iX(2.7), iY(-3.3));

  lienzoCChart.fillText("APASIONADO 20%", iX(-5.3), iY(-2.8));
  lienzoCChart.fillText("La satisfaccion y orgullo de ", iX(-5.5), iY(-3.4));
  lienzoCChart.fillText("generar el resultado deseado", iX(-5), iY(-3.8));

  lienzoCChart.fillText("INGENIOSO 20%", iX(-5.6), iY(2.2));
  lienzoCChart.fillText("Realizar aquello que hemos ideado", iX(-7.7), iY(1.6));
  lienzoCChart.fillText("de forma creativa para volverlo", iX(-7.5), iY(1.2));
  lienzoCChart.fillText("realidad", iX(-5), iY(0.8));

  changeArc('rgb(255,118,96) ', 0,(2*Math.PI/100)*22, 2.5, -2.5, 6, -2.5);
  changeArc( 'rgb(77,203,163)', (2*Math.PI/100)*22,(2*Math.PI/100)*45, -1.7, -3, -6, -3);
  changeArc( 'rgb(169,92,183)', (2*Math.PI/100)*45,(2*Math.PI/100)*66, -3, 2, -7, 2);
  
  changeArc('rgb(133,176,239)', (2*Math.PI/100)*66,(2*Math.PI/100)*88, 0.5, 3.5, 6, 3.5);
  changeArc('rgb(208,238,108)', (2*Math.PI/100)*88,2*Math.PI/100, 3.5,1, 7, 1);
 }

 function changeArc(style, ang1, ang2, x1, y1, x2, y2){
  lienzoCChart.lineWidth = 20;
  lienzoCChart.beginPath();
  lienzoCChart.strokeStyle = style;
  lienzoCChart.arc(iX(0), iY(0), Math.abs(iX(3)-iX(0)), ang1, ang2, false);
  lienzoCChart.stroke();
  lienzoCChart.lineWidth = 2;
  lienzoCChart.beginPath();
  lienzoCChart.moveTo(iX(x1), iY(y1));
  lienzoCChart.lineTo(iX(x2), iY(y2));
  lienzoCChart.stroke();
 }
burguerButton.addEventListener('click', hideShow);
theme.addEventListener('click', changeTheme);
ipad.addListener(validation);

function hideShow(){
  if(menu.classList.contains("is-active"))
    menu.classList.remove("is-active");
  else
    menu.classList.add("is-active");
}

function validation(event ){
  if(event.matches)
    burguerButton.addEventListener('click', hideShow);
  else
    burguerButton.removeEventListener('click', hideShow);
}

function dibujoBarra(tipoBarra, level, valida){
  // Create gradient
  var grd = tipoBarra.createLinearGradient(0, 0, level, 0);
  grd.addColorStop(0, 'rgb(88,196,159)');
  grd.addColorStop(1, "white");
  if(valida){
    tipoBarra.fillStyle = 'rgb(68,53,68)';
  }else{
    tipoBarra.fillStyle = 'rgb(220,229,225)';
  }
  tipoBarra.fillRect(0, 0, 200, 20);
  // Fill with gradient
  tipoBarra.fillStyle = grd;
  tipoBarra.fillRect(0, 0, (level===MEDIUM?level*1.3:level), 20);
 }

 function changeTheme(){
    if(theme.innerText === "Dark theme"){
      theme.innerText = "Light theme";
      themeBool = true;
      console.log("cambie");
      Array.prototype.forEach.call(items, item => {
        item.style.backgroundColor = 'rgb(68,53,68)';
      })
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    }
    else{
      theme.innerText = "Dark theme";
      themeBool = false;
      Array.prototype.forEach.call(items, item => {
        item.style.backgroundColor = 'rgb(220,229,225)';
      })
      body.style.backgroundColor = 'rgb(240,249,245)';
      body.style.color = 'black';
    }
    dibujaTodo();  
 }

 function dibujaTodo(){
  dibujoCChart(themeBool);
  dibujoBarra(barras[indiceBar.ANGULAR].getContext("2d"), LOW, themeBool);
  dibujoBarra(barras[indiceBar.CSS].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.GIT].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.HTML].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.JAVA].getContext("2d"), ADVANCE, themeBool);
  dibujoBarra(barras[indiceBar.JS].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.SASS].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.PUG].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.MYQSL].getContext("2d"), MEDIUM, themeBool);
  dibujoBarra(barras[indiceBar.NODE].getContext("2d"), LOW, themeBool);
  dibujoBarra(barras[indiceBar.PHP].getContext("2d"), LOW, themeBool);
  dibujoBarra(barras[indiceBar.REACT].getContext("2d"), LOW, themeBool);
 }
 //BLOQUE PRINCIPAL
 changeTheme();
 validation(ipad);

 

//  dibujoBarra(lienzoKBar, MEDIUN);
//  dibujoBarra(lienzoKBar, MEDIUN);
//  dibujoBarra(lienzoKBar, MEDIUN);
//  dibujoBarra(lienzoKBar, MEDIUN);
//  dibujoBarra(lienzoKBar, MEDIUN);
//  dibujoBarra(lienzoKBar, MEDIUN);
//  dibujoBarra(lienzoKBar, MEDIUN);
 