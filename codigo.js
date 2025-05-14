 let ataqueJugador
 let ataqueEnemigo
 let vidasJugador = 3
 let vidasEnemigo = 3
//aqui se empesara a funciona este juego  se recomienda que se haga en un archivo separado coloccar todas demas funciones y varaibles que se necesiten para el juego y sus mejores metodos de programacion como
//como comentarios para tenerlo como orientacion para el futuro
function iniciarJuego() {
    let botonAnimalJugador = document.getElementById('boton-seleccionar')
    botonAnimalJugador.addEventListener('click', seleccionarAnimalJugador)
    //el boton de seleccionar animal del jugador
   
    // ...existing code...
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    //el boton reiniciar se encarga de reiniciar el juego

     let botonAire = document.getElementById('boton-aire')
    botonAire.addEventListener('click', ataqueAire)
     let botonfuego = document.getElementById('boton-fuego')
    botonfuego.addEventListener('click', ataqueFuego)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonRayo = document.getElementById('boton-rayo')
    botonRayo.addEventListener('click', ataqueRayo)
    //desabilitar los botones de ataque hasta que el jugador seleccione un animal
    botonAire.disabled = true
    botonfuego.disabled = true      
    botonTierra.disabled = true
    botonAgua.disabled = true
    botonRayo.disabled = true
    //desabilitar los botones de ataque hasta que el jugador seleccione un animal
    
}


