function obtenerNumero()
{
    var numero_introducido;

        var input_numero = document.getElementById ("numero");
        numero_introducido = input_numero.value; 

    return numero_introducido;
}


function informarSiPar(numero)
{
    var resultado;
    resultado = numero % 2;
        if (resultado == 0)
        {
            window.alert("El número "+numero+" es par");
        }
        else
        {
            window.alert("El número "+numero+" no es par");
        }
}




function comprobarNumeroPar()
{
    console.log("Ha tocado validar");
    let numero = obtenerNumero();
    console.log("El número introducido es " + numero);
    informarSiPar(numero);
}

/*
Obtener número
Comprobar si el número es par
Informar de si el número es par o no
*/
