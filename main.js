let accesoCorrecto = false
let hambre = 50,sueño = 50,aburrimiento = 50

loguearse();
if (accesoCorrecto) { 
  iniciarJuego();
}

function loguearse(){
  const usuario = "homerosimpsons"
  const contraseña = "lalolanda"
  alert(`Su usuario es ${usuario} y su contraseña es ${contraseña}. Anótelos para recordarlos`);

  let usuarioIngresado
  let contraseñaIngresada

  for (let i = 0; i < 3; i++) {
    usuarioIngresado = prompt(`Ingrese su usuario: `);
    contraseñaIngresada = prompt(`Ingrese su contraseña: `);

    if (usuarioIngresado.toLowerCase() === usuario && contraseñaIngresada.toLowerCase() === contraseña) {
      alert(`Bienvenido ${usuario} !!`);
      accesoCorrecto = true;
      break;

    }else{
      if (i === 2) {
        alert(`Ya no le quedan intentos para ingresar. El juego se cerrará.`)
        break;

      }else{
        alert(`Alguno de los datos ingresados no son correctos, le quedan ${3-1-i} intentos para ingresar.`)
      }
    }
  }
}

function iniciarJuego() {
  let opcionMenu

  do {
    aburrimiento = limitarEstadisticas(aburrimiento);
    hambre = limitarEstadisticas(hambre);
    sueño = limitarEstadisticas(sueño);

    advertenciaEstadisticas();

    opcionMenu = prompt(mostrarMenu());

    if (opcionMenu == null) {
      alert("Gracias por jugar");
      break;
    }else{
      opcionMenu = parseInt(opcionMenu);
    }
    
    if(isNaN(opcionMenu)){
      alert(`No se reconoce la opción ingresada. Intente nuevamente.`);
      continue;
    }
  
    switch (opcionMenu) {
      case 1:
        mostrarEstadisticas();
        break;
      
      case 2:
        jugar();
        break;
      
      case 3:
        comer();
        break;
  
      case 4:
        dormir();
        break;
  
      case 0:
        alert("Gracias por jugar");
        break;
    }
    
  } while (opcionMenu !== 0);
}

function mostrarMenu() {
  return `-----------------BIENVENIDO A TU MASCOTA VIRTUAL-----------------

    Seleccione una opción:
1- Ver estadisticas de tu mascota
2- Jugar
3- Comer
4- Dormir

0- Salir`
}

function mostrarEstadisticas() {
  alert(`  Estadisticas:

Hambre: ${hambre}
Sueño: ${sueño}
Aburrimiento: ${aburrimiento}`);
}

function limitarEstadisticas(est) {
  if (est > 100) {
    est = 100;
  }else if (est < 0) {
    est = 0;
  }

  return est;
}

function advertenciaEstadisticas() {
  let mensajeAdvertencia = "";

  if (aburrimiento >= 90) { 
    mensajeAdvertencia += "Tu mascota está muy aburrida, hazla jugar para que se divierta un poco.\n";
  }

  if (hambre >= 90) { 
    mensajeAdvertencia += "Tu mascota tiene mucha hambre, hazla comer.\n";
  }

  if (sueño >= 90) { 
    mensajeAdvertencia += "Tu mascota tiene mucho sueño, hazla dormir para que descanse por completo.\n";
  }

  if (mensajeAdvertencia !== "") {
    alert(mensajeAdvertencia);
  }

}

function jugar() {
  aburrimiento = aburrimiento - 20;
  hambre = hambre + 10;
  sueño = sueño + 30;
  alert(`Tu mascota ha jugado con una pelota. Se ha divertido bastante.`);
}

function comer() {
  aburrimiento = aburrimiento + 10;
  hambre = hambre - 40;
  sueño = sueño + 10;
  alert(`Tu mascota ha comido. Ha quedado bastante satisfecha.`);
}

function dormir() {
  aburrimiento = aburrimiento + 20;
  hambre = hambre + 40;
  sueño = 10;
  alert(`Tu mascota ha dormido muy bien. Ha descansado por completo.`);
}