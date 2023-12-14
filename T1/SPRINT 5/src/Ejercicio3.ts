interface Usuario{
    nombre: string;
    edad: number ;
    correoElectronico: string;
}

function obtenerDescripcionUsuario(usuario: Usuario): string {
    return `Hola! Soy el usuario ${usuario.nombre}, tengo ${usuario.edad} años y mi correo electrónico es ${usuario.correoElectronico}`;
  }
const usuario1: Usuario = {
    nombre: "Juan",
    edad: 25,
    correoElectronico: "juan@example.com",
};

const usuario2: Usuario = {
    nombre: "María",
    edad: 30,
    correoElectronico: "maria@example.com",
};

const usuario3: Usuario = {
    nombre: "Carlos",
    edad: 22,
    correoElectronico: "carlos@example.com",
};

const usuario4: Usuario = {
    nombre: "Ana",
    edad: 28,
    correoElectronico: "ana@example.com",
};

const usuario5: Usuario = {
    nombre: "Pedro",
    edad: 35,
    correoElectronico: "pedro@example.com",
};

const arrayUsuarios: Usuario[] = [usuario1, usuario2, usuario3, usuario4, usuario5];


// Función que imprime la descripción de un usuario con un delay
function imprimirConDelay(usuario: Usuario, tiempo: number): void {
    setTimeout(() => {
      console.log(obtenerDescripcionUsuario(usuario));
    }, tiempo);
  }
  
  // Establecer un tiempo de retraso inicial
  let tiempoInicial = 0;
  
  // Imprimir por consola la descripción para cada usuario con un delay
  for (const usuario of arrayUsuarios) {
    imprimirConDelay(usuario, tiempoInicial);
    tiempoInicial += 1000; // Añadir 1000 milisegundos (1 segundo) al tiempo de retraso
  }
  