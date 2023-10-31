const usuario = "homerosimpsons"
const contraseña = "lalolanda"

let opcionMenu
let accesoCorrecto = false
let hambre = 50,sueño = 50,diversion = 50

function loguearse(){
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
        alert(`Ya no le quedan intentos para ingresar. El programa se cerrará.`)
        break;
      }else{
        alert(`Alguno de los datos ingresados no son correctos, le quedan ${3-1-i} intentos para ingresar.`)
      }
    }
  }

}

function mostrarMenu() {
  return `  Seleccione una opción:

1- Ver estadisticas
2- Jugar
3- Comer
4- Dormir

0- Salir`
}

function mostrarEstadisticas() {
  alert(`  Estadisticas:

Hambre: ${hambre}
Sueño: ${sueño}
Diversión: ${diversion}`);
}

function menuPrincipal() {
  do {
    opcionMenu = prompt((mostrarMenu()));

    if (opcionMenu == null) {
      alert("Gracias por jugar");
      break;
    }else{
      opcionMenu = parseInt(opcionMenu);
    }
    
    if(isNaN(opcionMenu)){
      alert(`No se reconoce la opción ingresada. Intente nuevamente.`);
    }
  
    switch (opcionMenu) {
      case 1:
        mostrarEstadisticas();
        break;
      
      case 2:
        break;
      
      case 3:
        break;
  
      case 4:
        break;
  
      case 0:
        alert("Gracias por jugar");
        break;
    }
    
  } while (opcionMenu !== 0);
}

loguearse();
if (accesoCorrecto) { 
  opcionMenu = prompt(mostrarMenu());
  menuPrincipal();
}