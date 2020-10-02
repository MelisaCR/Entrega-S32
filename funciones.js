var imagen=document.getElementById('imagen');
var sumita=document.getElementById('suma');
var bsuma=document.getElementById('botonsuma');
var restica=document.getElementById('resta');
var sol=document.getElementById('solucion');
var bresta=document.getElementById('botonresta');
var x=document.getElementById('x');
var num1=document.getElementById('n1');
var num2=document.getElementById('n2');
var num3=document.getElementById('n3');
var r=document.getElementById('resultado');

var definir=function(){
sol.className="solucion";
imagen.className="oculto";
bsuma.className="alo";
bresta.className="ola";
restica.className="resta";
sumita.className="suma";
x.className="x";
}

var mostrar=function(){
imagen.className="imagen";
bsuma.className="botonsuma";
bresta.className="botonresta";
sol.className="solucion";
x.className="x";
restica.className="resta";
sumita.className="suma";
}

var solucionar=function(){
bsuma.className="botonsuma";
bresta.className="botonresta";
imagen.className="oculto";
sol.className="solucionn";
x.className="xx";
restica.className="resta";
sumita.className="suma";
}

var definirsuma=function(){
imagen.className="oculto";
sumita.className="sumaa";
x.className="xx";
}

var definirresta=function(){
imagen.className="oculto";
restica.className="restaa";
x.className="xx";
}


var cerrar=function(){
sol.className="solucion";
imagen.className="oculto";
bsuma.className="alo";
bresta.className="ola";
restica.className="resta";
sumita.className="suma";
x.className="x";
}

var resultar=function(){
 suma=parseInt(num1.value)+parseInt(num2.value)-parseInt(num3.value);
	r.innerHTML=(suma);
}