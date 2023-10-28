let usuario
let constraseña

let opcionMenu

let hambre = 50,sueño = 50,diversion = 50

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


menuPrincipal();