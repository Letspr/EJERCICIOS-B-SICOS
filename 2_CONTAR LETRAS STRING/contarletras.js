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

function contarEnString(palabra,letra)
{
    var numero = 0;

        for (var indice=0; indice<palabra.length; indice++)
        {
           if (palabra[indice]==letra)
           {
               numero++;   
           }
        }
    return numero;
}

/*
function contarEnString(palabra, letra)
{
    var numero = 0;
    var palabra_array = Array.from(palabra);
       
        palabra_array.forEach(caracter=>{
        if (caracter == letra) { numero ++; }
        })
    return numero;
}
*/

function mostrarResultado (palabra, letra, numero)
{
    if (numero == "0")
    {
        window.alert ("La letra " + letra + " no está en la palabra " + palabra);
    }
    else if (numero == "1")
    {
        window.alert ("La letra " + letra + " aparece " + numero + " vez en la palabra " + palabra);
    }
    else
    {
        window.alert ("La letra " + letra + " aparece " + numero + " veces en la palabra " + palabra);
    }
}


function contarLetras()
{
    console.log("Ha tocado validar");
    let palabra = obtenerPalabra();
    console.log("La palabra introducida es " + palabra);
    let letra = obtenerLetra();
    console.log("La letra intoducida es " + letra);
    let numero_veces = contarEnString(palabra,letra);
    mostrarResultado (palabra, letra, numero_veces);
}

/*
Obtener palabra
Obtener letra
Contar el número de veces que aparece la letra en la palabra
Informar del número de veces, o de si no aparece
*/
