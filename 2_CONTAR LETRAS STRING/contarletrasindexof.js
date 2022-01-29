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

function numeroVecesLetra (palabra, letra)
{
    let indice = -1;
    let suma = 0;
    while(true) {
        indice = palabra.indexOf(letra, indice + 1);
        if (indice < 0) {
            break;
        } else {
            suma++;
        }
    }
    return suma;
}


function mostrarResultado (palabra, letra, numero_veces)
{
    if (numero_veces==0)
    {
        window.alert ("La palabra " + palabra + " no contiene la letra " + letra);
    }
    else if (numero_veces==1)
    {
        window.alert ("La palabra " + palabra + " contiene la letra " + letra + " " + numero_veces + " vez");
    }
    else 
    {
        window.alert ("La palabra " + palabra + " contiene la letra " + letra + " " + numero_veces + " veces");
    }
}


function contarLetras()
{
    console.log("Ha tocado validar");
    let palabra = obtenerPalabra();
    console.log("La palabra introducida es " + palabra);
    let letra = obtenerLetra();
    console.log("La letra intoducida es " + letra);
    let numero_veces = numeroVecesLetra (palabra, letra);
    mostrarResultado (palabra, letra, numero_veces);
}

/*
Obtener palabra
Obtener letra
Comprobar el número de veces que está la letra en la palabra
Informar 
*/
