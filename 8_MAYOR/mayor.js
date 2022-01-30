function obtenerNumero(id)
{
    return parseInt(document.getElementById(id).value); 
}


function hallarMayor(array)
{
    var mayor = array[0];

        for (var indice=1; indice<array.length; indice++)
        {
           if (array[indice]>mayor)
           {
               mayor = array [indice];   
           }
        }
    return mayor;
}


function obtenerMayor()
{
    console.log("Ha tocado validar");
    let numero1 = obtenerNumero("numero1");
    console.log("El primer número es " + numero1);
    let numero2 = obtenerNumero("numero2");
    console.log("El segundo número es " + numero2);
    let numero3 = obtenerNumero("numero3");
    console.log("El tercer número es " + numero3);
    let mayor = hallarMayor([numero1,numero2,numero3]);
    window.alert("El número mayor es " + mayor);
}

