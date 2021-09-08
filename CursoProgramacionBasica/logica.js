var d = document.getElementById("grafica");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

while(l < lineas)
{
    yi = 10*l;
    xf = 10 * (l+1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    l +=1;
    console.log(l);
}
l = 0;
while(l < lineas)
{
    yi = 10*l;
    xf = 10 * (l+1);
    dibujarLinea("#AAF", 300, yi, xf, 0);
    l +=1;
    console.log(l);
}
l = 0;
yi =300;
xf = 0;
while(l < lineas)
{
    yi = yi - 10;
    xf = xf + 20;
    dibujarLinea("#AAF", 0, yi, xf, 300);
    l +=1;
    console.log(l);
}

dibujarLinea("#AFA", 1, 1, 1, 300 );
dibujarLinea("#AFA", 1, 299, 299, 299 );

function dibujarLinea(color, xinicial, xFinal, yInicial, yFinal)
{
    lienzo.beginPath();
    lienzo.srtrokeStyle = color;
    lienzo.moveTo(xinicial, yInicial); 
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}