function obtenerPalabra()
{
    var palabra_introducida;

        var input_palabra = document.getElementById ("palabra");
        palabra_introducida = input_palabra.value; 

    return palabra_introducida;
}

function voltearPalabra(palabra)
{
    var indice = palabra.length-1;
    var palabra_volteada="";

        for (indice; indice>=0; indice--)
        {
        palabra_volteada += palabra[indice]
        }
    return palabra_volteada;
}

function palabraInversa()
{
    console.log("Ha tocado validar");
    let palabra = obtenerPalabra();
    console.log("La palabra introducida es " + palabra);
    let palabra_nueva = voltearPalabra(palabra);
    window.alert(palabra_nueva);

}

/*
Obtener palabra
Poner las letras de la palabra del revés
Mostrar en pantalla
*/
