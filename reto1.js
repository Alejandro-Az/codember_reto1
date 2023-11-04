//Almaceno el mensaje en una variable, lo convierto a minusculas y finalmente lo cambio a un array.
let mensaje = "murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco tigre jaguar leopardo oso lobo zorro mapache ardilla elefante rinoceronte hipopotamo cebra jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago flamenco pinguino tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon";
mensaje.toLowerCase();
let mensajeSplit = mensaje.split(" ");

/* 
    Primero creo un arreglo vacío para separar y almacenar una copia de cada palabra que hay en el mensaje original.
    Luego, creo un bucle con el cual voy almacenando las palabras del mensaje original, la condicional comprueba
    si la palabra de la iteración actual ya existe en el arreglo, para que no almacene de más pues el objetivo
    es separarlas...
*/
let arregloSeparado = [];

for(let palabra in mensajeSplit) {
    if(!arregloSeparado.includes(mensajeSplit[palabra])) {
        arregloSeparado.push(mensajeSplit[palabra]);
    }
}

/*
    Finalmente, inicializo un contador y una cadena vacía para ir contando las palabras y para poder
    guardar la cadena resultante respectivamente.

    Posteriormente, el bucle for itera a lo largo del arreglo que tiene las palabras separadas y el bucle for in
    va comprobando cada palabra y suma al contador la cantidad de veces que esa palabra se repite.

    Para concluir, creo la cadena concatenando la palabra actual y la cantidad de veces que se
    repite la palabra a manera que satisfaga el requisito del reto y listo, solo reinicio el contador
    para que cuente la cantidad de veces de la palabra siguiente nun/✨

*/

let contador = 0;
let cadena = "";

for(let i = 0; i != arregloSeparado.length; i++) {
    for(let palabra in mensajeSplit) {
        if(mensajeSplit[palabra] == arregloSeparado[i]) {
            contador++;
        }
    }
    cadena += arregloSeparado[i] + contador;
    contador = 0;
}

console.log(cadena);