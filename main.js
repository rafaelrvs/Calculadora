function insert(Numero)
{
 var valor = document.getElementById('Resultado').innerHTML;
 document.getElementById('Resultado').innerHTML = valor + Numero;

}
function clean()
{
    document.getElementById('Resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function calcular()
{
var resultado = document.getElementById('Resultado').innerHTML;
if(resultado)
{
    document.getElementById('Resultado').innerHTML = eval(resultado)

}
else
{
    document.getElementById('Resultado').innerHTML = "Erro";

}


}