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

function recorrerLetra(palabra,letra)
{
    var existe = false;

        for (var indice=0; indice<palabra.length; indice++)
        {
           if (palabra[indice]==letra)
           {
               existe=true;
               break;    
           }
        }
    return existe;
}

/*
function recorrerLetra(palabra, letra)
{
    var existe = false;
    var palabra_array = Array.from(palabra);
       
        palabra_array.forEach(caracter=>{
        if (caracter == letra)
        { existe = true; }
        })
    return existe;
}
*/

function mostrarResultado (palabra, letra, encontrada)
{
    if (encontrada == true)
    {
        window.alert ("La palabra " + palabra + " contiene la letra " + letra);
    }
    else
    {
        window.alert ("La palabra " + palabra + " no contiene la letra " + letra);
    }
}


function comprobarLetra()
{
    console.log("Ha tocado validar");
    let palabra = obtenerPalabra();
    console.log("La palabra introducida es " + palabra);
    let letra = obtenerLetra();
    console.log("La letra intoducida es " + letra);
    let encontrada = recorrerLetra(palabra,letra);
    mostrarResultado (palabra, letra, encontrada);
}

/*
Obtener palabra
Obtener letra
Comprobar si la letra está en la palabra
Informar de si está o no está
*/
