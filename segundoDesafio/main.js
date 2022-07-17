// Simulacion de batalla pokemon

class Pokemon{
    constructor(nombre, numero, tipo, ataque, hp, rival, hpMax){
        this.nombre = nombre;
        this.numero = numero;
        this.tipo = tipo;
        this.ataque = ataque;
        this.hp = hp;
        this.rival = rival;
        this.hpMax = hpMax;
    }
}

class Objetos{
    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

const bulbasaur = new Pokemon("bulbasaur", 01, "planta", 4, 22, "charmander", 22);
const charmander = new Pokemon("charmander", 04, "fuego", 6, 18, "squirtle", 18);
const squirtle = new Pokemon("squirtle", 07, "agua", 8, 16, "bulbasaur", 16);

function curarPokemon(primerPokemon){
    primerPokemon.hp = primerPokemon.hpMax;
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function elegirPokemon(opcion, inicial){
    let elegido;
    while((opcion >= 1 || opcion <= 3)  && pokemonInicial == false) {
        switch (opcion) {
            case 1:
                alert("Has elegido a " + bulbasaur.nombre + " el pokemon tipo " + bulbasaur.tipo);
                pokemonInicial = true;
                elegido = bulbasaur;
                break;
            case 2:
                alert("Has elegido a " + charmander.nombre + " el pokemon tipo " + charmander.tipo);
                pokemonInicial = true;
                elegido = charmander;
                break;
            case 3:
                alert("Has elegido a " + squirtle.nombre + " el pokemon tipo " + squirtle.tipo);
                pokemonInicial = true;
                elegido = squirtle;
                break;
            default:
                alert("No es momento para estupideces. Elegi tu pokemon.");
                break;
        }
        if(pokemonInicial == false){
            opcion = parseInt(prompt("Te los repito: \n1 - Bulbasaur \n2 - Charmander \n3 - Squirtle"));
        }
    }
    return elegido;
}

function elegirPokemonRival(primerPokemon){
    if(primerPokemon.nombre == "bulbasaur"){
        return charmander;
    } else if (primerPokemon.nombre == "charmander"){
        return squirtle;
    } else if(primerPokemon.nombre == "squirtle"){
        return bulbasaur;
    }
}

function batallaPokemon(primerPokemon, pokemonRival){
    let opcionPelea;
    let numeroRandom;
    while(primerPokemon.hp >= 0 && pokemonRival.hp >= 0){
        opcionPelea = prompt("1 - Atacar\n2 - Defenderse");
        numeroRandom = randomInt(3);
        if(numeroRandom == 0){
            pokemonRival.hp = pokemonRival.hp - primerPokemon.ataque;
            if(pokemonRival.hp >= 1){
                alert("Tu pokemon golpeo primero y dejo con " + pokemonRival.hp + " de vida a " + pokemonRival.nombre);
            } else {
                alert("Tu pokemon golpeo primero y dejo con " + 0 + "de vida a " + pokemonRival.nombre);
                alert("¡" + pokemonRival.nombre + " a sido derrotado!");
            }
        } else if(numeroRandom == 1){
            primerPokemon.hp = primerPokemon.hp - pokemonRival.ataque;
            if(primerPokemon.hp >= 1){
                alert("El pokemon rival te golpeo primero y dejo con " + primerPokemon.hp + " de vida a " + primerPokemon.nombre);
            } else {
                alert("El pokemon rival te golpeo primero y dejo con " + 0 + "de vida a " + primerPokemon.nombre);
                alert("¡" + primerPokemon.nombre + " a sido derrotado!");
            }
        } else {
            alert("Ninguno de los pokemon resulto herido.");
        }
    }
    if(primerPokemon.hp > pokemonRival.hp){
        return primerPokemon;
    } else if(pokemonRival.hp > primerPokemon.hp){
        return pokemonRival;
    }
}

function ruta01(numeroRandom, primerPokemon, ganador){
    const pidgey = new Pokemon("Pidgey", 16, "Volador", 4, 10, "", 10);
    const rattata = new Pokemon("Rattata", 19, "Normal", 4, 10, "", 10);
    const largoDeRuta = [1,2,3,4,5];
    alert("La ruta tiene un largo de 5 casilleros. Pueden aparecer o no pokemon por cada casillero que avances. Si tu pokemon tiene poca vida, curalo con una pocion de tu mochila.");
    alert("Si tu pokemon se queda sin vida, vas a volver a empezar!");
    let curar;
    for (let i = 0; i < largoDeRuta.length; i++) {
        numeroRandom = randomInt(3);
        if (numeroRandom == 0) {
            alert("¡Un " + pidgey.nombre + " salvaje a aparecido!");
            ganador = batallaPokemon(primerPokemon, pidgey);
            if(ganador.nombre == primerPokemon.nombre){
                alert("¡" + primerPokemon.nombre + " gano el combate!");
                pidgey.hp = 10;
            } else {
                alert("¡" + primerPokemon.nombre + " perdio el combate!");
                return ganador;
            }
        } else if(numeroRandom == 1){
            alert("¡Un " + rattata.nombre + " salvaje a aparecido!");
            ganador = batallaPokemon(primerPokemon, rattata);
            if(ganador.nombre == primerPokemon.nombre){
                alert("¡" + primerPokemon.nombre + " gano el combate!");
                rattata.hp = 10;
            } else {
                alert("¡" + primerPokemon.nombre + " perdio el combate!");
                return ganador;
            }
        } else {
            alert("Ningun pokemon aparecio...");
        }
        curar = prompt("¿Queres curar a " + primerPokemon.nombre + " con una pocion?\nsi\nno");
        if(curar == "si"){
            curarPokemon(primerPokemon);
            alert("El hp de " + primerPokemon.nombre + " ahora es de " + primerPokemon.hp);
        }
    }
    alert("¡Felicidades superaste la ruta 01!");
    return ganador;
}

let opcion = parseInt(prompt("Elegi sabiamente a tu pokemon: \n1 - Bulbasaur \n2 - Charmander \n3 - Squirtle"));
let pokemonInicial = false;
let primerPokemon = elegirPokemon(opcion, pokemonInicial);
let pokemonRival = elegirPokemonRival(primerPokemon);

alert("¡Un rival aparecio y eligio a " + pokemonRival.nombre + "!");

let ganador = batallaPokemon(primerPokemon, pokemonRival);

if(ganador.nombre == primerPokemon.nombre){
    alert("¡Tu pokemon gano la batalla!");
    alert("Muy bien ganaste tu primer combate, ahora tenes que empezar tu viaje!¡Vamos a curar a tu pokemon!");
    alert("Tu proximo destino es la ruta 1!\n¡Recibiste 5 pociones y 5 pokebolas!\n¡La energia de tu pokemon fue restaurada!");
} else {
    alert("¡El pokemon rival gano la batalla!");
    alert("Perdiste tu primer combate, pero no te preocupes curaremos a tu pokemon para que puedas continuar. ¡La practica lleva a la perfeccion!");
    alert("Tu proximo destino es la ruta 1!\n¡Recibiste 5 pociones y 5 pokebolas!\n¡La energia de tu pokemon fue restaurada!");
}

curarPokemon(primerPokemon);

/*****  RUTA 01 *****/

const pocion = new Objetos("Pocion", 0);
const pokebola = new Objetos("Pokebola", 0);
pocion.cantidad = 5;
pokebola.cantidad = 5;

let numeroRandom = 0;
ganador = ruta01(numeroRandom, primerPokemon, ganador);
curarPokemon(primerPokemon);

while (ganador.nombre != primerPokemon.nombre) {
    ganador = ruta01(numeroRandom, primerPokemon, ganador);
    curarPokemon(primerPokemon);
}
