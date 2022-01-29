function obtenerPalabra()
{
    var palabra_introducida;

        var input_palabra = document.getElementById ("palabra");
        palabra_introducida = input_palabra.value.toUpperCase(); 

    return palabra_introducida;
}

function obtenerLetra()
{
    var letra_introducida;

        var input_letra = document.getElementById ("letra");
        letra_introducida = input_letra.value.toUpperCase();

    return letra_introducida;
}



function mostrarResultado (palabra, letra, encontrada)
{
    if (encontrada == "-1")
    {
        window.alert ("La palabra " + palabra + " no contiene la letra " + letra);
    }
    else
    {
        window.alert ("La palabra " + palabra + " contiene la letra " + letra);
    }
}


function comprobarLetra()
{
    console.log("Ha tocado validar");
    let palabra = obtenerPalabra();
    console.log("La palabra introducida es " + palabra);
    let letra = obtenerLetra();
    console.log("La letra intoducida es " + letra);
    let encontrada = palabra.indexOf(letra);
    mostrarResultado (palabra, letra, encontrada);
}

/*
Obtener palabra
Obtener letra
Comprobar si la letra está en la palabra
Informar de si está o no está
*/