function seleccionarAnimalJugador() {
    let inputCuervo = document.getElementById('Cuervo 🐦‍⬛')
    let inputDragon = document.getElementById('Dragon 🐉')
    let inputTortuga = document.getElementById('Tortuga 🐢')
    let inputCalamar = document.getElementById('Calamar 🦑')
    let inputAguila = document.getElementById('Aguila 🦅')
    let spanAnimalJugador = document.getElementById('animal-jugador')
   
    //seleccionar la mascota del jugador
    if (inputCuervo.checked){
        spanAnimalJugador.innerHTML = "Cuervo 🐦‍⬛"
         } else if(inputDragon.checked){
        spanAnimalJugador.innerHTML = "Dragon 🐉"
        } else if(inputTortuga.checked){
        spanAnimalJugador.innerHTML = "Tortuga 🐢"
        } else if(inputCalamar.checked){
        spanAnimalJugador.innerHTML = "Calamar 🦑"
        }else if(inputAguila.checked){
        spanAnimalJugador.innerHTML = "Aguila 🦅"
        }else{alert("selcciona un animal, ANIMAL 🤦‍♂️")
            return //si no selecciona un animal no se ejecuta el resto del codigo 
    }
    // habilita los botones de para el combate  una ves seleccionado el animal
    document.getElementById('boton-aire').disabled = false
    document.getElementById('boton-fuego').disabled = false
    document.getElementById('boton-tierra').disabled = false    
    document.getElementById('boton-agua').disabled = false
    document.getElementById('boton-rayo').disabled = false
seleccionarAnimalEnemigo()
}
function seleccionarAnimalEnemigo(){
    let animalAleatorio = aleatorio(1,5)
    let spanAnimalEnemigo = document.getElementById('animal-enemigo')

        if (animalAleatorio == 1) {
            spanAnimalEnemigo.innerHTML = "Cuervo 🐦‍⬛"
        } else if (animalAleatorio == 2) {
            spanAnimalEnemigo.innerHTML = "Dragon 🐉"
        } else if (animalAleatorio == 3) {
            spanAnimalEnemigo.innerHTML = "Tortuga 🐢"
        } else if (animalAleatorio == 4) {
            spanAnimalEnemigo.innerHTML = "Calamar 🦑"
        } else if (animalAleatorio == 5) {
            spanAnimalEnemigo.innerHTML = "Aguila 🦅"
        }
    }
    function ataqueAire(){ataqueJugador = 'aire 🌪️'  
        ataqueAleatorioEnemigo()
         }
    function ataqueFuego(){ataqueJugador = 'fuego 🔥'
        ataqueAleatorioEnemigo()
        }
    function ataqueTierra(){ataqueJugador = 'tierra 🌱' 
        ataqueAleatorioEnemigo()
        }
    function ataqueAgua(){ ataqueJugador = 'agua 🌊' 
        ataqueAleatorioEnemigo()
        }
    function ataqueRayo(){ ataqueJugador = 'rayo ⚡' 
        ataqueAleatorioEnemigo() 
        }

        function ataqueAleatorioEnemigo(){
            let ataqueAleratorio = aleatorio(1,5)

            if (ataqueAleratorio == 1){
                ataqueEnemigo = 'aire 🌪️'
            } else if(ataqueAleratorio == 2){
                ataqueEnemigo = 'fuego 🔥'
            } else if(ataqueAleratorio == 3){
                ataqueEnemigo = 'tierra 🌱'
            } else if(ataqueAleratorio == 4){
                ataqueEnemigo = 'agua 🌊'
            } else if(ataqueAleratorio == 5){
                ataqueEnemigo = 'rayo ⚡'
            }  

            combate()
        }
         function combate(){
            let spanVidasJugador = document.getElementById('vidas-jugador')
            let spanVidasEnemigo = document.getElementById('vidas-enemigo')
            if (ataqueJugador == ataqueEnemigo) {
                crearMensaje("EMPATE 🤝")
            } else if (ataqueJugador == 'aire 🌪️' && ataqueEnemigo == 'fuego 🔥') {
                crearMensaje("GANASTE 🏆")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else if (ataqueJugador == 'fuego 🔥' && ataqueEnemigo == 'tierra 🌱') {
                crearMensaje("GANASTE 🏆")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else if (ataqueJugador == 'tierra 🌱' && ataqueEnemigo == 'agua 🌊') {
                crearMensaje("GANASTE 🏆")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else if (ataqueJugador == 'agua 🌊' && ataqueEnemigo == 'rayo ⚡') {
                crearMensaje("GANASTE 🏆")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else if (ataqueJugador == 'rayo ⚡' && ataqueEnemigo == 'aire 🌪️') {
                crearMensaje("GANASTE 🏆")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else {
                crearMensaje("PERDISTE 😢")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
            }
            revisarVidas()
         }
            function revisarVidas(){
                if (vidasEnemigo == 0) {  
                    crearMensajeFinal("Felicidades, ganaste el juego 🏆")
                } else if (vidasJugador == 0) {    
                    crearMensajeFinal("Lo siento, perdiste el juego 😢")
                }
                
            }
    function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById('mensajes');
        let parrafo = document.createElement('p');
        parrafo.innerHTML = "Tu animal atacó con " + ataqueJugador + " y el enemigo atacó con " + ataqueEnemigo + " - " + resultado;
        sectionMensajes.appendChild(parrafo);
    }
    function crearMensajeFinal(resultadoFinal) {
        let sectionMensajes = document.getElementById('mensajes');
        let parrafo = document.createElement('p');
        parrafo.innerHTML = resultadoFinal
        sectionMensajes.appendChild(parrafo);
        let botonAire = document.getElementById('boton-aire')
        botonAire.disabled = true
        let botonfuego = document.getElementById('boton-fuego')
        botonfuego.disabled = true
        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true
        let botonAgua = document.getElementById('boton-agua')
        botonAgua.disabled = true
        let botonRayo = document.getElementById('boton-rayo')
        botonRayo.disabled = true
    }
//esta funcion se encarga de iniciar el juego y de seleccionar el animal del jugador y del enemigo

function reiniciarJuego() {
    location.reload()
    //esta funcion se encarga de reiniciar el juego
    //location.reload() recarga la pagina
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//esta funcion se encarga de seleccionar un numero aleatorio entre el minimo y el maximo que le pasemos como parametro


window.addEventListener('load', iniciarJuego)
//el addEventListener es una funcion que se encarga de escuchar un evento en este caso el evento load que se ejecuta cuando la pagina se carga completamente
// y el window.addEventListener('load', iniciarJuego) se encarga de ejecutar la funcion iniciarJuego cuando la pagina se carga completamente pero el srcde esta al inicio del html
